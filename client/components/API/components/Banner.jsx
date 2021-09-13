import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <WrapperBanner>
      <BackgroundBanner>
        <img
          src="./images/icon-foundation/earth-background-foundation.png"
          alt="forbitspace foundation"
        />
      </BackgroundBanner>
      <Content className="title-banner text-dark text-visi">
        <Title>
          forbitspace
          <br />
          API
        </Title>
        {/* <Title></Title> */}
        <SubText>
          The forbitspace API is a cutting-edge discovery and routing custodial
          asset exchanges at the best rates on the biggest Ethereum, Binance
          Smart Chain and Polygon (Matic).
          <br />
          It finds the most efficient token swap paths, splitting swaps
          protocols and even different market depths within one protocol.
          <br />
          Who can integrate our forbitspace API?
        </SubText>
        <WrapIntegration>
          <TopWrap>
            <SubContent>Wallets</SubContent>
            <SubContent>dApps</SubContent>
            <SubContent>any platform that support swaps</SubContent>
          </TopWrap>
          <BottomWrap>
            <ButtonWrap>Start your integration</ButtonWrap>
          </BottomWrap>
        </WrapIntegration>
      </Content>
    </WrapperBanner>
  );
};

const WrapperBanner = styled.div`
  text-align: left;
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
  z-index: -1;
  max-width: 750px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  img {
    width: 100%;
  }
  @media (max-width: 576px) {
    position: absolute;
    opacity: 0.5;
    max-width: 350px;
    right: 0;
    margin: auto;
  }
`;
const Content = styled.div`
  margin-left: 100px;
  text-align: right;
  width: 50%;
  align-self: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;
const Title = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 2px;
  }
`;
const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const WrapIntegration = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;
const TopWrap = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;
const SubContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ButtonWrap = styled.div`
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

  /* :hover { */
  color: #fff;
  background-size: 200%;
  background-position: right;
  /* } */
`;
export default Banner;
