import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Title from "../../Title";
import DecentralizedText from "./DecentralizedText";
import ButtonApp from "../../Header/components/AppLink";

const Banner = () => {
  return (
    <BoxSection>
      <Container>
        <div className="goruphome">
          <TitleBanner className="title-banner text-dark text-visi">
            Decentralized Finance Space
            <br /> The next evolution of the finance system
          </TitleBanner>
        </div>
        <DecentralizedText />
      </Container>
      <WrapperButtonApp>
        <ButtonApp marginRight="0px" />
      </WrapperButtonApp>
      <BackgroundBanner />
    </BoxSection>
  );
};

const BackgroundBanner = styled.div`
  background: url("./images/background-banner-01-min.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -190px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.4;
  @media (max-width: 768px) {
    display: none;
  }
`;

const WrapperButtonApp = styled.div`
  max-width: 350px;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  @media (max-width: 1200px) {
    display: block;
  }
`;

const BoxSection = styled.section`
  position: relative;
  min-height: 88vh;
  padding: 10vh 0 0;

  @media (max-width: 770px) {
    padding-top: 10px;
    min-height: 80vh;
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
