import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/about-page/17-9-04.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>About</Title>
          <SubText>
            As the DeFi market continues to boom and expands, new solutions
            emerge to simplify user navigation and improve user experiences. One
            of such recent innovations is the launch of DEX aggregators –
            platforms that unify numerous DEXs in the same merge space and allow
            users to conduct operations on all covered platforms without the
            need to create separate accounts and wallets.
          </SubText>
          <SubText>
            While having a wide selection of different protocols is beneficial
            to diversify investments and getting the best yield rates from
            crypto lending, efficiency and convenience are hindered since the
            financial information is spread vastly across multiple protocols.
            That’s where DeFi aggregators thrive.
          </SubText>
          <SubText>
            forbitspace DEXs aggregator utilizes the power of blockchain to
            bring together trades across various decentralized finance platforms
            (DeFi) into one space, saving users time and increasing efficiency
            for cryptocurrency trades. We siphon the very best prices from DEXs,
            swap services, and liquidity pools into one place so that users can
            optimize their trades.
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
  gap: 20px;
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
  font-size: 55px;
  line-height: 1;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 39px;
    letter-spacing: 2px;
  }
`;
const SubText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  font-family: sans-serif;
  /* max-width: 600px; */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;
