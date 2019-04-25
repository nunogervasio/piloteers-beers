import React from "react";
import styled from "styled-components";
import DetailsCard from "./detailsCard";

const Details = ({ data, match }) => {
  const StyledContainer = styled.div`
    padding: 10px;
    border-radius: 5px;
    margin: 45px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  let id = match.params.id;

  let selectedBeer = data.filter(d => {
    return d.id === id;
  });

  return (
    <StyledContainer>
      {selectedBeer.map(data => (
        <DetailsCard key={data.id} data={data} />
      ))}
    </StyledContainer>
  );
};

export default Details;
