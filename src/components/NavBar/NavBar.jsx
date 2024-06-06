import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/Netflix_icon.png";
import search_icon from "../../assets/search.png";
import bell_icon from "../../assets/bell_icon.png";
import profile_img from "../../assets/profile_image.png";
import caret from "../../assets/caret.png";
import { logout } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navref = useRef();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        navref.current.classList.add('nav-dark');
      } else {
        navref.current.classList.remove('nav-dark');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navref} className="NavBar">
      <div className="NavBar_left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="NavBar_right">
        <img src={search_icon} alt="Search" />
        <p>Children</p>
        <div className="NavBar_rightProfile">
          <img src={bell_icon} alt="Bell" />
          <img src={profile_img} alt="Profile" />
          <img src={caret} alt="Caret" />
          <div className="dropdown">
            <p onClick={handleLogout}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
