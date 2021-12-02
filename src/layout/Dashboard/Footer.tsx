import React from "react";
import styles from "./styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Copyright © 2020 <b>Eduick</b>. Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
