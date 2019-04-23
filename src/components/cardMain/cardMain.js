import React from "react";
import { Link } from "react-router-dom";
import { infoNotAvailable } from "../../utils/utils";
import CardHeader from "../cardHeader/cardHeader";
import CardContentItem from "../cardContentItem/cardContentItem";

const CardMain = ({ data }) => {
  const styles = {
    item: {
      padding: "15px",
      margin: "5px",
      width: "500px",
      height: "100px",
      border: "2px solid #111830",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column"
    },
    content: {
      display: "flex",
      justifyContent: "space-around"
    }
  };

  const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("IBU");

  return (
    <Link to={`/beer/${data.id}`}>
      <div style={styles.item}>
        <CardHeader header={data.name} />
        <div style={styles.content}>
          <CardContentItem value={data.abv} title="ABV" />
          <CardContentItem value={beerIBU} title="IBU" />
        </div>
      </div>
    </Link>
  );
};

export default CardMain;
