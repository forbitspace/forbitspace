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
              The <span>forbitspace</span> platforms help users place the limit
              order which is handled by the order-book feature. We limit order
              protocol provides the most innovative and optimal. A limit order
              is a type of buy order which a user can place with a specific buy
              or sell price whose limit is determined by the user him/herself.
              The enables the trade to be automatically executed when the market
              price reaches the users’ target price. It allows users to buy dips
              or take profits to take benefits of volatility in the marketplace.
            </SubText>
            <SubText>
              A limit order would allow DeFi traders to get their swaps at
              desired prices by leaving instructions to fill buy or sell orders
              at specific prices (or better prices). For instance, if you think
              an asset is too expensive at the moment, or you are expecting
              prices to drop throughout the day, then you simply set a limit
              order to buy at a price below the current market price. How much
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
  padding: 10vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
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
  transform: rotate(-5deg);
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
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
  margin-left: 20px;
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 1440px) {
    margin-top: 8rem;
  }
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
  @media (max-width: 768px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const WrapText = styled.div``;

const SubText = styled.p`
  font-size: 26px;
  font-weight: 300;
  font-family: sans-serif;

  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    text-align: justify;
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
export default Banner;
