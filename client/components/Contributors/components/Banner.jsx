import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <WrapperBanner>
      <BackgroundBanner>
        <img
          src="../images/contributor-page/spaceship.png"
          alt="orbit contributors"
        />
      </BackgroundBanner>
      <Content className="title-banner text-dark text-visi">
        <Title>Contributors</Title>
        <Text>
          Efficiency in decentralized <br /> finance is just forbitswap away
        </Text>
      </Content>
    </WrapperBanner>
  );
};

const WrapperBanner = styled.div`
  text-align: right;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 576px) {
    text-align: left;
  }
`;
const BackgroundBanner = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;
const Content = styled.div`
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 30px;
    letter-spacing: 2px;
  }
`;
const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
export default Banner;
