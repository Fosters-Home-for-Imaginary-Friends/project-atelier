import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import ToggleSwitch from "./ToggleSwitch.jsx";

const Header = () => {
  return (
    <header>
      <AiOutlineMenu className="menu-icon"/>
      <h1 id="logo">ATELIER</h1>
      <div className="header-links">
        <label className="header-search-label" htmlFor="search">SEARCH
          <input className="header-search" name="search"></input>
        </label>
        <span className="header-login">LOGIN</span>
        <span className="header-help">HELP</span>
        <BsBag className="header-bag-icon"/>
        <ToggleSwitch />
      </div>
    </header>
  );
}

export default Header;