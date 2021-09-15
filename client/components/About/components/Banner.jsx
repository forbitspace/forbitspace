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
          <Title>About</Title>
          <SubText>
            As the DeFi market continues to boom and expands, new solutions
            emerge to simplify user navigation and improve user experiences. One
            of such recent innovations is the launch of DEX aggregators –
            platforms that unify numerous DEXs in the same merge space and allow
            users to conduct operations on all covered platforms without the
            need to create separate accounts and wallets.
            <br />
            While having a wide selection of different protocols is beneficial
            to diversify investments and getting the best yield rates from
            crypto lending, efficiency and convenience are hindered since the
            financial information is spread vastly across multiple protocols.
            That’s where DeFi aggregators thrive.
            <br />
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
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
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
  font-size: 5rem;
  line-height: 1;
  font-weight: 700;
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
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SubText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  /* max-width: 600px; */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const WrapperButtonApp = styled.div`
  max-width: 350px;
  /* margin: 0 auto; */
  /* width: 90%; */
  text-align: left;
  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: unset;
  }
`;

const ButtonBanner = styled.a`
  padding: 0.25rem 0.85rem;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  color: white;
  /* border: 1px solid transparent; */
  margin-right: 1rem;
  background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  width: 100%;
  width: 140px;
  background-size: 200%;
  background-position: 99%;
  color: white;

  &.forbitswap {
    background-size: 110%;
    background-position: 30%;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
export default Banner;
