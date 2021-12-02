import clsx from "clsx";
import React, { useState } from "react";
import Layout from "../../layout/Dashboard";
import Banner from "./Banner";
import Card from "./Card";
import styles from "./styles/Dashboard.module.css";

const Dashboard: React.FC & { Layout: React.FC } = () => {
  const [courses] = useState(new Array(12).fill(1));

  return (
    <div className={clsx("container", styles.dashboard)}>
      <Banner />
      <section className={clsx(styles.courses)}>
        {courses.map((_, idx) => (
          <Card
            key={idx}
            image="/images/course_image.png"
            title="Master English: Improve Your Speaking"
            rating={3}
            lessons={10}
          />
        ))}
      </section>
      <div className={styles.loading}>
        <div
          className={clsx(styles.loading__dot, styles["loading__dot--1"])}
        ></div>
        <div
          className={clsx(styles.loading__dot, styles["loading__dot--2"])}
        ></div>
        <div
          className={clsx(styles.loading__dot, styles["loading__dot--3"])}
        ></div>
      </div>
      <div></div>
    </div>
  );
};

Dashboard.Layout = Layout;

export default Dashboard;
