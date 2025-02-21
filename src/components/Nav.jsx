import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="link">
        HOME
      </Link>
      <Link to="/About" className="link">
        ABOUT
      </Link>
      <Link to="/Menu" className="link">
        MENU
      </Link>
    </div>
  );
}

export default Nav;
