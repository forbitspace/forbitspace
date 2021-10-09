import React from "react";
import styled from "styled-components";

import FooterContributor from "./components/Footer";
import Banner from "./components/Banner";
import Members from "./components/Members";
import Footer from "../Footer";
import { MemberData } from "./constants";
// import Numricals from "./components/Numricals";

const Index = () => {
  return (
    <WrapperBackground>
      <Container className="container">
        <Banner />
        {/* <Numricals /> */}
        <Members title={"Active core contributors"} data={MemberData} />
        {/* <Members title={"Auditors"} data={AuditorData} /> */}
        <FooterContributor />
        <Footer />
      </Container>
      <BackgroundImg src="./images/background-line-min.png"></BackgroundImg>
    </WrapperBackground>
  );
};

const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
  /* background-image: url(./images/background-line-min.png); */
  background-size: auto;
`;
const Container = styled.div``;

const BackgroundImg = styled.img`
  position: absolute;
  top: -100vh;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% + 100vh);
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;

export default Index;
