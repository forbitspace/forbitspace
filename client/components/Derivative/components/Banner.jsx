import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    <Text>Derivative Protocol</Text>
                    <WrapText>
                        <SubText>
                            Crypto derivatives trading is on the rise today. The
                            futures and options allow the traders to hedge their
                            positions and mitigate their risks during highly
                            volatile trading days. Synthetic assets on
                            decentralized trading platforms are fetching good
                            trade volume.
                        </SubText>
                        <SubText>
                            <span>forbitspace</span> derivatives protocol is
                            used to create custom assets by using
                            forward-looking features of locking the price in and
                            the ability to either buy or sell an asset.
                            <br />
                            <br />
                            <span>forbitspace</span> use a contract that
                            represents an asset bought or sold at a future date
                            for a future price, synthetics are the very
                            underlying asset representative of other assets.
                        </SubText>
                    </WrapText>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/home-page/derivative.png"
                            alt="derivative-image"
                        />
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
            <WrapContainer>
                <SubText>
                    Derivatives in the Defi world are important because what is
                    being built here is not a trading and speculation market;
                    it’s a use-case market. The principle of hedging goes far
                    beyond Defi or cryptocurrencies. It’s applicable to the
                    traditional financial world as well.
                </SubText>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    /* min-height: 88vh; */
    padding: 12vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const WrapImg = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 60%;
    }
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: right;
    margin: 2rem 0;
    img {
        width: 100%;
        height: auto;
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
        align-items: center;
    }
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    padding: 10px 0;
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
        padding: 1rem 0;
    }
`;
const WrapText = styled.div``;

const SubText = styled.p`
    font-size: 18px;
    font-weight: 300;
    /* font-family: sans-serif; */
    line-height: 1.2;
    span {
        font-weight: 900;
        font-style: italic;
    }
    @media (max-width: 768px) {
        text-align: justify;
        font-size: 14px;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        text-align: center;
        font-size: 14px;
    }
`;
export default Banner;
