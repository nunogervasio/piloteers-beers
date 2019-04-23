import React from "react";
import CardDetails from "../cardDetails/cardDetails";

const BeerDetails = ({ data, match }) => {
  const styles = {
    container: {
      padding: "10px",
      borderRadius: "5px",
      margin: "45px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  };
  let id = match.params.id;

  let selectedBeer = data.filter(d => {
    return d.id === id;
  });

  return (
    <div style={styles.container}>
      {selectedBeer.map(data => (
        <CardDetails key={data.id} data={data} />
      ))}
    </div>
  );
};

export default BeerDetails;
