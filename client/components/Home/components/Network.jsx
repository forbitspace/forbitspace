import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Routing from "./Routing";
// import Pramaster from "./Pramaster";

const Network = () => {
    return (
        <>
            <BoxSection>
                <WrapContainer className="container">
                    <WrapContent className="content-space">
                        <WrapImg className="image-space">
                            <ImgHalf className="banner-space">
                                <LazyLoad height={200}>
                                    <img
                                        // src="../images/home-page/network-02.png"
                                        src="../images/home-page/banner.png"
                                        // src="https://firebasestorage.googleapis.com/v0/b/image-storage-2f921.appspot.com/o/space_dex_min.gif?alt=media&token=d7c24d47-8c9b-4ce5-9f76-62683113def6"
                                        alt="space-network"
                                    />
                                </LazyLoad>
                            </ImgHalf>
                            <WrapperButtonApp>
                                <ButtonBanner
                                    href="https://app.forbitspace.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Space Trade
                                </ButtonBanner>
                            </WrapperButtonApp>
                        </WrapImg>{" "}
                        <WrapTitle className="title-space">
                            <Text>Spread across Multiple Networks</Text>
                            <SubText className="subtext__title">
                                <span>forbitspace</span> aggregator protocol is
                                now available on Ethereum, BNB Chain
                                <br /> and Polygon, Avalanche.
                            </SubText>
                            <br />
                        </WrapTitle>
                    </WrapContent>
                </WrapContainer>
            </BoxSection>
            <GifWrapper className="banner-space">
                <Routing />
            </GifWrapper>
            <BoxSection>
                <WrapContainer className="container">
                    <WrapContent className="content-space">
                        <WrapTitle className="title-space">
                            <br />
                            <SubText className="subtext__title">
                                <span>forbitspace</span> connects multiple
                                blockchains, making the network’s transaction
                                from one chain to another seamless becomes that
                                the additional functionality, usability, and
                                scalability are blazingly fast, low cost &
                                eco-friendly, brings is contributes to the
                                benefit of users. <br />{" "}
                            </SubText>
                        </WrapTitle>
                    </WrapContent>
                    <WrapContent>
                        <SubText className="subtext__content">
                            The <span>forbitspace</span> DEX super aggregator is
                            an interoperability protocol that connects disparate
                            blockchains. That unites decentralized applications
                            across disparate blockchains, simultaneously uniting
                            liquidity across chains and making it possible to
                            transact in, out, and across disparate networks with
                            ease.
                        </SubText>
                        <WrapImg className="img__swap">
                            <WrapperButtonApp className="btn-swap">
                                <ButtonBanner
                                    href="https://app.forbitswap.com/#/swap"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="forbitswap"
                                >
                                    forbitswap
                                </ButtonBanner>
                            </WrapperButtonApp>
                            <ImgHalf>
                                <LazyLoad height={200}>
                                    <img
                                        src="../images/home-page/network-01.png"
                                        alt="swap-network"
                                    />
                                </LazyLoad>
                            </ImgHalf>
                        </WrapImg>
                    </WrapContent>
                </WrapContainer>
            </BoxSection>
        </>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 2vh 0px 0;

    @media (max-width: 1024px) {
        padding: 10px 0 0;
    }
`;
const Text = styled.div`
    font-size: 2rem;
    font-weight: 500;
    text-align: right;
    padding: 10px 0;
    @media (max-width: 768px) {
        font-size: 26px;
        padding: 10px 0 30px;
        text-align: center;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
    /* padding: 0%; */

    @media (max-width: 768px) {
        gap: 0;
    }
`;
const WrapTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    @media (max-width: 768px) {
        align-items: center;
        width: 100%;
    }
`;
const WrapContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    &.content-space {
        flex-direction: column;
        align-items: center;
        .title-space {
            width: 100%;
        }
        .image-space {
            width: 100%;
        }
        .banner-space {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        :first-child {
            /* flex-direction: column-reverse; */
        }
    }
`;
const WrapImg = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 1rem 0;
    &.img__swap {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 70% !important;
        justify-content: center;
        :first-child {
            width: 100%;
        }
    }
    @media (max-width: 576px) {
        width: 100% !important;
    }
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: left;
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 768px) {
        padding: 10px 0;
    }
`;
const GifWrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    overflow: hidden;
    text-align: center;
    img {
        width: 100%;
        max-width: 750px;
    }
`;
const SubText = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
    /* width: 60%; */
    span {
        font-style: italic;
        font-weight: 900;
    }
    &.subtext__title {
        text-align: right;
    }
    &.subtext__content {
        width: 50%;
        padding: 40px 0;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        width: 100% !important;
        text-align: center !important;
    }
    @media (max-width: 576px) {
        font-size: 14px;
        line-height: 1.5;
        &.subtext__content {
            padding: 0;
        }
    }
`;
const WrapperButtonApp = styled.div`
    /* max-width: 350px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: left;
    &.btn-swap {
        justify-content: center;
    }
    @media (max-width: 1200px) {
        /* display: block; */
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 576px) {
        text-align: center;
        max-width: unset;
    }
`;

const ButtonBanner = styled.a`
    color: white;
    text-decoration: none;
    text-align: center;
    font-style: italic;
    font-weight: 500;
    font-size: 1.125rem;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: rgb(255, 255, 255);
    width: 100%;
    max-width: 150px;
    border-radius: 12px;
    padding: 0.35rem 0.85rem;
    /* margin-right: 1rem; */
    display: inline-block;
    transform: scale(0.98);
    box-sizing: border-box;
    transition: transform 0.25s ease 0s;
    cursor: pointer;
    overflow: hidden;

    background-image: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    background-size: 200%;
    background-position: 99%;

    &.forbitswap {
        background-size: 110%;
        background-position: 30%;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
export default Network;
