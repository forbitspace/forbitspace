import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LiquidityAnimation from "./LiquidityAnimation";
const Liquidity = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          <Text>Liquidity Pool</Text>
          <SubText>
            With <span className="space">forbitspace</span>, the decentralized
            protocol that empowering traders to provide liquidity to pools and
            collect extra rewards in <span className="fbs">FBS</span> tokens for
            participating in liquidity mining programs.
          </SubText>
          <SubText>
            A next-generation automated market maker that protects users from
            front-running attacks and offers capital efficiency to liquidity
            providers. Enables you to deposit digital assets into liquidity
            pools while earning interest in real-time in the form of{" "}
            <span className="fbs"> FBS</span> tokens. Liquidity providers
            collect rewards on assets locked in pools and extra yield farming
            rewards in <span className="fbs">FBS</span> tokens.
          </SubText>
        </Content>
        <WrapLiquidity>
          <ImgHalf>
            {/* <img src="../images/home-page/liquidity.png" alt="" /> */}
            <LiquidityAnimation />
          </ImgHalf>
        </WrapLiquidity>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */
  padding: 25px 0;
  @media (max-width: 770px) {
    padding-top: 10px;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapLiquidity = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 700px) {
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
  /* margin-left: 80px; */
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
  max-width: 600px;
  text-align: left;
  .space {
    font-style: italic;
    font-weight: 900;
  }
  .fbs {
    font-style: normal;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export default Liquidity;
