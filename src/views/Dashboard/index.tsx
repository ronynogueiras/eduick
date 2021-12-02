import clsx from "clsx";
import React from "react";
import Layout from "../../layout/Dashboard";
import Banner from "./Banner";
import Card from "./Card";
import styles from "./styles/Dashboard.module.css";

const Dashboard: React.FC & { Layout: React.FC } = () => {
  return (
    <div className={clsx("container", styles.dashboard)}>
      <Banner />
      <section>
        <Card />
      </section>
      <div></div>
    </div>
  );
};

Dashboard.Layout = Layout;

export default Dashboard;
