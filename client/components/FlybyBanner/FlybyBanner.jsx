import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { flyby_rocket } from "./flyby-rocket-base64";

const FlybyBanner = () => {
    const [active, setActive] = useState(true);

    return active ? (
        <Wrapper>
            <GlobalStyle />
            <Content>
                <a
                    href="https://flyby.forbitswap.com/#/live"
                    target="_blank"
                    rel="noreferrer"
                    className="box"
                >
                    <img
                        src={flyby_rocket}
                        alt="join background"
                        className="join-bg"
                    />
                    <PointWrap>
                        <div className="point a" />
                        <div className="b">
                            <span className="">IDO</span>
                        </div>
                        <div className="point c" />
                    </PointWrap>
                    <div className="title ">flyby Launchpad</div>
                </a>
            </Content>
            <BlurDiv onClick={() => setActive(false)} />
        </Wrapper>
    ) : (
        <></>
    );
};
const GlobalStyle = createGlobalStyle`
    body{
        overflow: hidden;
    }
    .header--nav{
        z-index: 0;
    }
`;

const Wrapper = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    z-index: 9999999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #00000080; */
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 50vw;
    height: fit-content;
    max-width: 280px;
    /* padding: 1rem; */
    display: flex;
    align-items: flex-start;
    position: relative;
    .title {
        font-style: italic;
        font-size: 24px;
        position: absolute;
        left: 118%;
        top: 40%;
        white-space: nowrap;
    }
    .text-decor {
        font-weight: 500;
        background-image: linear-gradient(
            -225deg,
            rgb(124, 249, 91) 0%,
            rgb(124, 249, 91) 29%,
            rgb(225, 162, 236) 67%,
            rgb(248, 116, 255) 100%
        );
        background-size: 200% auto;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: text-run 5s infinite linear;
    }
    @keyframes text-run {
        from {
            /* right: -120%; */
            background-position: 0 center;
        }
        to {
            /* right: 120%; */
            background-position: -200% center;
        }
    }
    @media (max-width: 800px) {
        .title {
            font-size: 18px;
        }
    }
    @media (max-width: 676px) {
        .title {
            font-size: 22px;
            top: 120%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
const PointWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }
    @keyframes reverse-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .point {
        background-color: white;
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
    .a {
        top: 2px;
        left: 50%;
    }
    .b {
        font-style: italic;
        font-size: 24px;
        position: absolute;
        top: 50%;
        left: calc(100% + 2px);
        animation-name: reverse-spin;
        animation-duration: 15000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .c {
        top: calc(92% + 2px);
        left: 50%;
    }
`;
const BlurDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: #000000cc;
    width: 100%;
    height: 100%;
`;
export default FlybyBanner;
