import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../../Title";
import { DataCom } from "../constants/index";

const Community = () => {
  return (
    <BoxSection>
      <Container>
        <Title title="Ecosystem partners" />
        <WrapperOrbit>
          <WrapperBackground>
            <Background src="./images/ecosystem/1.svg" alt="circle orbit" />
            <img
              className="icon icon7"
              src="./images/ecosystem/Group 36856.svg"
              alt="icon"
            ></img>
            <img
              className="icon icon8"
              src="./images/ecosystem/usdt.svg"
              alt="icon"
            ></img>
            <img
              className="icon icon9"
              src="./images/ecosystem/USDC.svg"
              alt="icon"
            ></img>
          </WrapperBackground>
          <div className="circle-1">
            <img src="./images/ecosystem/2.svg" alt="" />
            <img
              className="icon icon1"
              src="./images/ecosystem/Binance.svg"
              alt="binance"
            ></img>
            <img
              className="icon icon2"
              src="./images/ecosystem/meta.svg"
              alt="metamask"
            ></img>
            <img
              className="icon icon3"
              src="./images/ecosystem/coinbase.svg"
              alt="coinbase"
            ></img>
          </div>

          <div className="circle-2">
            <img src="./images/ecosystem/3.svg" alt="" />
            <img
              className="icon icon1"
              src="./images/ecosystem/thegraph.svg"
              alt="thegraph"
            ></img>
            <img
              className="icon icon2"
              src="./images/ecosystem/poly.svg"
              alt="poly"
            ></img>
            <img
              className="icon icon3"
              src="./images/ecosystem/ETH.svg"
              alt="ETH"
            ></img>
          </div>

          <div className="circle-3">
            <img src="./images/ecosystem/4.svg" alt="icon" />
            <img
              className="icon icon1"
              src="./images/ecosystem/chainlink.svg"
              alt="chainlink"
            ></img>
            <img
              className="icon icon2"
              src="./images/ecosystem/Group 36638.svg"
              alt="icon"
            ></img>
            <img
              className="icon icon3"
              src="./images/ecosystem/Group 36645.svg"
              alt="icon"
            ></img>
            <img
              className="icon icon4"
              src="./images/ecosystem/Group 36649.svg"
              alt="icon"
            ></img>
            <img
              className="icon icon5"
              src="./images/ecosystem/wallet.svg"
              alt="wallet"
            ></img>
            <img
              className="icon icon6"
              src="./images/ecosystem/Group 36854.svg"
              alt="icon"
            ></img>
          </div>
          <LogoCenter>
            <img
              src="./images/ecosystem/fb-partner.svg"
              alt="icon forbit logo"
            />
          </LogoCenter>
        </WrapperOrbit>
      </Container>
    </BoxSection>
  );
};

const LogoCenter = styled.div`
  img {
    max-width: 50px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @media (max-width: 650px) {
    img {
      max-width: 30px;
    }
  }
  @media (max-width: 375px) {
    img {
      max-width: 25px;
    }
  }
`;

const WrapperBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate-right linear 25s infinite;
  @keyframes rotate-right {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  position: relative;
  min-height: 800px;
  @media (max-width: 576px) {
    min-height: 500px;
  }
`;
const Background = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const WrapperOrbit = styled.div`
  position: relative;
  max-width: 662px;
  width: 100%;
  margin: 410px auto 0;
  .icon {
    width: 50px;
    position: absolute;
    z-index: 1;

    @media (max-width: 576px) {
      max-width: 30px;
    }
    @media (max-width: 420px) {
      max-width: 25px;
    }
  }

  .icon7 {
    left: 27px;
    animation: rotate-left linear 25s infinite;
    @media (max-width: 576px) {
      left: 20px;
    }
    @media (max-width: 420px) {
      left: 22px;
    }
  }

  .icon8 {
    top: -303px;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: rotate-left linear 25s infinite;
    @media (max-width: 576px) {
      top: -186px;
    }
  }

  .icon9 {
    right: 27px;
    animation: rotate-left linear 25s infinite;
    @media (max-width: 576px) {
      right: 22px;
    }
    @media (max-width: 420px) {
      right: 22px;
    }
  }

  @media (max-width: 576px) {
    margin: 300px auto 0;
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
  }

  .circle-1 {
    width: 247px;
    height: 247px;
    @media (max-width: 576px) {
      width: 120px;
      height: 120px;
    }

    .icon1 {
      top: -25px;
      right: 0;
      left: 0;
      margin: 0 auto;
      animation: rotate-right linear 45s infinite;
      @media (max-width: 576px) {
        top: -13px;
        right: 0;
        left: 0;
        margin: 0 auto;
      }
    }
    .icon2 {
      bottom: 30px;
      left: -3px;
      animation: rotate-right linear 45s infinite;
      @media (max-width: 576px) {
        bottom: 30px;
        left: -12px;
      }
    }
    .icon3 {
      bottom: 30px;
      right: -3px;
      animation: rotate-right linear 45s infinite;
      @media (max-width: 576px) {
        bottom: 30px;
        right: -12px;
      }
    }

    animation: rotate-left linear 45s infinite;
  }

  .circle-2 {
    @media (max-width: 576px) {
      width: 200px;
      height: 200px;
    }
    @media (max-width: 420px) {
      width: 186px;
      height: 186px;
    }

    width: 350px;
    height: 350px;
    animation: rotate-right linear 30s infinite;

    .icon1 {
      top: 0;
      left: 57px;
      animation: rotate-left linear 30s infinite;
      @media (max-width: 576px) {
        top: -10px;
        left: 57px;
      }
    }
    .icon2 {
      bottom: 0;
      right: 57px;
      animation: rotate-left linear 30s infinite;
      @media (max-width: 576px) {
        bottom: -9px;
        right: 57px;
      }
    }
    .icon3 {
      top: 62px;
      right: 0;
      animation: rotate-left linear 30s infinite;
      @media (max-width: 576px) {
        top: 50px;
        right: -5px;
      }
    }
  }

  .circle-3 {
    @media (max-width: 576px) {
      width: 266px;
      height: 266px;
    }
    @media (max-width: 420px) {
      width: 250px;
      height: 250px;
    }

    .icon1 {
      top: -28px;
      left: 0;
      right: 0;
      margin: 0 auto;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        top: -15px;
      }
    }
    .icon2 {
      top: 97px;
      right: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        top: 49px !important;
        right: 2px !important;
      }
    }
    .icon3 {
      bottom: 97px;
      right: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        bottom: 49px !important;
        right: 2px !important;
      }
    }
    .icon4 {
      top: 97px;
      left: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        top: 49px !important;
        left: 2px !important;
      }
    }
    .icon5 {
      bottom: -28px;
      left: 0;
      right: 0;
      margin: 0 auto;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        bottom: -15px !important;
      }
    }
    .icon6 {
      bottom: 97px;
      left: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        bottom: 49px !important;
        left: 2px !important;
      }
    }

    width: 450px;
    height: 450px;
    animation: rotate-left linear 25s infinite !important;
  }

  @keyframes rotate-left {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @keyframes rotate-right {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const BoxSection = styled.section`
  position: relative;
  padding: 45px 0;
  overflow: hidden;
`;

export default Community;
