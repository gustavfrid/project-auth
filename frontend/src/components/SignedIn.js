import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { user } from "../reducers/user";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  max-width: 200px;
  margin: 20px auto;
`;

const Button = styled.button`
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

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgba(0, 0, 0, 1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const SignedIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((store) => store.user.accessToken);

  const signOut = () => {
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setError(null));
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <Container>
      <h1>You are signed in!</h1>
      <Button onClick={() => signOut()}>Sign out</Button>
    </Container>
  );
};

export default SignedIn;
