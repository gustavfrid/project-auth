import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: white;
`;

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -45deg,
    rgb(255, 255, 255, 0) 49%,
    rgb(0, 0, 0) 51%
  );
  border-radius: 50%;
  width: 350px;
  height: 350px;
  animation: ${spin} 2s linear infinite;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <LoadingSpinner />
    </LoaderContainer>
  );
};

export default Loading;
