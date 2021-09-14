import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Network = () => {
  return (
    <BoxSection>
      <Title>Network</Title>
      <WrapContainer>
        <WrapImg>
          <WrapperButtonApp>
            <ButtonBanner href="/" className="forbitswap">
              {" "}
              forbitswap
            </ButtonBanner>
          </WrapperButtonApp>
          <ImgHalf>
            <img src="../images/home-page/network-01.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <WrapImg>
          <WrapperButtonApp>
            <ButtonBanner href="/"> Trade</ButtonBanner>
          </WrapperButtonApp>
          <ImgHalf>
            <img src="../images/home-page/network-02.png" alt="" />
          </ImgHalf>
        </WrapImg>
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
const Title = styled.div`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  :first-child {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 75vh;
    justify-content: center;
    :first-child {
      width: 100%;
    }
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
const WrapperButtonApp = styled.div`
  max-width: 350px;
  /* margin: 0 auto; */
  /* width: 90%; */
  text-align: left;
  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: unset;
  }
`;

const ButtonBanner = styled.a`
  padding: 0.25rem 0.85rem;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  color: white;
  /* border: 1px solid transparent; */
  margin-right: 1rem;
  background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  width: 100%;
  width: 140px;
  background-size: 200%;
  background-position: 99%;
  color: white;

  &.forbitswap {
    background-size: 110%;
    background-position: 30%;
  }
`;
export default Network;
