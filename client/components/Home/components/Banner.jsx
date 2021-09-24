import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
// import Title from "../../Title";
// import DecentralizedText from "./DecentralizedText";
// import ButtonApp from "../../Header/components/AppLink";

const Banner = () => {
  const [scroll, setScroll] = useState(true);
  window.addEventListener("scroll", function () {
    window.scrollY > 80 ? setScroll(true) : setScroll(false);
  });
  return (
    <BoxSection height={scroll ? "10vh" : "100vh"}>
      <WrapImgBanner>
        <img src="../images/home-page/banner.png" alt="" />
      </WrapImgBanner>
      <Container>
        <Content className="title-banner text-dark text-visi">
          <Title>
            <img src="../images/home-page/forbitspace-word.png" alt="" />
          </Title>
          <Text>The Decentralized Exchange Super Aggregator</Text>
          <SubText>
            <span>forbitspace</span> is an interoperability aggregator protocol
            that unites decentralized applications across disparate blockchains.
            allows crypto traders to tap deep liquidity and receive better
            pricing one single interface.
          </SubText>
        </Content>
      </Container>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 0;
  transition: min-height 0.3s;
  margin-top: -40px;

  @media (max-width: 770px) {
    margin-top: 0px;
    padding-top: 50px;
    min-height: ${({ height }) => height};
  }
`;
const WrapImgBanner = styled.div`
  width: 100vw;
  height: auto;
  max-width: 100%;
  margin-bottom: -80px;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
const Content = styled.div`
  /* margin-left: 80px; */
  width: 75%;
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
  font-size: 4rem;
  font-weight: 600;
  line-height: 1;
  img {
    max-width: 400px;
  }
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
    img {
      max-width: 200px;
    }
  }
`;
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  font-style: italic;
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;

export default Banner;
