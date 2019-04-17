import React, { Component } from "react";
import { infoNotAvailable } from "../../utils/utils";
import { organicFormat } from "../../utils/utils";
import { yearFormat } from "../../utils/utils";
import styles from "./cardDetails.module.css";

class CardDetails extends Component {
  render() {
    const { data } = this.props;
    const glassType = data.glass;
    let glass;

    if (glassType) {
      glass = <p>Glass: {glassType.name}</p>;
    } else {
      glass = null;
    }

    const labelImg = data.labels;
    let img;

    if (labelImg) {
      img = <img src={labelImg.medium} />;
    } else {
      img = null;
    }

    const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("IBU");

    return (
      <div className={styles.card}>
        <h4>Name: {data.name}</h4>
        <p>ABV: {data.abv}</p>
        <p>IBU: {beerIBU}</p>
        <p>Organic: {organicFormat(data.isOrganic)}</p>
        <p>Year: {yearFormat(data.createDate)}</p>
        <p>Status: {data.statusDisplay}</p>
        <p>{glass}</p>
        <p>{img}</p>
      </div>
    );
  }
}
export default CardDetails;

// isOrganic, labels, year, status, if available: related glass data
