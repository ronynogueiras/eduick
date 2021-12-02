import React from "react";
import styles from "./styles/Modal.module.css";
import { MdClose } from "react-icons/md";

type Props = {
  handleClose(): void;
};

const Modal: React.FC<Props> = ({ children, handleClose = () => {} }) => {
  return (
    <>
      <div
        id="overlay-modal"
        className={styles.overlay}
        onClick={(event) => {
          const clicked = event.target as HTMLElement;
          if (["overlay-modal", "modal-wrapper"].includes(clicked.id)) {
            handleClose();
          }
        }}
      >
        <div id="modal-wrapper" className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__close} onClick={handleClose}>
              <MdClose />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
