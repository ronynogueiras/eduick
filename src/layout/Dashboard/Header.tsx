import clsx from "clsx";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import styles from "./styles/Header.module.css";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((show) => !show);
  };

  return (
    <>
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
            <BiChevronDown
              className={clsx(styles["header__dropdown"], {
                [styles["header__dropdown--open"]]: showMenu,
              })}
              onClick={toggleMenu}
            />
            <div className={styles["header__profile"]}>
              <img src="/images/profile.png" alt="Profile Picture" />
              <span className={styles["header__profile--dot"]}></span>
            </div>
          </div>
        </div>
      </header>
      {showMenu && (
        <div className={styles["mobile-menu--wrapper"]}>
          <a href="#" className={styles["mobile-menu"]}>
            <span className={styles["mobile-menu__link"]}>
              CHANGE TO TEACHER MODE
            </span>
            <HiOutlineArrowSmRight className={styles["mobile-menu__arrow"]} />
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
