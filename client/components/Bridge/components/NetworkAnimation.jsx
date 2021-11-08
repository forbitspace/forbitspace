import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
const NetworkAnimation = () => {
    const network = [
        { name: "fbs" },
        { name: "arb" },
        { name: "eth" },
        { name: "plg" },
        { name: "ava" },
        { name: "sln" },
        { name: "bsc" },
    ];
    return (
        <WrapContent>
            <BackgroundImg>
                <img
                    src="../images/network-animation/bg.png"
                    alt="network-circles"
                />
            </BackgroundImg>
            <ItemImg>
                {network.map((item, index) => (
                    <ImgWrap className={`img-${index}`} key={index}>
                        <img
                            src={`../images/network-animation/${item.name}.png`}
                            alt={item.name + "-network"}
                        />
                    </ImgWrap>
                ))}
            </ItemImg>
        </WrapContent>
    );
};

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
`;
const rotate_revert = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const WrapContent = styled.div`
    max-width: 50vw;
    position: relative;
    margin: auto;
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
    animation: ${rotate} 30s linear infinite;
`;
const ImgWrap = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    img {
        width: 96px;
        height: 96px;
        animation: ${rotate_revert} 30s linear infinite;
    }
    &.img-0 {
        top: 50%;
        left: 50%;
        img {
            width: 116px;
            height: 116px;
        }
    }
    &.img-1 {
        top: 12%;
        left: 50%;
    }
    &.img-2 {
        top: 32%;
        left: 16%;
    }
    &.img-3 {
        top: 64%;
        left: 15%;
    }
    &.img-4 {
        top: 88%;
        left: 50%;
    }
    &.img-5 {
        top: 64%;
        left: 85%;
    }
    &.img-6 {
        top: 32%;
        left: 84%;
    }
    @media (max-width: 1200px) {
        &.img-0 {
            img {
                width: 100px;
                height: 100px;
            }
        }
        img {
            width: 66px;
            height: 66px;
        }
    }
    @media (max-width: 576px) {
        &.img-0 {
            img {
                width: 60px;
                height: 60px;
            }
        }
        /* transform: scale(0.6); */
    }
`;

export default NetworkAnimation;
