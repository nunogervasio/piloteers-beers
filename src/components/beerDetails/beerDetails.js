import React from "react";
import CardDetails from "../cardDetails/cardDetails";
import styles from "./beerDetails.module.css";

const BeerDetails = ({ data, match }) => {
  console.log("data is: ", data);
  let id = match.params.id;
  console.log("match id is: ", id);
  console.log("data is: ", data);

  let selectedBeer = data.filter(d => {
    return d.id === id; //TEST
  });

  console.log("selectedbeer is: ", JSON.stringify(selectedBeer));
  return (
    <div className={styles.container}>
      <CardDetails data={selectedBeer} />
      {/* {data.map(data => (
        <CardDetails data={data} />
      ))} */}
    </div>
  );
};

export default BeerDetails;
