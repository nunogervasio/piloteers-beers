import React from "react";
import { Link } from "react-router-dom";
import { infoNotAvailable } from "../../utils/utils";
import styles from "./cardMain.module.css";
import CardContent from "../cardContent/cardContent";
import CardHeader from "../cardHeader/cardHeader";
import CardContentItem from "../cardContentItem/cardContentItem";

const CardMain = ({ data }) => {
  // IBU
  const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("IBU");
  return (
    <Link to={`/beer/${data.id}`}>
      <div className={styles.item}>
        <CardHeader data={data} />
        <div className={styles.content}>
          <CardContentItem value={data.abv} title="ABV" />
          <CardContentItem value={beerIBU} title="IBU" />
          {/* <CardContent data={data} /> */}
        </div>
      </div>
    </Link>
  );
};

export default CardMain;

{
  /* <Link to={`/mission/${name}`}>
<div className={styles.card}>
  <div className={styles.img}>
    <img src={patch_url} className={styles.patch} alt="mission patch" />
  </div>
</div>
</Link> */
}
