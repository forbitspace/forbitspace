import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Network = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapContent>
          <WrapImg>
            <WrapperButtonApp>
              <ButtonBanner href="https://app.forbitspace.com/" target="_blank">
                Space Trade
              </ButtonBanner>
            </WrapperButtonApp>
            <ImgHalf>
              <img src="../images/home-page/network-02.png" alt="" />
            </ImgHalf>
          </WrapImg>{" "}
          <WrapTitle>
            <Text>Multi Network</Text>
            <SubText className="subtext__title">
              <span>forbitspace </span> aggregator protocol is now available on
              Ethereum, Binance Smart Chain, and layer 2 Polygon, Arbitrum, and
              Optimism we currently launch each blockchain as by stage.
            </SubText>
            <SubText className="subtext__title">
              We plan to support more EVM chains and non-EVM chains, Solana,
              Avalanche, and more in the months following launch.
            </SubText>
          </WrapTitle>
        </WrapContent>
        <WrapContent>
          <SubText className="subtext__content">
            The <span>forbitspace </span> DEX super aggregator is an
            interoperability protocol that connects disparate blockchains. That
            unites decentralized applications across disparate blockchains,
            simultaneously uniting liquidity across chains and making it
            possible to transact in, out, and across disparate networks with
            ease.
          </SubText>
          <WrapImg className="img__swap">
            <WrapperButtonApp>
              <ButtonBanner
                href="https://app.forbitswap.com/#/swap"
                target="_blank"
                className="forbitswap"
              >
                forbitswap
              </ButtonBanner>
            </WrapperButtonApp>
            <ImgHalf>
              <img src="../images/home-page/network-01.png" alt="" />
            </ImgHalf>
          </WrapImg>
        </WrapContent>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 6vh 0px 0;

  @media (max-width: 1024px) {
    padding: 25px 15px 0;
  }
`;
const Text = styled.div`
  font-size: 2rem;
  font-weight: 500;
  text-align: right;
  padding: 1vh 0;
  @media (max-width: 768px) {
    font-size: 26px;
    padding: 10px 0 30px;
    text-align: center;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;
const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;
const WrapContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    :first-child {
      flex-direction: column-reverse;
    }
  }
`;
const WrapImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  &.img__swap {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70% !important;
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    width: 100% !important;
  }
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    padding: 10px 0 25px;
  }
`;
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  /* width: 60%; */
  span {
    font-style: italic;
    font-weight: 900;
  }
  &.subtext__title {
    text-align: right;
  }
  &.subtext__content {
    width: 50%;
    padding: 40px 0;
  }
  /* @media (min-width: 1441px) {
    width: 50%;
    &.subtext__content {
      width: 35%;
    }
  } */
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100% !important;
    text-align: center !important;
  }
  @media (max-width: 576px) {
    font-size: 13px;
    &.subtext__content {
      padding: 0;
    }
  }
`;
const WrapperButtonApp = styled.div`
  max-width: 350px;
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
  font-style: italic;
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
  background-size: 200%;
  background-position: 99%;
  color: white;

  &.forbitswap {
    background-size: 110%;
    background-position: 30%;
  }
  :hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export default Network;
