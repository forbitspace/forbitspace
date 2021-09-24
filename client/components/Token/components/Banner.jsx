import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          <Text>FBS Token</Text>
          <SubText>
            {/* Totle aggregates decentralized exchanges and synthetic asset
            providers into a suite of tools that makes it easy to access deep
            liquidity for DeFi assets at the best price. */}
          </SubText>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/liquidity.png" alt="" />
          </ImgHalf>
        </WrapImg>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  font-family: sans-serif;
  /* min-height: 88vh; */
  padding: 4vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapImg = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 50%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Text = styled.p`
  font-size: 4rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export default Banner;
