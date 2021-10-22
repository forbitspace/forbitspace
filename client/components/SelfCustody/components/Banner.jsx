import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/self-page/wallet-01-min.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Text>Self-custody</Text>
          <SubText>
            In the world DeFi, your money becomes empowered. You can store it,
            lend it, trade it, zap it, and track it in real-time. It’s a bit
            like a game but at the heart of this is more control, aka
            self-custody. We clearly see the importance of self-custody refers
            to individuals being 100% in control of their assets, similar to
            cash.
            <br />
            <br />
            Except this is digital cash, and it’s not dependent on a bank or
            other entity to issue it or verify transactions. This is precisely
            why blockchain was such a huge innovation starting with Bitcoin then
            Ethereum and more crypto assets in the different blockchains.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 10vh 0 5rem;
  @media (max-width: 770px) {
    padding: 60px 0 20px;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export default Banner;
