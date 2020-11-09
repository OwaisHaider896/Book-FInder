import React from "react";
import "./Navbar.css";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="start">
          <ImportContactsOutlinedIcon />
          <h2>Book Finder</h2>
        </div>

        <div className="end">
          <ul>
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="/About">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
