import React, { useState } from "react";
import Logo from "../img/logoRainbow.png";
import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import HandleSwitch from "./HandleSwitch";

function Nav({ onSearch }) {
  const [checked, setChecked] = useState(false);

  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className={styles.logoTitle}>
            <img id={styles.logoHenry} src={Logo} alt="img not found" />
            <h1 className={styles.title}>Air Balloon Weather</h1>
          </div>
        </NavLink>
      </div>
      <div className={styles.container}>
        <SearchBar onSearch={onSearch} />
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <span className={styles.about}>About</span>
        </NavLink>
        <HandleSwitch id="checkbox" checked={checked} onChange={setChecked} />
      </div>
    </nav>
  );
}

export default Nav;
