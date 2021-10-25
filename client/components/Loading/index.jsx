import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <WrapperLoading>
      <img src="../images/logo/loading-logo.png" alt="" />
    </WrapperLoading>
  );
};

const WrapperLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  @keyframes logo-loading {
    0% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1.2);
    }
  }

  img {
    max-width: 400px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    animation: logo-loading 2s linear infinite;
    @media (max-width: 576px) {
      width: 90%;
    }
  }
`;

export default Loading;
