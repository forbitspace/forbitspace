import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <WrapperBanner>
      <BackgroundBanner>
        <img
          src="./images/orbit-contributors-min.png"
          alt="orbit contributors"
        />
      </BackgroundBanner>
      <Content className="title-banner text-dark text-visi">
        <Title>Contributors</Title>
        <Text>
          Efficiency in decentralized <br /> finance is just forbitswap away
        </Text>
        <SubText>
          forbitswap offers the most innovative solutions in de DeFi space,
          focusing <br /> primarily on security, speed and efficiency.
        </SubText>
      </Content>
    </WrapperBanner>
  );
};

const WrapperBanner = styled.div`
  text-align: right;
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
  max-width: 750px;
  img {
    width: 100%;
  }
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  @media (max-width: 576px) {
    position: absolute;
    opacity: 0.5;
    max-width: 350px;
    right: 0;
    margin: auto;
  }
`;
const Content = styled.div`
  margin-left: -100px;
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Title = styled.h2`
  font-size: 6rem;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export default Banner;
