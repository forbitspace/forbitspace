import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Banner = () => {
  return (
    <WrapperBanner>
      <WrapContainer>
        <WrapImg>
          <img
            src="../images/api-page/api-space.png"
            alt="forbitspace foundation"
          />
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>API</Title>
          <SubText>
            The forbitspace API is a cutting-edge discovery and routing
            custodial asset exchanges at the best rates on the biggest Ethereum,
            Binance Smart Chain and Polygon (Matic).
          </SubText>
          <SubText>
            It finds the most efficient token swap paths, splitting swaps
            protocols and even different market depths within one protocol.
          </SubText>
          <SubText>Who can integrate our forbitspace API?</SubText>
          <WrapIntegration>
            <TopWrap>
              <SubContent>
                <img src="../images/api-page/api-wallet.png" alt="" /> Wallets
              </SubContent>
              <SubContent>
                <img src="../images/api-page/api-dapps.png" alt="" /> dApps
              </SubContent>
              <SubContent>
                <img src="../images/api-page/api-swap.png" alt="" /> any
                platform that support swaps
              </SubContent>
            </TopWrap>
            <BottomWrap>
              <ButtonWrap>Start your integration</ButtonWrap>
            </BottomWrap>
          </WrapIntegration>
        </Content>
      </WrapContainer>
    </WrapperBanner>
  );
};

const WrapperBanner = styled.div`
  padding: 10vh 0 0;
  @media (max-width: 576px) {
    padding: 100px 0;
    text-align: left;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    /* width: 100%; */
    /* min-height: 75vh; */
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
`;
const Content = styled.div`
  margin-left: 100px;
  padding: 0 10px;
  text-align: right;
  width: 60%;
  align-self: flex-end;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
    padding: 10px;
  }
`;
const Title = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1;
  img {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 2px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
    img {
      max-width: 200px;
    }
  }
`;
const SubText = styled.p`
  font-size: 24px;
  font-weight: 300;
  font-family: sans-serif;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const WrapIntegration = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const TopWrap = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  @media (max-width: 576px) {
    width: 100%;
    padding: 8px;
    flex-direction: column;
    gap: 10px;
  }
`;
const SubContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 25px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
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
