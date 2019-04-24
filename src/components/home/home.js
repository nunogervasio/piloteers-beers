import React from "react";
import { StyleRoot } from "radium";
import CardMain from "../cardMain/cardMain";

const Home = ({ data }) => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  };
  return (
    <div style={styles.container}>
      {data.map(data => (
        <StyleRoot key={data.id}>
          <CardMain key={data.id} data={data} />
        </StyleRoot>
      ))}
    </div>
  );
};

export default Home;
