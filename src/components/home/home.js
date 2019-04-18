import React from "react";
import CardMain from "../cardMain/cardMain";
import styles from "./home.module.css";

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map(data => (
        <CardMain data={data} />
      ))}
    </div>
  );
};

export default Home;
