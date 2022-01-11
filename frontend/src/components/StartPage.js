import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  max-width: 200px;
  margin: 20px auto;
`;

const StartPage = () => {
  return (
    <Container>
      <h1>Start</h1>
    </Container>
  );
};

export default StartPage;
