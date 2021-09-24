import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          <Title>Derivative Protocol</Title>
          <WrapText>
            <SubText>
              Crypto derivatives trading is on the rise today. The futures and
              options allow the traders to hedge their positions and mitigate
              their risks during highly volatile trading days. Synthetic assets
              on decentralized trading platforms are fetching good trade volume
            </SubText>
            <SubText>
              <span>forbitspace</span> derivatives protocol is used to create
              custom assets by using forward-looking features of locking the
              price in and the ability to either buy or sell an asset.{" "}
              <span>forbitspace</span> use a contract that represents an asset
              bought or sold at a future date for a future price, synthetics are
              the very underlying asset representative of other assets.
            </SubText>
            <SubText>
              Derivatives in the Defi world are important because what is being
              built here is not a trading and speculation market; it’s a
              use-case market. The principle of hedging goes far beyond Defi or
              cryptocurrencies. It’s applicable to the traditional financial
              world as well.
            </SubText>
          </WrapText>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/derivative.png" alt="" />
          </ImgHalf>
        </WrapImg>
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
    flex-direction: column;
  }
`;
const WrapImg = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 60%;
  }
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: right;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 60%;
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
  line-height: 1;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const WrapText = styled.div``;

const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  /* max-width: 600px; */
  font-family: sans-serif;
  span {
    font-weight: 900;
    font-style: italic;
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
