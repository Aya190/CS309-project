
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
    
      <div className="navbar-links">
        <div>
          <Link to="/posts">posts</Link>
        </div>
        <div>z
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
