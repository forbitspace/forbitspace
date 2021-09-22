import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const LimitOrder = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/limit.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          <Text>Limit Order Protocol</Text>
          <WrapText>
            <TitleText>DeFi Aggregation</TitleText>
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
            {/* <SubText>
              Totle is connected to top decentralized exchanges and synthetic
              asset providers.
              <br />
              When you execute a swap through Totle, your order is routed to the
              sources offering the best prices on the market.
            </SubText>
            <TitleText>
              DeFi Aggregation
              <br />
              Automatic insurance through Nexus Mutual
            </TitleText>
            <SubText>
              Users are covered for up to 600 ETH in the event tha funds are
              lost during a swap due to an unforeseen bug.
            </SubText> */}
          </WrapText>
        </Content>
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
  width: 50%;
  transform: rotate(-12deg);
  @media (max-width: 1320px) {
    width: 60%;
  }
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
  margin-left: 20px;
  width: 50%;
  max-width: 600px;
  /* text-align: right; */
  @media (max-width: 1320px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
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
const TitleText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 300;
  }
`;
const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
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

export default LimitOrder;
