import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Assets = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/assets-management.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>Assets Management</Title>
          <WrapText>
            <SubText>
              Our building decentralized portfolio management protocol enabling
              users to use a token that represents a fully collateralized
              portfolio of other digital assets, including Bitcoin, Ethereum,
              and stablecoins. Asset management involves the oversight of
              financial assets for others and seeks to maximize the value of the
              whole portfolio based on risk preferences, time horizons, or other
              conditions. Asset management protocol bring greater transparency
              and efficiency in constructing and executing investment
              strategies, by incorporating the asset management life cycle into
              a DApp.
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
  width: 40%;
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
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const WrapText = styled.div``;

const SubText = styled.p`
  font-size: 26px;
  font-weight: 300;
  font-family: sans-serif;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Assets;
