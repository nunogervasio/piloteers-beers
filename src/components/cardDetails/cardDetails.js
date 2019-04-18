import React, { Component } from "react";
import CardHeader from "../cardHeader/cardHeader";
import { infoNotAvailable, organicFormat, yearFormat } from "../../utils/utils";
import defaultImg from "../../images/beer.svg";
import styles from "./cardDetails.module.css";
import CardContent from "../cardContent/cardContent";
import CardContentItem from "../cardContentItem/cardContentItem";
import CardImage from "../cardImage/cardImage";

class CardDetails extends Component {
  render() {
    console.log("carddetails data: ", this.props.data);
    const { data } = this.props;
    console.log("data is: ", JSON.stringify(this.props.data)); //data works but data.name dose not!
    // GLASS
    const glassType = data.glass;
    const glass = glassType ? glassType.name : infoNotAvailable("Glass");
    // IMAGE
    const labelImg = data.labels;
    const img = labelImg ? labelImg.medium : defaultImg;
    // IBU
    const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("IBU");

    return (
      <div className={styles.item}>
        <CardImage value={img} />

        <div className={styles.content}>
          {/* <CardContent> */}
          <CardHeader data={data} />

          <CardContentItem value={data.abv} title="ABV" />
          <CardContentItem value={beerIBU} title="IBU" />
          {/* <CardContentItem
            value={organicFormat(data.isOrganic)}
            title="Organic"
          /> */}
          <CardContentItem value={yearFormat(data.createDate)} title="Year" />
          <CardContentItem value={data.statusDisplay} title="Status" />
          <CardContentItem value={glass} title="Glass" />
          {/* </CardContent> */}
        </div>
      </div>
    );
  }
}
export default CardDetails;
