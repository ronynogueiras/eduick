import clsx from "clsx";
import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <section className={styles.section}>
        <div
          className={clsx(
            styles["section__block--shapes"],
            styles["section__block"]
          )}
        >
          <div
            className={clsx(
              styles["section__shape"],
              styles["section__shape--image"]
            )}
          ></div>
          <div
            className={clsx(
              styles["section__shape"],
              styles["section__shape--gradient-1"]
            )}
          ></div>
          <div
            className={clsx(
              styles["section__shape"],
              styles["section__shape--gradient-2"]
            )}
          ></div>
          <div className={clsx(styles["section__shape-2--gradient"])}></div>
        </div>
        <div className={styles.section__block}>
          <h2 className={clsx(styles.subtitle, "font-title")}>Find your</h2>
          <h1 className={clsx(styles.title, "font-title")}>BEST TEACHER</h1>
          <p className={clsx(styles.description)}>
            Whether you are a student trying to find your ideal private language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
          </p>
          <form>
            <div>
              <input
                type="text"
                placeholder="Type here what are you looking for"
                className="input input--full"
              />
            </div>
            <div className={clsx(styles["section__form"])}>
              <div className={clsx(styles["section__form--item"])}>
                <label
                  htmlFor="teacher"
                  className={clsx(styles["section__radio-button"], styles["section__radio-button--active"])}
                >
                  <input type="radio" name="type" id="teacher" />
                  I'M A TEACHER
                </label>
                <label
                  htmlFor="student"
                  className={clsx(styles["section__radio-button"], styles["section__radio-button--inactive"])}
                >
                  <input type="radio" name="type" id="student" />
                  I'M A STUDENT
                </label>
              </div>
              <div>
                <button className="button--primary">SEARCH</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className={clsx(styles["section__divider"])}></div>
    </>
  );
};

export default Home;
