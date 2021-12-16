import React from "react";
import styled, { keyframes } from "styled-components";

const Xmas = () => {
    return (
        <WrapContent>
            <WrapOuter>
                <WrapImage>
                    <img src="../images/design-image/X.png" alt="noel-image" />
                </WrapImage>
                <WrapImage>
                    <img src="../images/design-image/M.png" alt="noel-image" />
                </WrapImage>
                <WrapImage>
                    <img src="../images/design-image/A.png" alt="noel-image" />
                </WrapImage>
                <WrapImage>
                    <img src="../images/design-image/S.png" alt="noel-image" />
                </WrapImage>
            </WrapOuter>
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
    90% {
        transform: rotate(-20deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const move_form_right = keyframes`
    0% {
        left: 110%;
    }
    40%{
        left:50%;
        transform: translate(-50%, 0px);
    }
    45%{
        left:50%;
        transform: translate(-50%, -50px);
    }
    55%{
        left:50%;
        transform: translate(-50%, -50px);
    }
    60%{
        left:50%;
        transform: translate(-50%, 0px);
    }
    100% {
        left: -110%;
    }
`;

const WrapContent = styled.div`
    width: 100%;
    /* max-width: 240px; */
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;

    position: fixed;
    bottom: 4rem;
    left: 0;
    width: 100%;
    @media (min-width: 1440px) {
        bottom: 1rem;
    }
    @media (max-width: 576px) {
        bottom: 1rem;
        gap: 3px;
    }
`;
const WrapOuter = styled.div`
    width: fit-content;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 100%;
    /* animation: ${move_form_right} 5s linear; */
    animation-name: ${move_form_right};
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-play-state: running;
    animation-delay: 10s;
    @media (max-width: 576px) {
        animation-duration: 10s;
        bottom: 4rem;
    }
`;
const WrapImage = styled.div`
    width: 24%;

    img {
        width: 120px;
        height: auto;

        animation-name: ${shake};
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: linear;
        animation-play-state: running;
        animation-delay: 10s;
    }
    @media (max-width: 576px) {
        img {
            max-width: 80px;
        }
    }
`;

export default Xmas;
