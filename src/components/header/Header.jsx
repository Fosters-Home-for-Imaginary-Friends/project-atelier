import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import ToggleSwitch from "./ToggleSwitch.jsx";
import Menu from "./Menu.jsx";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <AiOutlineMenu className="menu-icon" onClick={() => setShowMenu(!showMenu)}/>
      { showMenu ? <Menu setShowMenu={ setShowMenu }/> : null }
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