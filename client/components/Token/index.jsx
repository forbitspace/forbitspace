import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import Footer from "../Footer";

const Index = () => {
  return (
    <WrapperBackground>
      <WrapContent>
        <Banner />
        <BackgroundImg src="./images/background-line-min.png"></BackgroundImg>
      </WrapContent>
      <Footer />
    </WrapperBackground>
  );
};
const WrapperBackground = styled.div`
  position: relative;
  font-family: helvetica neue;
  position: relative;
  overflow-x: hidden;
  background-size: auto;
  @media (max-width: 576px) {
    overflow-x: hidden;
  }
`;

const WrapContent = styled.div`
  min-height: calc(100vh - 330px);
`;

const BackgroundImg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  /* height: calc(100% + 100vh); */
  min-height: 100vh;
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;

export default Index;
