import React from "react";
import Logo from "./Logo";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.h__menu}>
        <div className={styles["h__menu--item"]}>
          <div className={styles["h__menu--logo"]}>
            <Logo />
          </div>
          <a href="#" className={styles["h__menu--link"]}>
            How it works
          </a>
          <a href="#" className={styles["h__menu--link"]}>
            About Us
          </a>
        </div>
        <div>
          <button className="button--primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
