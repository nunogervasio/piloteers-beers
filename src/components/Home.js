import React from "react";
import styled from "styled-components";
import MainCard from "./mainCard";

const Home = ({ data }) => {
  const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <StyledContainer>
      {data.map(data => (
        <MainCard key={data.id} data={data} />
      ))}
    </StyledContainer>
  );
};

export default Home;
