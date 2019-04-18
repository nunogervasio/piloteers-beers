import React from "react";
import styles from "./cardContentItem.module.css";

const CardContentItem = ({ value, title }) => {
  return (
    <div className={styles.contentItem}>
      {title}: {value}
    </div>
  );
};

export default CardContentItem;
