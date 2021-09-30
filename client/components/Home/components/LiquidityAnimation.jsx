import React from "react";
import styled from "styled-components";

const LiquidityAnimation = () => {
  const dataTokens = [
    { name: "fbs" },
    { name: "usdt" },
    { name: "aave" },
    { name: "dai" },
    { name: "eth" },
    { name: "sushi" },
    { name: "uni" },
    { name: "usdc" },
  ];
  return (
    <WrapContent>
      <BackgroundImg>
        <img src="../images/liquidity Pool/background-forbit.png" alt="" />
      </BackgroundImg>
      <ItemImg>
        {dataTokens.map((item, index) => (
          <ImgWrap className={`img-${index}`}>
            <img
              src={`../images/liquidity Pool/icon-${item.name}.png`}
              alt=""
            />
          </ImgWrap>
        ))}
      </ItemImg>
    </WrapContent>
  );
};

const WrapContent = styled.div`
  position: relative;
`;
const BackgroundImg = styled.div`
  width: 100%;
`;
const ItemImg = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const ImgWrap = styled.div`
  position: absolute;
  &.img-0 {
    top: 35%;
    left: calc(50% - 70px);
    width: 140px;
    animation: moving 7s infinite;
  }
  &.img-1 {
    top: 10%;
    left: calc(25% - 40px);
    width: 80px;
    animation: moving 5.3s infinite;
  }
  &.img-2 {
    top: 23%;
    left: calc(77% - 40px);
    width: 80px;
    animation: moving 8.9s infinite;
  }
  &.img-3 {
    top: 0%;
    left: calc(40% - 37px);
    width: 74px;
    animation: moving 5.6s infinite;
  }
  &.img-4 {
    top: 10%;
    left: calc(60% - 40px);
    width: 74px;
    animation: moving 4.3s infinite;
  }
  &.img-5 {
    top: 25%;
    left: calc(37% - 35px);
    width: 70px;
    animation: moving 7.5s infinite;
  }
  &.img-6 {
    top: -10%;
    left: calc(60% - 40px);
    width: 65px;
    animation: moving 5.4s infinite;
  }
  &.img-7 {
    top: -1%;
    left: calc(75% - 40px);
    width: 80px;
    animation: moving 6.9s infinite;
  }
  img {
    transform: scale(0.9);
  }
  @media (max-width: 1024px) {
    img {
      transform: scale(0.7);
    }
  }
  @media (max-width: 768px) {
    img {
      transform: scale(0.8);
    }
  }
  @media (max-width: 700px) {
    img {
      transform: scale(0.65);
    }
  }
  @media (max-width: 320px) {
    img {
      transform: scale(0.5);
    }
    &.img-0 {
      top: 28%;
      left: calc(50% - 70px);
      width: 140px;
      animation: moving 7s infinite;
    }
  }

  @keyframes moving {
    0% {
      transform: translateY(25px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(25px);
    }
  }
`;

export default LiquidityAnimation;