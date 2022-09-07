import React, { useContext, useState, useEffect } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import AuthContext from "../AuthStore/AuthProvider";

function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const photoURL = localStorage.getItem("profile");
  const handleLogout = () => {
    /*global FB */
    window.FB.getLoginStatus((res) => {
      console.log(res.status);
      if (res.status === "connected") {
        FB.logout((res) => console.log("Facebook Logged Out", res));
      }
    });
    auth.logout();
    navigate("/");
    console.log("logged Out");
  };

  return (
    <div>
      <nav className="home__nav">
        <ul>
          <li>
            <NavLink to="main">Main</NavLink>
          </li>
          <li>
            <NavLink to="feature">Feature</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contactus">Contact Us</NavLink>
          </li>
        </ul>
        <div className="right_section">
          <div className="profile_section">
            <img src={photoURL} alt="" className="profile_section-img" />
            <span>{auth.user}</span>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
