import clsx from "clsx";
import React from "react";
import styles from "./styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={clsx(styles.footer, "font-body")}>
      <span>
        Copyright © 2020 <b>Eduick</b>. Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
