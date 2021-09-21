import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const MobileWallet = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content>
          <Text>Self-custody wallets</Text>
          <SubText>
            It is of the great importance of self-custody, which is why
            forbitspace built the overall strategy you safely self-custody your
            assets with flexible optimal options for our ecosystem.
          </SubText>
          <TitleText>Mobile wallet</TitleText>
          <SubText>
            Mobile wallets are apps on your iOS or Android phone, convenient
            because they are always with you. Usually, the private key is
            generated and stored on your device with backup and recovery
            options, depending on the app.
          </SubText>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/self-page/phone-1.png" alt="" />
          </ImgHalf>
        </WrapImg>
      </WrapContainer>
      <WrapWallet>
        <img src="../images/self-page/wallett1-02.png" alt="" />
        <Content>
          <TitleText>Smart contract wallet</TitleText>
          <SubText>
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
      </WrapWallet>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  @media (min-width: 768px) {
    padding: 25px 0;
  }

  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1400px) {
    max-width: 100% !important;
  }
  @media (min-width: 3650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 50%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 60%;
    height: auto;
    /* transform: scale(0.6); */
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 50%;
  text-align: left;
  max-width: 600px;
  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Text = styled.p`
  font-size: 3rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: left;
  @media (min-width: 1441px) {
    font-size: 5rem;
    line-height: unset;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }
`;
const TitleText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;
const SubText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  @media (min-width: 1441px) {
    font-size: 2rem;
    font-weight: 400;
    line-height: unset;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const WrapWallet = styled.div`
  margin-top: 12rem;
  width: 100%;
  padding: 0 3rem;

  display: flex;
  align-items: center;
  img {
    max-width: 45%;
  }
  @media (max-width: 576px) {
    margin-top: 2rem;
    width: 100%;
    flex-direction: column;
    img {
      max-width: 100%;
    }
  }
`;

export default MobileWallet;
