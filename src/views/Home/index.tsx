import clsx from "clsx";
import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/auth";
import styles from "./Home.module.css";
import Login from "./Login";

const Home: React.FC = () => {
  const { showLoginModal } = useContext(AuthContext);
  const [selectedType, setSelectedType] = useState<string>("teacher");

  return (
    <>
      <section className={styles.section}>
        <div className={clsx(styles["section__block"])}>
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
                  className={clsx(styles["section__radio-button"], {
                    [styles["section__radio-button--active"]]:
                      selectedType === "teacher",
                    [styles["section__radio-button--inactive"]]:
                      selectedType === "student",
                  })}
                >
                  I'M A TEACHER
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
                  className={clsx(styles["section__radio-button"], {
                    [styles["section__radio-button--active"]]:
                      selectedType === "student",
                    [styles["section__radio-button--inactive"]]:
                      selectedType === "teacher",
                  })}
                >
                  I'M A STUDENT
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
              <div>
                <button className="button--primary">SEARCH</button>
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
