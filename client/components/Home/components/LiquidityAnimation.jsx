import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const LiquidityAnimation = () => {
    const dataTokens = [
        { name: "fbs" },
        { name: "usdt" },
        { name: "aave" },
        { name: "bsc" },
        { name: "eth" },
        { name: "sushi" },
        { name: "uni" },
        { name: "usdc" },
        { name: "polygon" },
    ];
    return (
        <WrapContent>
            <BackgroundImg>
                <LazyLoad height={500}>
                    <img
                        src="../images/liquidity Pool/background-forbit.png"
                        alt="liquidity"
                    />
                </LazyLoad>
            </BackgroundImg>
            <ItemImg>
                {dataTokens.map((item, index) => (
                    <ImgWrap className={`img-${index}`} key={index}>
                        <LazyLoad height={500}>
                            <img
                                src={`../images/liquidity Pool/icon-${item.name}-min.png`}
                                alt={item.name + "-icon"}
                            />
                        </LazyLoad>
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
        top: 28%;
        left: calc(52% - 70px);
        width: 120px;
        animation: moving 7s infinite;
    }
    &.img-1 {
        top: 7%;
        left: calc(24% - 40px);
        width: 80px;
        animation: moving 5.3s infinite;
    }
    &.img-2 {
        top: 12%;
        left: calc(73% - 40px);
        width: 80px;
        animation: moving 6.9s infinite;
    }
    &.img-3 {
        top: -3%;
        left: calc(35% - 37px);
        width: 74px;
        animation: moving 5.6s infinite;
    }
    &.img-4 {
        top: 8%;
        left: calc(50% - 40px);
        width: 74px;
        animation: moving 4.3s infinite;
    }
    &.img-5 {
        top: 22%;
        left: calc(30% - 35px);
        width: 70px;
        animation: moving 7.5s infinite;
    }
    &.img-6 {
        top: -14%;
        left: calc(53% - 40px);
        width: 65px;
        animation: moving 4.4s infinite;
    }
    &.img-7 {
        top: -5%;
        left: calc(67% - 40px);
        width: 80px;
        animation: moving 6.9s infinite;
    }
    &.img-8 {
        top: 25%;
        left: calc(70% - 40px);
        width: 80px;
        animation: moving 3.9s infinite;
    }
    img {
        transform: scale(1);
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
        &.img-6 {
            top: -10%;
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
    }

    @keyframes moving {
        0% {
            transform: translateY(22px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(22px);
        }
    }
`;

export default LiquidityAnimation;
