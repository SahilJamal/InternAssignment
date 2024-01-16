import React from "react";
import "./styles/nav_style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "blue" };
        }}
        className={"Navlinks"}
      >
        Fetch Data
      </NavLink>
      <br />
      <NavLink
        to="/update"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "blue" };
        }}
        className={"Navlinks"}
      >
        Update Data
      </NavLink>
    </div>
  );
};

export default NavBar;
