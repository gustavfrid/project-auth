import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  max-width: 200px;
  margin: 20px auto;
`;

const TextInput = styled.input`
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
  transition: ease-out 0.5s;
  border: 2px solid black;
  height: 12px;

  &:active {
    transform: scale(0.9);
  }
`;

const SubmitBtn = styled.input`
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
  height: 25px;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Signup = (props) => {
  const { nameInput, passwordInput, setNameInput, setPasswordInput } =
    props;
  const onSignUp = (event) => {
    event.preventDefault();

    fetch("https://technigo-project-auth.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: nameInput,
        password: passwordInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(setNameInput(""))
      .then(setPasswordInput(""));
  };
  return (
    <Container onSubmit={onSignUp}>
      <h1>Sign up</h1>
      <label htmlFor="nameInput">Type your username</label>
      <TextInput
        id="nameInput"
        type="text"
        placeholder="username"
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />
      <label htmlFor="passwordInput">Type your password</label>
      <TextInput
        id="passwordInput"
        type="password"
        onChange={(e) => {
          setPasswordInput(e.target.value);
        }}
      />
      <SubmitBtn type="submit" value="Add user" />
    </Container>
  );
};

export default Signup;
