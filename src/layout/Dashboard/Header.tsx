import clsx from "clsx";
import React from "react";
import Logo from "../../components/Logo";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.header__container, "container")}>
        <Logo />
        <div className={styles.header__menu}>
          <a href="#" className={styles.header__link}>
            My Classes
          </a>
        </div>
        <div className={styles.header__options}>
          <button className={styles["header__options--button"]}>
            CHANGE TO TEACHER MODE
          </button>
          <div className={styles["header__profile"]}>
            <img src="/images/profile.png" alt="" />
            <span className={styles["header__profile--dot"]}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
