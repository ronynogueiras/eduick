import React, { useContext, useState } from "react";
import Logo from "./Logo";
import styles from "./styles/Header.module.css";
import Link from "next/link";
import AuthContext from "../../contexts/auth";
import { RiMenu2Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";

const Header: React.FC = () => {
  const { handleOpenModal } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <header>
        <div className={styles.header__menu}>
          <div className={styles["header__menu--item"]}>
            <div className={styles.hearder__logo}>
              <RiMenu2Line
                className={styles.header__hamburguer}
                onClick={() => {
                  setShowMenu(true);
                }}
              />
              <Link href="/" passHref>
                <Logo />
              </Link>
            </div>
            <a href="#" className={clsx(styles["header__menu--link"], "font-body")}>
              How it works
            </a>
            <a href="#" className={clsx(styles["header__menu--link"], "font-body")}>
              About Us
            </a>
          </div>
          <div className={styles["header__get-started"]}>
            <button className="button--primary" onClick={handleOpenModal}>
              Get Started
            </button>
          </div>
        </div>
      </header>
      {showMenu && <MobileMenu handleClose={() => setShowMenu(false)} />}
    </>
  );
};

export default Header;
