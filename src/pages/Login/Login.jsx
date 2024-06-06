import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/Netflix_icon_2.png";
import { login, signup } from "../../firebase";
import { toast } from "react-toastify";
import netflix_spinner from "../../assets/netflix_spinner.gif"


const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);


  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading?<div className="login_spinner"><img src={netflix_spinner}/></div>:
    <div className="Login">
      <div className="login-box">
        <div className="login-logobox">
          <img src={logo} alt="Netflix Logo" className="login-logo" />
        </div>
        <div className="form_and_sign_layout">
          <h2>{signState}</h2>
          <div className="form-layout">
            <form className="login-form">
              {signState === "Sign Up" && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                />
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Your Password"
              />
              <div className="button">
                <button onClick={user_auth} type="submit">
                  {signState}
                </button>
              </div>
            </form>
          </div>
          <div className="form-closing">
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </div>
          <div className="sign-in-up">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign Up")}>
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setSignState("Sign In")}>
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
