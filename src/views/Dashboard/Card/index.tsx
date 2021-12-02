import clsx from "clsx";
import React from "react";
import styles from "./styles/Card.module.css";
import { AiFillStar } from "react-icons/ai";

type Props = {
  title: string;
  image: string;
  rating: number;
  lessons: number;
};
const stars = new Array(5).fill(null);

const Card: React.FC<Props> = ({ title, image, rating, lessons }) => {
  return (
    <div className={clsx(styles.card)}>
      <img src={image} alt={title} className={clsx(styles.card__image)} />
      <div className={clsx(styles.card__section)}>
        <span className={clsx(styles.card__rating)}>
          {stars.map((_, idx) => (
            <AiFillStar
              key={idx}
              className={clsx({
                [styles["card__rating--filled"]]: idx + 1 <= rating,
                [styles["card__rating--outline"]]: idx + 1 > rating,
              })}
            />
          ))}
        </span>
        <span className={clsx(styles.card__lessons)}>{lessons} LESSONS</span>
      </div>
      <h1 className={styles.card__title}>{title}</h1>
    </div>
  );
};

export default Card;
