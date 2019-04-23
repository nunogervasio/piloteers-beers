import React from "react";
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
        <CardMain key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Home;
