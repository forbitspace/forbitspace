import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Liquidity = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          <Text>Liquidity Pool</Text>
          <SubText>
            With <span>forbitspace</span>, the decentralized protocol that
            empowering traders to provide liquidity to pools and collect extra
            rewards in FBS tokens for participating in liquidity mining
            programs.
            <br />A next-generation automated market maker that protects users
            from front-running attacks and offers capital efficiency to
            liquidity providers. Enables you to deposit digital assets into
            liquidity pools while earning interest in real-time in the form of
            FBS Tokens. Liquidity providers collect rewards on assets locked in
            pools and extra yield farming rewards in FBS tokens.
          </SubText>
        </Content>
        <WrapLiquidity>
          <ImgHalf>
            <img src="../images/home-page/liquidity.png" alt="" />
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
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapLiquidity = styled.div`
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
const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 1;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
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
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
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

export default Liquidity;
