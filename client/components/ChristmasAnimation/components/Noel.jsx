import React from "react";
import styled, { keyframes } from "styled-components";

const Noel = () => {
    return (
        <WrapContent>
            <Snowflake className="snowflakes" aria-hidden="true">
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❅</div>
            </Snowflake>
            <WrapImage>
                <img src="../images/design-image/noel_2.png" alt="noel-image" />
            </WrapImage>
            <WrapImage className="wide-screen">
                <img src="../images/design-image/noel_1.png" alt="noel-image" />
            </WrapImage>
            <WrapImage>
                <img src="../images/design-image/noel_3.png" alt="noel-image" />
            </WrapImage>
            <WrapImage className="medium-screen">
                <img src="../images/design-image/noel_1.png" alt="noel-image" />
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
        flex-direction: column-reverse;
        max-width: 210px;
    }
    @media (max-width: 576px) {
        gap: 3px;
    }
`;
const WrapImage = styled.div`
    width: 33%;
    animation: ${shake} 5s linear infinite;

    img {
        width: 100%;
        max-width: 100px;
    }
    &.wide-screen {
        display: none;
    }
    @media (min-width: 1440px) {
        width: fit-content;
        img {
            max-width: 210px;
        }
        &.medium-screen {
            display: none;
        }
        &.wide-screen {
            display: block;
        }
    }
`;

const Snowflake = styled.div`
    .snowflake {
        color: #ffffff !important;
        font-size: 1em;
        font-family: Arial;
        text-shadow: 0 0 1px #000;
        opacity: 0.8;
    }

    @-webkit-keyframes snowflakes-fall {
        0% {
            top: -30%;
        }
        100% {
            top: 100%;
        }
    }
    @-webkit-keyframes snowflakes-shake {
        0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
        }
        50% {
            -webkit-transform: translateX(80px);
            transform: translateX(80px);
        }
        100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
        }
    }
    @keyframes snowflakes-fall {
        0% {
            top: -30%;
        }
        100% {
            top: 100%;
        }
    }
    @keyframes snowflakes-shake {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(40px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    .snowflake {
        position: absolute;
        top: -30%;
        z-index: 9999;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        -webkit-animation-name: snowflakes-fall, snowflakes-shake;
        -webkit-animation-duration: 4s, 10s;
        -webkit-animation-timing-function: linear, ease-in-out;
        -webkit-animation-iteration-count: infinite, infinite;
        -webkit-animation-play-state: running, running;
        animation-name: snowflakes-fall, snowflakes-shake;
        animation-duration: 4s, 10s;
        animation-timing-function: linear, ease-in-out;
        animation-iteration-count: infinite, infinite;
        animation-play-state: running, running;
    }
    @media (min-width: 1440px) {
        .snowflake {
            -webkit-animation-duration: 8s, 10s;
            animation-duration: 8s, 10s;
        }
    }
    .snowflake:nth-of-type(0),
    .snowflake:nth-of-type(10) {
        left: 1%;
        -webkit-animation-delay: 0s, 0s;
        animation-delay: 0s, 0s;
    }
    .snowflake:nth-of-type(1),
    .snowflake:nth-of-type(11) {
        left: 10%;
        -webkit-animation-delay: 1s, 1s;
        animation-delay: 1s, 1s;
    }
    .snowflake:nth-of-type(2),
    .snowflake:nth-of-type(12) {
        left: 20%;
        -webkit-animation-delay: 6s, 0.5s;
        animation-delay: 6s, 0.5s;
    }
    .snowflake:nth-of-type(3),
    .snowflake:nth-of-type(13) {
        left: 30%;
        -webkit-animation-delay: 4s, 2s;
        animation-delay: 4s, 2s;
    }
    .snowflake:nth-of-type(4),
    .snowflake:nth-of-type(14) {
        left: 40%;
        -webkit-animation-delay: 2s, 2s;
        animation-delay: 2s, 2s;
    }
    .snowflake:nth-of-type(5),
    .snowflake:nth-of-type(15) {
        left: 50%;
        -webkit-animation-delay: 8s, 3s;
        animation-delay: 8s, 3s;
    }
    .snowflake:nth-of-type(6),
    .snowflake:nth-of-type(16) {
        left: 60%;
        -webkit-animation-delay: 6s, 2s;
        animation-delay: 6s, 2s;
    }
    .snowflake:nth-of-type(7),
    .snowflake:nth-of-type(17) {
        left: 70%;
        -webkit-animation-delay: 2.5s, 1s;
        animation-delay: 2.5s, 1s;
    }
    .snowflake:nth-of-type(8),
    .snowflake:nth-of-type(18) {
        left: 80%;
        -webkit-animation-delay: 1s, 0s;
        animation-delay: 1s, 0s;
    }
    .snowflake:nth-of-type(9),
    .snowflake:nth-of-type(19) {
        left: 90%;
        -webkit-animation-delay: 3s, 1.5s;
        animation-delay: 3s, 1.5s;
    }
`;

export default Noel;
