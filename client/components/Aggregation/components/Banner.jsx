import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/aggregation.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          <Text>Aggregation Protocol</Text>
          <SubText>
            <span>forbitspace</span> use an algorithm smart order routing that
            split a single transaction into multiple orders across various
            DEX’s, also route orders through allows crypto traders to tap deep
            liquidity and receive better pricing low cost & efficient the most
            liquidity.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 8vh 0 0;
  margin: 0 0 2rem;
  @media (max-width: 770px) {
    padding-top: 60px;
    margin: 0 0 1rem;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 576px) {
  }
`;
const WrapImg = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 80%;
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
  /* width: 70%; */
  text-align: center;
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
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;