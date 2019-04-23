import React from "react";

const CardImage = ({ value }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center"
    },
    img: {
      alignSelf: "center",
      width: "256px"
    }
  };
  return (
    <div style={styles.container}>
      <img src={value} style={styles.img} alt="beer label" />
    </div>
  );
};

export default CardImage;
