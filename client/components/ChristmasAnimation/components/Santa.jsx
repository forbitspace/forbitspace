import React from "react";
import styled, { keyframes } from "styled-components";

const Santa = () => {
    return (
        <WrapContent>
            <WrapImage>
                <img src="../images/design-image/santa.png" alt="noel-image" />
            </WrapImage>
        </WrapContent>
    );
};

const shake = keyframes`
    0% {
        transform: rotate(-5deg);
    }
    25% {
        transform: rotate(20deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    75% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-5deg);
    }
`;
const run_across_screen = keyframes`
    0%{
        left: 90%;
        bottom: -10%;
    }
    100%{
        left: -10%;
        bottom: 110%;
    }
`;

const WrapContent = styled.div`
    width: 100%;
    max-width: 240px;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
    @media (min-width: 1440px) {
        max-width: 360px;
    }
    @media (max-width: 576px) {
        gap: 3px;
        max-width: 160px;
    }
`;
const WrapImage = styled.div`
    /* width: 33%; */
    position: fixed;

    left: -10%;
    bottom: 110%;
    animation: ${run_across_screen} 10s linear 1;

    img {
        width: 100%;
        max-width: 280px;
        animation: ${shake} 20s linear infinite;
    }
    @media (min-width: 1440px) {
        img {
            max-width: 360px;
        }
    }
    @media (max-width: 576px) {
        img {
            max-width: 160px;
        }
    }
`;

export default Santa;
