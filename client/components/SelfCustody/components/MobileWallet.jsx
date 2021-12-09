import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const MobileWallet = () => {
    return (
        <BoxSection>
            <WrapContainer className="container__bridge">
                <Content>
                    <Text>Bridge Space</Text>
                    <SubText className="text-left">
                        {" "}
                        <span>forbitspace</span> will have extended the
                        Cross-Chain Bridge, allowing users to swap tokens on
                        different blockchains easily and conveniently with the
                        release of Bridge Space Cross-Chain Bridge currently
                        supports on different blockchain Bridge Space is a
                        blockchain bridge that enables users to access the
                        benefits of different blockchain technologies without
                        having to choose between platforms.
                        <br />
                        <br />
                        This not only helps take pressure off of Ethereum, but
                        this is also particularly important as congestion issues
                        persist on Ethereum, where the most popular DeFi
                        network.
                    </SubText>
                </Content>
                <WrapImg>
                    <ImgHalf className="img__bridge">
                        <img
                            src="../images/self-page/bridge.png"
                            alt="bridge"
                        />
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
            <WrapContainer>
                <WrapImg>
                    <ImgHalf className="img__phone">
                        <img
                            src="../images/self-page/phone-1-min.png"
                            alt="phone-01"
                        />
                    </ImgHalf>
                </WrapImg>
                <Content className="text__mobile-wallet">
                    <Text>Mobile wallet</Text>
                    <SubText className="text__mobile-wallet">
                        Mobile wallets are apps on your iOS or Android phone,
                        convenient because they are always with you. Usually,
                        the private key is generated and stored on your device
                        with backup and recovery options, depending on the app.
                    </SubText>
                </Content>
            </WrapContainer>

            <WrapWallet className="container">
                <Content>
                    <Text>Smart contract wallet</Text>
                    <SubText className="text-left">
                        A smart contract is a program deployed to disparate
                        blockchains like Ethereum, Binance Smart Chain, and has
                        a mobile app or desktop interface.
                        <br />
                        <br />
                        Smart contract wallets are the most functional wallets
                        because they can be programmed in many ways and have
                        additional security measures like daily spend limits,
                        further approval from a trusted party or another wallet
                        if transactions are above a certain limit, and advanced
                        recovery mechanisms. Private keys are generated on the
                        mobile device or browser.
                    </SubText>
                </Content>
                <img
                    src="../images/self-page/wallett1-02.png"
                    alt="wallet-02"
                />
            </WrapWallet>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    @media (min-width: 768px) {
        padding: 25px 0;
    }
    @media (max-width: 770px) {
        padding-top: 10px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto 3rem;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 1rem;
        &.container__bridge {
            flex-direction: column;
        }
    }
`;
const WrapImg = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        /* width: 60%; */
    }
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: center;
    img {
        max-width: 450px;
        height: auto;
    }
    @media (max-width: 1024px) {
        img {
            max-width: 350px;
        }
    }
    @media (max-width: 768px) {
        text-align: center !important;
        img {
            width: 65%;
            height: auto;
        }
    }
`;
const Content = styled.div`
    width: 50%;
    text-align: left;
    &.text__mobile-wallet {
        text-align: right;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center !important;
    }
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
    }
`;

const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: right;
    line-height: 1.2;
    span {
        font-style: italic;
        font-weight: 900;
    }
    &.text-left {
        text-align: left;
    }
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center !important;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 16px;
    }
`;
const WrapWallet = styled.div`
    margin-top: 4rem;
    width: 100%;
    /* padding: 0 3rem; */

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    img {
        width: 50%;
        max-width: 760px;
    }
    @media (max-width: 768px) {
        margin-top: 2rem;
        width: 100%;
        flex-direction: column;
        img {
            width: 60%;
        }
    }
`;

export default MobileWallet;
