import React from "react";
import { infoNotAvailable } from "../../utils/utils";
import styles from "./cardContent.module.css";

const CardContent = ({ data }) => {
  // const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("ibu");

  return <div className={styles.content} />;
};

export default CardContent;

// <div className={styles.contentItem}>ABV: {data.abv}</div>
// <div className={styles.contentItem}>IBU: {beerIBU}</div>
