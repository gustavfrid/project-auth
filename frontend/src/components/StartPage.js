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

const Button = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 5px 5px;
  text-align: center;
  font-family: inherit;
  font-size: 12px;
  text-decoration: none;
  color: black;
  background: rgba(218, 46, 46, 0);
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid black;
  height: 12px;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const StartPage = () => {
  const goToSignIn = () => {
    console.log("sign in");
  };
  const goToSignUp = () => {
    console.log("sign up");
  };
  return (
    <Container>
      <h1>Startpage</h1>
      <Button onClick={() => goToSignUp()}>Sign up</Button>
      <Button onClick={() => goToSignIn()}>Sign in</Button>
    </Container>
  );
};

export default StartPage;
