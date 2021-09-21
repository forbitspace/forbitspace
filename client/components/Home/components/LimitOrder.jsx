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
    width: 70%;
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
  @media (max-width: 1260px) {
    width: 30%;
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export default LimitOrder;
