import clsx from "clsx";
import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/auth";
import styles from "./Home.module.css";
import Login from "./Login";
import Head from "next/head";

const Home: React.FC = () => {
  const { showLoginModal } = useContext(AuthContext);
  const [selectedType, setSelectedType] = useState<string>("teacher");

  return (
    <>
      <Head>
        <title>Eduick :: Find Your BEST TEACHER</title>
      </Head>
      <section className={styles.section}>
        <div
          className={clsx(
            styles["section__block"],
            styles["section__block--shapes"]
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
          <div className={clsx(styles["section__shape-3"])}></div>
        </div>
        <div
          className={clsx(
            styles.section__block,
            styles["section__block--form"]
          )}
        >
          <h2 className={clsx(styles.subtitle, "font-title")}>Find your</h2>
          <h1 className={clsx(styles.title, "font-title")}>BEST TEACHER</h1>
          <p className={clsx(styles.description, "font-body")}>
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
                  className={clsx(
                    styles["section__radio-button"],
                    {
                      [styles["section__radio-button--active"]]:
                        selectedType === "teacher",
                      [styles["section__radio-button--inactive"]]:
                        selectedType === "student",
                    },
                    "font-body"
                  )}
                >
                  I{"'"}M A TEACHER
                  <input
                    type="radio"
                    value="teacher"
                    name="type"
                    id="teacher"
                    checked={selectedType === "teacher"}
                    className={styles["section__radio-button--input"]}
                    onChange={() => setSelectedType("teacher")}
                  />
                  <span
                    className={styles["section__radio-button--checkmark"]}
                  ></span>
                </label>
                <label
                  htmlFor="student"
                  className={clsx(
                    styles["section__radio-button"],
                    {
                      [styles["section__radio-button--active"]]:
                        selectedType === "student",
                      [styles["section__radio-button--inactive"]]:
                        selectedType === "teacher",
                    },
                    "font-body"
                  )}
                >
                  I{"'"}M A STUDENT
                  <input
                    type="radio"
                    value="student"
                    name="type"
                    id="student"
                    checked={selectedType === "student"}
                    className={styles["section__radio-button--input"]}
                    onChange={() => setSelectedType("student")}
                  />
                  <span
                    className={styles["section__radio-button--checkmark"]}
                  ></span>
                </label>
              </div>
              <div className={styles.form__action}>
                <button
                  className={clsx(
                    "button--primary",
                    styles["form__search-button"]
                  )}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
          <div className={clsx(styles["section__shape-4--gradient"])}></div>
          <div className={clsx(styles["section__shape-5--gradient"])}></div>
        </div>
      </section>
      <div className={clsx(styles["section__divider"])}></div>
      {showLoginModal && <Login />}
    </>
  );
};

export default Home;
