import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <WrapperBanner>
      <Content className="title-banner text-dark text-visi">
        <Title>
          forbitspace Limit
          <br />
          Order Protocol
        </Title>
        {/* <Title></Title> */}
        <SubText>
          Enjoy the most innovative and flexible limit order functionality in
          DeFi
        </SubText>
        <ButtonApply href="/#">View docs</ButtonApply>
      </Content>
      <BackgroundBanner>
        <img
          src="./images/icon-foundation/earth-background-foundation.png"
          alt="forbitspace foundation"
        />
      </BackgroundBanner>
    </WrapperBanner>
  );
};

const WrapperBanner = styled.div`
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    text-align: left;
  }
`;
const BackgroundBanner = styled.div`
  position: relative;
  z-index: -1;
  max-width: 950px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    position: absolute;
    opacity: 0.5;
    max-width: 350px;
    right: 0;
    margin: auto;
  }
`;
const Content = styled.div`
  margin-right: -200px;
  @media (min-width: 768px) {
    min-width: 600px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Title = styled.h2`
  font-size: 5rem;
  line-height: 1.5;
  @media (max-width: 1024px) {
    font-size: 70px;
  }
  @media (max-width: 576px) {
    font-size: 40px;
    letter-spacing: 2px;
  }
  @media (max-width: 320px) {
    font-size: 35px;
  }
`;

const SubText = styled.p`
  font-size: 26px;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
  @media (max-width: 415px) {
    font-size: 11px;
  }
`;
const ButtonApply = styled.a`
  padding: 5px 30px;
  margin-top: 30px;
  border-radius: 12px;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  text-align: center;
  font-weight: 500;
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  transition: 0.2s;

  :hover {
    color: #fff;
    background-size: 200%;
    background-position: right;
  }
`;

export default Banner;
