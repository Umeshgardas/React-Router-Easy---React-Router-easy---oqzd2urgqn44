import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink className="home-link" style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink className="index-link" style={navLinkStyles} to="/about">
        Index
      </NavLink>
    </div>
  );
};
