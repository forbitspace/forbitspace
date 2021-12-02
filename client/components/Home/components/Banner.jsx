import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Banner = () => {
    return (
        <BoxSection>
            <WrapImgBanner>
                <LazyLoad height={400}>
                    <img
                        width="1251"
                        height="409.79"
                        src="../images/home-page/banner.png"
                        alt="banner-picture"
                    />
                </LazyLoad>
            </WrapImgBanner>
            <Container>
                <Content className="title-banner text-dark text-visi">
                    <Title>
                        <img
                            src="../images/home-page/forbitspace-word.png"
                            alt="forbitspace-dex-name"
                        />
                    </Title>
                    <Text>The Decentralized Exchange Super Aggregator</Text>
                    <SubText>
                        <span>forbitspace</span> is an interoperability
                        aggregator protocol that unites decentralized
                        applications across disparate blockchains. Allows crypto
                        traders to tap deep liquidity and receive better pricing
                        one single interface.
                    </SubText>
                    <ButtonBanner
                        href="https://app.forbitspace.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Launch App{" "}
                        <img
                            src="../images/chevron-right.svg"
                            alt="button-launch-app-chevron"
                        />
                    </ButtonBanner>
                </Content>
            </Container>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 2vh 0 0;
    transition: min-height 0.3s;
    margin-top: -40px;

    @media (max-width: 770px) {
        margin-top: 0px;
        padding-top: 50px;
    }
`;
const WrapImgBanner = styled.div`
    width: 100vw;
    height: auto;
    max-width: 100%;
    margin-bottom: -80px;
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 768px) {
        margin-bottom: 0px;
    }
`;
const Content = styled.div`
    width: 75%;
    @media (max-width: 1220px) {
        width: 85%;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
    @media (max-width: 576px) {
        text-align: center;
    }
`;
const Title = styled.h2`
    font-size: 4rem;
    font-weight: 600;
    line-height: 1;
    img {
        max-width: 400px;
    }
    @media (max-width: 576px) {
        font-size: 45px;
        letter-spacing: 2px;
        img {
            max-width: 200px;
        }
    }
`;
const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    /* font-family: sans-serif; */
    line-height: 1.2;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 576px) {
        font-size: 16px;
        margin-top: 2rem;
        line-height: 1.5;
    }
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    font-style: italic;
    @media (max-width: 576px) {
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 200;
        line-height: 25px;
    }
`;

const ButtonBanner = styled.a`
    padding: 0.35rem 0.85rem;
    text-decoration: none;
    text-align: center;
    border-radius: 12px;
    display: inline-block;
    transition: transform 0.25s ease 0s;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 1.125rem;
    font-style: italic;
    cursor: pointer;
    width: fit-content;
    background-color: rgb(255, 255, 255);
    color: white;
    /* border: 1px solid transparent; */
    margin-right: 1rem;
    margin-top: 1rem;
    background-image: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    width: 100%;
    background-size: 200%;
    background-position: right;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    /* :hover {
        color: white;
    } */

    img {
        max-height: 12px;
    }
    @media (min-width: 576px) {
        display: none;
    }
`;
export default Banner;
