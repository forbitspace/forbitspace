import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
// import Title from "../../Title";
// import DecentralizedText from "./DecentralizedText";
import ButtonApp from "../../Header/components/AppLink";

const Banner = () => {
  return (
    <BoxSection>
      <WrapImgBanner>
        <img src="../images/home-page/banner.png" alt="" />
        <BackgroundBanner />
      </WrapImgBanner>
      <Container>
        <Content className="title-banner text-dark text-visi">
          <Title>forbitspace</Title>
          {/* <Title></Title> */}
          <Text>The Decentralized Exchange Aggregator</Text>
          <SubText>
            The forbitspace unity Decentralized Protocols that allows crypto
            traders to tap deep liquidity and receive better pricing one single
            interface.
          </SubText>
          <WrapperButtonApp>
            <ButtonApp marginRight="0px" />
          </WrapperButtonApp>
        </Content>
      </Container>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */

  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const WrapImgBanner = styled.div`
  width: 100vw;
  height: auto;
  max-width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
const BackgroundBanner = styled.div`
  background: url("./images/background-banner-01-min.png");
  background-size: cover;
  background-position: center;
  /* position: absolute; */
  top: -190px;
  left: 0;
  width: 100%;
  /* height: 100vh; */
  z-index: -1;
  opacity: 0.4;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 50%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;
const Title = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
const WrapperButtonApp = styled.div`
  max-width: 350px;
  /* margin: 0 auto; */
  /* width: 90%; */
  text-align: left;
  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: unset;
  }
`;

const TitleBanner = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: right;
  font-family: "Prompt", sans-serif;
  color: #3a3939;
  margin-bottom: 30vh;
  line-height: 50px;

  animation: animationTextBanner 3s 1;

  @media (max-width: 770px) {
    font-size: 35px;
    margin-bottom: 50px;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
    text-align: left;
  }
`;

export default Banner;
