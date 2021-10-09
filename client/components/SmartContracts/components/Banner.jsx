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
          <Text>Smart Contract Wallet</Text>
          <SubText>
            {" "}
            A smart contract is a program deployed to disparate blockchains like
            Ethereum, Binance Smart Chain, and has a mobile app or desktop
            interface.
            <br />
            <br />
            Smart contract wallets are the most functional wallets because they
            can be programmed in many ways and have additional security measures
            like daily spend limits, further approval from a trusted party or
            another wallet if transactions are above a certain limit, and
            advanced recovery mechanisms. Private keys are generated on the
            mobile device or browser.
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
  }
  @media (max-width: 576px) {
    padding-top: 80px;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 40%;
  max-width: 450px;
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
  font-size: 2rem;
  font-weight: 500;
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
  font-family: sans-serif;
  text-align: right;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;
