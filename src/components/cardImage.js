import React from "react";
import styled from "styled-components";

const CardImage = ({ children }) => {
  const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  const StyledImage = styled.img`
    align-self: center;
    width: 256px;
  `;

  return (
    <StyledContainer>
      <StyledImage src={children} alt="beer label" />
    </StyledContainer>
  );
};

export default CardImage;
