import { useState } from "react";
import "./NavMenu.scss";

export default function NavMenu() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <button
        className="nav-menu-control"
        onClick={() => setActiveMenu((prev) => !prev)}
      >
        <img src="/assets/menu.png" alt="menu control icon" />
      </button>
      <ul className={activeMenu ? "menu active" : "menu"}>
        <li className="menu-item">
          <a href="/">Home</a>
        </li>
        <li className="menu-item">
          <a href="/">About</a>
        </li>
        <li className="menu-item">
          <a href="/">Contact</a>
        </li>
        <li className="menu-item">
          <a href="/">Agents</a>
        </li>
        <li className="menu-item">
          <a href="/">Sign in</a>
        </li>
        <li className="menu-item">
          <a href="/">Sign up</a>
        </li>
      </ul>
    </>
  );
}
