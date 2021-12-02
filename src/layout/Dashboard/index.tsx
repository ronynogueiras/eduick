import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from './styles/Dashboard.module.css'


const Dashboard: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Dashboard;
