import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { flyby_rocket } from "./flyby-rocket-base64";

const FlybyBanner = () => {
    const [active, setActive] = useState(true);

    return active ? (
        <Wrapper>
            <GlobalStyle />
            <Content>
                <img
                    src="../images/icons/close-icon.svg"
                    alt="close icon"
                    className="close-icon"
                    onClick={() => setActive(false)}
                />
                <a
                    href="https://app.flybylaunchpad.com/#/live"
                    target="_blank"
                    rel="noreferrer"
                    className="box"
                >
                    <WrapImage>
                        <Astronaut>
                            <img
                                src="../images/ido-popup/ido-gif"
                                alt="join background"
                                className="join-bg"
                            />
                        </Astronaut>
                        {/* <Banner>
                            <img
                                src="../images/ido-popup/ido-logo.png"
                                alt="join background"
                                className="join-bg"
                            />
                        </Banner> */}
                    </WrapImage>
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
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 50vw;
    height: fit-content;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .close-icon {
        width: 20px;
        position: absolute;
        top: 0px;
        right: 0px;
        cursor: pointer;
        opacity: 0.3;
    }
    :hover {
        .close-icon {
            opacity: 0.8;
        }
    }
    @media (max-width: 800px) {
        transform: scale(0.7);
        max-width: 280px;
        .close-icon {
            width: 24px;
            top: 0px;
            right: -10px;
        }
    }
`;

const WrapImage = styled.div`
    position: relative;
`;
const Astronaut = styled.div`
    /* position: absolute; */
    width: 220px;
    bottom: 0;
    left: 0;
    z-index: 999;
    &:hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

const Banner = styled.a`
    position: absolute;
    bottom: 85%;
    left: 72%;
    width: 125px;
    height: auto;
    z-index: 999;
    &:hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
    }
    @keyframes popup-scale {
        0% {
            opacity: 0;
        }
        90% {
            transform: scale(0);
            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
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
