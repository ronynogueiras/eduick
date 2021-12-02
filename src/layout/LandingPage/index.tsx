import React from "react";
import Header from "./Header";
import styles from './styles/LandingPage.module.css';

const LandingPage: React.FC = ({ children }) => {
  return (
    <div className={styles.body}>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default LandingPage;
