import React from "react";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Index</NavLink>
    </div>
  );
};
