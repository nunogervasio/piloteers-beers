import React from "react";

const CardHeader = ({ header }) => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "center"
    }
  };

  return (
    <div>
      <h2 style={styles.header}>{header}</h2>
    </div>
  );
};

export default CardHeader;
