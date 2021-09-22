import React from "react";
import styled from "styled-components";

import Banner from "./components/Banner";
import MobileWallet from "./components/MobileWallet";
// import Numbers from "./components/Numbers";
// import Mission from "./components/Mission";
// import Grant from "./components/Grant";
// import Timeline from "./components/Timeline";
import Footer from "../Footer/index";

const SelfCustody = () => {
  return (
    <WrapperBackground>
      <Banner />
      {/* <Numbers /> */}
      <MobileWallet />
      {/* <Mission />
        <Grant />
        <Timeline />
        <Footer /> */}
      <BackgroundImg src="./images/background-line-min.png"></BackgroundImg>
      <Footer />
    </WrapperBackground>
  );
};

const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
`;

const BackgroundImg = styled.img`
  position: fixed;
  top: -100vh;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 200vh;
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;
export default SelfCustody;
