import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/self-page/wallet-01.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>Self-custody</Title>
          <SubText>
            In the world DeFi, your money becomes empowered. You can store it,
            lend it, trade it, zap it, and track it in real-time. It’s a bit
            like a game but at the heart of this is more control, aka
            self-custody. We clearly see the importance of self-custody refers
            to individuals being 100% in control of their assets, similar to
            cash. Except this is digital cash, and it’s not dependent on a bank
            or other entity to issue it or verify transactions. This is
            precisely why blockchain was such a huge innovation starting with
            Bitcoin then Ethereum and more crypto assets in the different
            blockchains.
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
  gap: 2rem;
  @media (min-width: 1650px) {
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
  width: 45%;
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
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const SubText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  font-family: sans-serif;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;
