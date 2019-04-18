import React from "react";
import styles from "./cardImage.module.css";

const CardImage = ({ value }) => {
  return (
    <div className={styles.container}>
      <img src={value} className={styles.img} />
    </div>
  );
};

export default CardImage;
