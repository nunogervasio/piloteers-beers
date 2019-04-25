import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { infoNotAvailable } from "../utils/utils";
import CardContentItem from "./cardContentItem";
import { CardHeader } from "./cardHeader";
import { Card } from "./card";

const StyledCard = styled(Card)`
  width: 275px;
  height: 125px;
  justify-content: space-between;
  :hover {
    background-color: rgb(222, 222, 222);
    color: red;
    cursor: pointer;
  }
  @media (min-width: 576px) {
    width: 500px;
    height: 150px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const MainCard = ({ data }) => {
  const beerABV = data.abv ? `ABV: ${data.abv}` : infoNotAvailable("ABV");
  const beerIBU = data.ibu ? `IBU: ${data.ibu}` : infoNotAvailable("IBU");

  return (
    <StyledLink to={`/beer/${data.id}`}>
      <StyledCard>
        <CardHeader>{data.nameDisplay}</CardHeader>
        <CardContent>
          <CardContentItem>{beerABV}</CardContentItem>
          <CardContentItem>{beerIBU}</CardContentItem>
        </CardContent>
      </StyledCard>
    </StyledLink>
  );
};
export default MainCard;
