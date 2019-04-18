import React from "react";
import styles from "./cardHeader.module.css";

const CardHeader = ({ data }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h2>{data.name}</h2>
      </div>
    </React.Fragment>
  );
};

export default CardHeader;
