import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LiquidityAnimation from "./LiquidityAnimation";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            {/* <img src="../images/home-page/liquidity.png" alt="" /> */}
            <LiquidityAnimation />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Text>Liquidity Pool</Text>
          <SubText>
            With <span>forbitspace</span>, the decentralized protocol that
            empowering traders to provide liquidity to pools and collect extra
            rewards in <span className="fbs">FBS</span> tokens for participating
            in liquidity mining programs.
            <br />
            <br />
            A next-generation automated market maker that protects users from
            front-running attacks and offers capital efficiency to liquidity
            providers.
            <br />
            <br />
            Enables you to deposit digital assets into liquidity pools while
            earning interest in real-time in the form of{" "}
            <span className="fbs">FBS</span> tokens. Liquidity providers collect
            rewards on assets locked in pools and extra yield farming rewards in{" "}
            <span className="fbs">FBS</span> tokens.
          </SubText>
          {/* <WrapperButtonApp>
            <ButtonBanner href="/">Google Play</ButtonBanner>
            <ButtonBanner href="/">App Store</ButtonBanner>
          </WrapperButtonApp> */}
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 12vh 0 0;
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
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 50%;
  transform: scale(0.9);
  transform-origin: right;
  @media (max-width: 768px) {
    width: 100%;
    transform: scale(0.8);
    transform-origin: center;
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
  /* margin-left: 40px; */
  width: 60%;
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
const SubText = styled.div`
  font-size: 26px;
  font-weight: 200;
  font-family: sans-serif;
  text-align: right;
  span {
    font-style: italic;
    font-weight: 900;
  }
  .fbs {
    font-style: normal;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
export default Banner;
