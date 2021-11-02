import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Index = () => {
    return (
        <StyledPage>
            <Img1>
                <img src="./images/comingsoontext.png" alt="coming-soon-text" />
            </Img1>
            <Img2>
                <img src="./images/comming-earth.png" alt="coming-soon" />
            </Img2>
            <Img3>
                <img src="./images/commingbackground.png" alt="coming-soon" />
            </Img3>
            <ImgMobile>
                <img src="./images/bg_phone-05.png" alt="coming-soon" />
            </ImgMobile>
        </StyledPage>
    );
};

const Img1 = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    right: 0;
    bottom: 0;
    margin: auto;
    img {
        max-width: 700px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        @media (max-width: 576px) {
            width: 90%;
        }
    }
`;
const Img2 = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.8;
    animation: linear spinner 60s infinite;
    img {
        max-width: 700px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        @media (max-width: 576px) {
            width: 90%;
        }
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
const Img3 = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const ImgMobile = styled.div`
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        display: block;
    }
`;

const StyledPage = styled.div``;

export default Index;
