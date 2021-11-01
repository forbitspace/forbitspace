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
                <img src="../images/network-animation/bg.png" alt="" />
            </BackgroundImg>
            <ItemImg>
                {network.map((item, index) => (
                    <ImgWrap className={`img-${index}`} key={index}>
                        <img
                            src={`../images/network-animation/${item.name}.png`}
                            alt=""
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
    img {
        width: 96px;
        height: 96px;
        animation: ${rotate_revert} 30s linear infinite;
    }
    &.img-0 {
        top: calc(50% - 58px);
        left: calc(50% - 58px);
        img {
            width: 116px;
            height: 116px;
        }
    }
    &.img-1 {
        top: 4%;
        left: calc(50% - 48px);
    }
    &.img-2 {
        top: calc(32% - 48px);
        left: calc(16% - 48px);
    }
    &.img-3 {
        top: 64%;
        left: calc(18% - 48px);
    }
    &.img-4 {
        top: 78%;
        left: calc(50% - 48px);
    }
    &.img-5 {
        top: 65%;
        left: calc(82% - 48px);
    }
    &.img-6 {
        top: calc(32% - 48px);
        left: calc(84% - 48px);
    }
`;

export default NetworkAnimation;
