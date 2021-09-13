import React from "react";
import styled from "styled-components";
import Pramaster from "./components/Pramaster";
import Growing from "./components/Growing";
import Suite from "./components/Suite";
import Superpowers from "./components/Superpowers";
import Banner from "./components/Banner";
import Community from "./components/Community";
import FBTCToken from "./components/FBTCToken";
import Ecosystem from "./components/Ecosystem";
import Footer from "../Footer";
import SpaceNFTs from "./components/SpaceNFTs";
import Planet from "./components/Planet";
import Liquidity from "./components/Liquidity";
import LimitOrder from "./components/LimitOrder";
import Derivative from "./components/Derivative";
import SelfCustody from "./components/SelfCustody";
import System from "./components/System";
import Partners from "./components/Partners";

const Index = () => {
  return (
    <React.Fragment>
      <Banner />
      <WrapperBackground>
        <Planet />
        <Liquidity />
        <LimitOrder />
        <Derivative />
        <SelfCustody />
        <Partners />
        <System />
        {/* <Pramaster />
        <Growing />
        <Suite />
        <Superpowers />
        <SpaceNFTs />
        <FBTCToken />
        <Ecosystem />
        <Community />
        <BackgroundImg src="./images/background-line-min.png"></BackgroundImg> */}
        <Footer />
      </WrapperBackground>
    </React.Fragment>
  );
};

const WrapperBackground = styled.div`
  position: relative;
  font-family: helvetica neue;
  @media (max-width: 576px) {
    overflow-x: hidden;
  }
`;

export default Index;
