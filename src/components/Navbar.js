import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const NavbarCocktail = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} className="logo" alt="cocktail db logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarCocktail;
