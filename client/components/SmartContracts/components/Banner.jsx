import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/self-page/wallett1-02.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>Smart Contract Wallet</Title>
          <SubText>
            {" "}
            A smart contract is a program deployed to disparate blockchains like
            Ethereum, Binance Smart Chain, and has a mobile app or desktop
            interface. Smart contract wallets are the most functional wallets
            because they can be programmed in many ways and have additional
            security measures like daily spend limits, further approval from a
            trusted party or another wallet if transactions are above a certain
            limit, and advanced recovery mechanisms. Private keys are generated
            on the mobile device or browser.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 60%;
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
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  /* font-style: italic; */
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
  @media (max-width: 320px) {
    font-size: 35px;
    letter-spacing: 2px;
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;
