import React from "react";
import styled from "styled-components";

import Banner from "./components/Banner";
// import MobileWallet from "./components/MobileWallet";
// import Numbers from "./components/Numbers";
import Footer from "../Footer/index";
import RoadMap from "./components/RoadMap";
import AboutUs from "./components/AboutUs";
import BallonCrypto from "./components/BallonCrypto";

const Foundation = () => {
  return (
    <WrapperBackground>
      <WrapContent>
        <AboutUs />
        <Banner />
        <BallonCrypto />
        {/* <Numbers /> */}
        <RoadMap />
        <BackgroundImg src="./images/background-line-min.png"></BackgroundImg>
      </WrapContent>
      <Footer />
    </WrapperBackground>
  );
};

const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`;

const WrapContent = styled.div`
  @media (min-width: 1440px) {
    min-height: 100vh;
  }
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
export default Foundation;
