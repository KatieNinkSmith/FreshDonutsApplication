import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Menu">Menu</Link>
    </div>
  );
}

export default Nav;
