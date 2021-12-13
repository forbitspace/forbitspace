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
        transform: rotate(-20deg);
    }
    25% {
        transform: rotate(20deg);
    }
    50% {
        transform: rotate(-20deg);
    }
    75% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-20deg);
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
    position: relative;
    @media (min-width: 1440px) {
        max-width: 360px;
    }
    @media (max-width: 576px) {
        gap: 3px;
    }
`;
const WrapImage = styled.div`
    /* width: 33%; */
    animation: ${shake} 5s linear infinite;

    img {
        width: 100%;
        max-width: 280px;
    }
    @media (min-width: 1440px) {
        img {
            max-width: 360px;
        }
    }
`;

export default Santa;
