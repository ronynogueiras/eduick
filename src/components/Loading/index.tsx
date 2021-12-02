import React from "react";
import styles from "./styles/Loading.module.css";
import clsx from "clsx";

const Loading: React.FC = () => {
  return (
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
  );
};

export default Loading;
