import clsx from "clsx";
import React from "react";
import styles from "./styles/Banner.module.css";

const Banner: React.FC = () => {
  return (
    <section className={clsx(styles.banner)}>
      <div className={clsx(styles["banner__shape-1"])}></div>
      <div className={clsx(styles["banner__shape-2"])}></div>
      <div className={clsx(styles.banner__container)}>
        <div className={clsx(styles.banner__wrapper)}>
          <h1 className={clsx(styles.banner__title, "font-title")}>
            Hello{" "}
            <span className={clsx(styles["banner__title--bold"])}>Student</span>
            <span className={clsx(styles["banner__title--dot"])}>.</span>
          </h1>
          <p className="font-body">
            Whether you are a student trying to find your ideal private language
            teachers/tutors
          </p>
        </div>
        <div className={styles["banner__image--wrapper"]}>
          <div className={styles["banner__shape-image"]}></div>
          <img
            src="/images/meeting.png"
            alt="Meeting"
            className={clsx(styles.banner__image)}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
