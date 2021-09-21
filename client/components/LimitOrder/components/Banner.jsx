import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/limit.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>Limit Order Protocol</Title>
          <WrapText>
            <SubText>
              A limit order places a specific price that a trader wants to buy
              or sell at and is only executed if the market hits that price.
            </SubText>
            <SubText>
              Whereas market orders are executed immediately, limit orders are
              executed at a predefined price, which is generally better than the
              current market price.
            </SubText>
            <SubText>
              The forbitspace platforms help users place the limit order which
              is handled by the order-book feature. We Limit Order protocol
              provides the most innovative and optimal. A Limit order is a type
              of buy order which a user can place with a specific buy or sell
              price whose limit is determined by the user him/herself. The
              enables the trade to be automatically executed when the market
              price reaches the users’ target price. It allows users to buy dips
              or take profits to take benefits of volatility in the marketplace.
            </SubText>
            <SubText>
              A Limit Order would allow DeFi traders to get their swaps at
              desired prices by leaving instructions to fill buy or sell orders
              at specific prices (or better prices). For instance, if you think
              an asset is too expensive at the moment, or you are expecting
              prices to drop throughout the day, then you simply set a Limit
              Order to buy at a price below the current market price. How much
              lower is totally up to users.
            </SubText>
          </WrapText>
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
  transform: rotate(-5deg);
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
  font-size: 4rem;
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
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const WrapText = styled.div``;

const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  /* max-width: 600px; */
  font-family: sans-serif;
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
