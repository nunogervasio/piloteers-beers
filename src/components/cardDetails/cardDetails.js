import React, { Component } from "react";
import { infoNotAvailable } from "../../utils/utils";
import { organicFormat } from "../../utils/utils";
import { yearFormat } from "../../utils/utils";
import defaultImg from "../../images/beer.svg";
import styles from "./cardDetails.module.css";
// import youtubeImg from "../../img/youtube-1.svg";
class CardDetails extends Component {
  render() {
    const { data } = this.props;
    const glassType = data.glass;
    let glass;

    if (glassType) {
      glass = <p>Glass: {glassType.name}</p>;
    } else {
      //   glass = null;
      glass = <p>Glass: {infoNotAvailable("Glass")}</p>;
    }

    const labelImg = data.labels;
    let img;

    if (labelImg) {
      img = (
        <p>
          <img src={labelImg.medium} />
        </p>
      );
    } else {
      //   img = null;
      img = (
        <p>
          <img src={defaultImg} className={styles.imgWidth} />
        </p>
      );
    }

    const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("IBU");

    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>{data.name}</h2>
          <div className={styles.img}>{img}</div>
          <div>
            <p>ABV: {data.abv}</p>
            <p>IBU: {beerIBU}</p>
            <p>Organic: {organicFormat(data.isOrganic)}</p>
            <p>Year: {yearFormat(data.createDate)}</p>
            <p>Status: {data.statusDisplay}</p>
            {glass}
          </div>
        </div>
      </div>
    );
  }
}
export default CardDetails;

// isOrganic, labels, year, status, if available: related glass data
