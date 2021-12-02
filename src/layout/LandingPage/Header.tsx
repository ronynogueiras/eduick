import React, { useContext } from "react";
import Logo from "./Logo";
import styles from "./styles/Header.module.css";
import Link from "next/link";
import AuthContext from "../../contexts/auth";

const Header: React.FC = () => {
  const { handleOpenModal } = useContext(AuthContext);
  return (
    <header>
      <div className={styles.h__menu}>
        <div className={styles["h__menu--item"]}>
          <div className={styles["h__menu--logo"]}>
            <Link href="/" passHref>
              <Logo />
            </Link>
          </div>
          <a href="#" className={styles["h__menu--link"]}>
            How it works
          </a>
          <a href="#" className={styles["h__menu--link"]}>
            About Us
          </a>
        </div>
        <div>
          <button className="button--primary" onClick={handleOpenModal}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
