import React from "react";
import styled from "styled-components";
import { infoNotAvailable, organicFormat, yearFormat } from "../utils/utils";
import { CardHeader } from "./cardHeader";
import CardContentItem from "./cardContentItem";
import { Card } from "./card";
import CardImage from "./cardImage";
import defaultImg from "../images/beer.svg";

const DetailsCard = ({ data }) => {
  const StyledCard = styled(Card)`
    color: black;
    @media (min-width: 576px) {
      flex-direction: row;
    }
  `;

  const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
  `;

  const beerABV = data.abv ? `ABV: ${data.abv}` : infoNotAvailable("ABV");

  const beerIBU = data.ibu ? `IBU: ${data.ibu}` : infoNotAvailable("IBU");

  const beerOrganic = data.isOrganic
    ? `Organic: ${organicFormat(data.isOrganic)}`
    : infoNotAvailable("Organic");

  const beerDate = data.createDate
    ? `Year: ${yearFormat(data.createDate)}`
    : infoNotAvailable("Year");

  const beerStatus = data.statusDisplay
    ? `Status: ${data.statusDisplay}`
    : infoNotAvailable("Status");

  const glassType = data.glass
    ? `Glass: ${data.glass.name}`
    : infoNotAvailable("Glass");

  const labelImg = data.labels ? `${data.labels.medium}` : defaultImg;

  return (
    <StyledCard>
      <CardImage>{labelImg}</CardImage>
      <CardContent>
        <CardHeader>{data.nameDisplay}</CardHeader>
        <CardContentItem>{beerABV}</CardContentItem>
        <CardContentItem>{beerIBU}</CardContentItem>
        <CardContentItem>{beerOrganic}</CardContentItem>
        <CardContentItem>{beerDate}</CardContentItem>
        <CardContentItem>{beerStatus}</CardContentItem>
        <CardContentItem>{glassType}</CardContentItem>
      </CardContent>
    </StyledCard>
  );
};
export default DetailsCard;
