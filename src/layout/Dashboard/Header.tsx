import clsx from "clsx";
import React from "react";
import Logo from "../../components/Logo";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.header__container)}>
        <Logo />
        <div>
          <a href="#">My Classes</a>
        </div>
        <div>
          <button>CHANGE TO TEACHER MODE</button>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
