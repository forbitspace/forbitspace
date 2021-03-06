import React, { useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Derivative = () => {
    const [open, setOpen] = useState(false);
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    <Text>Derivative Protocol</Text>
                    <SubText>
                        Crypto derivatives trading is on the rise today. The
                        futures and options allow the traders to hedge their
                        positions and mitigate their risks during highly
                        volatile trading days.
                    </SubText>
                    {open ? (
                        <>
                            <SubText>
                                Synthetic assets on decentralized trading
                                platforms are fetching good trade volume.
                            </SubText>
                            <SubText>
                                Derivatives in the Defi world are important
                                because what is being built here is not a
                                trading and speculation market; it’s a use-case
                                market. The principle of hedging goes far beyond
                                Defi or cryptocurrencies. It’s applicable to the
                                traditional financial world as well.
                            </SubText>

                            <SubText>
                                Derivatives protocol provider used to create
                                custom assets by using forward-looking features
                                of locking the price in and the ability to
                                either buy or sell an asset. Like derivatives
                                are a contract that represents an asset bought
                                or sold at a future date for a future price,
                                synthetics are the very underlying asset
                                representative of other assets.
                            </SubText>
                        </>
                    ) : (
                        <></>
                    )}
                    <SubText
                        onClick={() => setOpen(!open)}
                        className="toggle__btn"
                    >
                        {open ? "Hide" : "Read more..."}
                    </SubText>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <LazyLoad>
                            <img
                                src="../images/home-page/derivative.png"
                                alt="derivative"
                            />
                        </LazyLoad>
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 25px 0;
    @media (max-width: 770px) {
        padding: 10px 0;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const WrapImg = styled.div`
    width: 50%;
    padding: 0 30px 0 0;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: left;
    img {
        width: 100%;
        height: auto;
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    width: 50%;
    /* max-width: 600px; */
    text-align: left;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
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
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
    padding: 10px 0 0;
    &.toggle__btn {
        font-weight: 400;
        font-style: italic;
        font-size: 14px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        &.toggle__btn {
            font-size: 12px;
        }
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 14px;
    }
`;

export default Derivative;
