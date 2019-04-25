import React from "react";
import styled from "styled-components";

const CardItem = styled.div`
  margin: 0.2em;
  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;

const CardContentItem = ({ children }) => {
  return <CardItem>{children}</CardItem>;
};

export default CardContentItem;
