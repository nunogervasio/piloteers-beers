import React from "react";
// import styles from "./cardContentItem.module.css";

const CardContentItem = ({ value, title }) => {
  const styles = {
    contentItem: {
      margin: "0.2em"
    }
  };
  return (
    <div style={styles.contentItem}>
      {title}: {value}
    </div>
  );
};

export default CardContentItem;
