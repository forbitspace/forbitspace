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
          <Text>Assets Management</Text>
          <SubText>
            Our building decentralized portfolio management protocol enabling
            users to use a token that represents a fully collateralized
            portfolio of other digital assets, including Bitcoin, Ethereum, and
            stablecoins.
            <br />
            <br />
            Asset management involves the oversight of financial assets for
            others and seeks to maximize the value of the whole portfolio based
            on risk preferences, time horizons, or other conditions. Asset
            management protocol bring greater transparency and efficiency in
            constructing and executing investment strategies, by incorporating
            the asset management life cycle into a DApp.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 1vh 0 6rem;
  @media (max-width: 770px) {
    padding: 60px 0 20px;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 50%;
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
  /* margin-left: 80px; */
  width: 50%;
  text-align: left;
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
  text-align: right;
  @media (max-width: 1024px) {
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
export default Assets;
