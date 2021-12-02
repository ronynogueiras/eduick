import React, { useContext, useState } from "react";
import Modal from "../../../components/Modal";
import styles from "./styles/Login.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import clsx from "clsx";
import AuthContext from "../../../contexts/auth";
import { useRouter } from "next/dist/client/router";

const Login: React.FC = () => {
  const router = useRouter();
  const { handleCloseModal } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((current) => !current);
  };

  return (
    <Modal handleClose={handleCloseModal}>
      <div>
        <h2 className={styles.subtitle}>Get Started</h2>
        <h1 className={styles.title}>JUST LOGIN</h1>
        <form
          action="#"
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            router.push("/dashboard");
            handleCloseModal();
          }}
        >
          <div className={styles.form__group}>
            <label htmlFor="username" className={styles.form__label}>
              Username:
            </label>
            <input type="text" className="input input--full" id="username" />
          </div>
          <div
            className={clsx(
              styles.form__group,
              styles["form__group--password"]
            )}
          >
            <label htmlFor="password" className={styles.form__label}>
              Password:
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              className="input input--full"
              id="password"
            />
            <div
              className={styles["form__toggle-password"]}
              onClick={togglePassword}
            >
              {!showPassword && (
                <AiOutlineEye
                  className={styles["form__toggle-password--icon"]}
                />
              )}
              {showPassword && (
                <AiOutlineEyeInvisible
                  className={styles["form__toggle-password--icon"]}
                />
              )}
            </div>
          </div>
          <div className={styles.form__action}>
            <button className="button--primary">LOGIN</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
