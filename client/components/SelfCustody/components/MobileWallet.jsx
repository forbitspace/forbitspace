import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const MobileWallet = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/self-page/phone-0.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content>
          <Text>Self-custody</Text>
          <SubText>
            In DeFi, your money becomes empowered. You can store it, lend it,
            trade it, zap it, and track it in real-time. It’s a bit like a game
            but at the heart of this is more control, aka self-custody.
          </SubText>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/self-page/phone-0.png" alt="" />
          </ImgHalf>
        </WrapImg>
      </WrapContainer>
      <WrapWallet>
        <img src="../images/self-page/wallet-02.png" alt="" />
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
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 30%;
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
  width: 40%;
  text-align: left;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Text = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: center;
  @media (min-width: 1441px) {
    font-size: 5rem;
    line-height: unset;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SubText = styled.p`
  font-size: 1.2rem;
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
  margin-top: 15rem;
  width: 50%;
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`;

export default MobileWallet;
