import clsx from "clsx";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import Logo from "../../../components/Logo";
import AuthContext from "../../../contexts/auth";
import styles from "./styles/MobileMenu.module.css";

type Props = {
  handleClose(): void;
};

const MobileMenu: React.FC<Props> = ({ handleClose }) => {
  const { handleOpenModal } = useContext(AuthContext);

  return (
    <div className={styles["mobile-menu"]}>
      <div className={styles["mobile-menu__header"]}>
        <Logo />
        <MdClose
          className={styles["mobile-menu__header--close"]}
          onClick={handleClose}
        />
      </div>
      <div className={styles["mobile-menu__content"]}>
        <ul className={styles["mobile-menu__list"]}>
          <li className={styles["mobile-menu__list--item"]}>How it works</li>
          <li className={styles["mobile-menu__list--item"]}>About Us</li>
        </ul>
        <div className={styles["mobile-menu__get-started"]}>
          <button
            className={clsx(
              "button--primary",
              styles["mobile-menu__get-started--action"]
            )}
            onClick={() => {
              handleClose();
              handleOpenModal();
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
