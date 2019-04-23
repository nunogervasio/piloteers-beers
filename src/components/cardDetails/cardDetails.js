import React from "react";
import { infoNotAvailable, organicFormat, yearFormat } from "../../utils/utils";
import CardHeader from "../cardHeader/cardHeader";
import CardContentItem from "../cardContentItem/cardContentItem";
import CardImage from "../cardImage/cardImage";
import defaultImg from "../../images/beer.svg";

const CardDetails = ({ data }) => {
  const styles = {
    item: {
      padding: "15px",
      margin: "5px",
      border: "2px solid black",
      borderRadius: "5px",
      color: "#black",
      display: "flex"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "1em"
    }
  };

  const glassType = data.glass ? data.glass.name : infoNotAvailable("Glass");
  const labelImg = data.labels ? data.labels.medium : defaultImg;
  const beerIBU = data.ibu ? data.ibu : infoNotAvailable("IBU");

  return (
    <div style={styles.item}>
      <CardImage value={labelImg} />
      <div style={styles.content}>
        <CardHeader header={data.nameDisplay} />
        <CardContentItem value={data.abv} title="ABV" />
        <CardContentItem value={beerIBU} title="IBU" />
        <CardContentItem
          value={organicFormat(data.isOrganic)}
          title="Organic"
        />
        <CardContentItem value={yearFormat(data.createDate)} title="Year" />
        <CardContentItem value={data.statusDisplay} title="Status" />
        <CardContentItem value={glassType} title="Glass" />
      </div>
    </div>
  );
};
export default CardDetails;
