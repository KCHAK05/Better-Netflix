import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAz6yq1S4YY7CxDpOFZMrL1MsMPhYCpmVA",
  authDomain: "netflix-new-83b1c.firebaseapp.com",
  projectId: "netflix-new-83b1c",
  storageBucket: "netflix-new-83b1c.appspot.com",
  messagingSenderId: "361427171285",
  appId: "1:361427171285:web:f03dd8a25eea580f496f5c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log("Error signing up:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      console.log("User data:", userDoc.data());
      toast.success("Logged in");
    } else {
      console.log("User not found in Firestore");
    }
  } catch (error) {
    console.log("Error logging in:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out");
  } catch (error) {
    console.log("Error logging out:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

export { auth, db, login, signup, logout };
