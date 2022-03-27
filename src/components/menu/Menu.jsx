import React from "react";
import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul className="sideBar-links">
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#intro">
            Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#projects">
            Projects
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#references">
            References
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="sideBar-links--link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
