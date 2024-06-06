import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero"
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <NavBar/>
      <Hero/>
    </div>
  );
};

export default Home;
