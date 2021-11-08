import React, { useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
const LimitOrder = () => {
    const [open, setOpen] = useState(false);
    return (
        <BoxSection>
            <WrapContainer>
                <WrapImg>
                    <ImgHalf>
                        <LazyLoad>
                            <img
                                src="../images/home-page/limit.png"
                                alt="limit-order"
                            />
                        </LazyLoad>
                    </ImgHalf>
                </WrapImg>
                <Content className="title-banner text-dark text-visi">
                    {/* <Title>forbitspace</Title> */}
                    <Text>Limit Order Protocol</Text>
                    <WrapText>
                        <SubText>
                            A limit order places a specific price that a trader
                            wants to buy or sell at and is only executed if the
                            market hits that price.
                        </SubText>
                        <SubText>
                            Whereas market orders are executed immediately,
                            limit orders are executed at a predefined price,
                            which is generally better than the current market
                            price.
                        </SubText>
                        {open ? (
                            <>
                                <SubText>
                                    The <span>forbitspace</span> platforms help
                                    users place the limit order which is handled
                                    by the order-book feature. We limit order
                                    protocol provides the most innovative and
                                    optimal. A limit order is a type of buy
                                    order which a user can place with a specific
                                    buy or sell price whose limit is determined
                                    by the user him/herself. The enables the
                                    trade to be automatically executed when the
                                    market price reaches the users’ target
                                    price. It allows users to buy dips or take
                                    profits to take benefits of volatility in
                                    the marketplace.
                                </SubText>
                                <SubText>
                                    A limit order would allow DeFi traders to
                                    get their swaps at desired prices by leaving
                                    instructions to fill buy or sell orders at
                                    specific prices (or better prices). For
                                    instance, if you think an asset is too
                                    expensive at the moment, or you are
                                    expecting prices to drop throughout the day,
                                    then you simply set a limit order to buy at
                                    a price below the current market price. How
                                    much lower is totally up to users.
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
                    </WrapText>
                </Content>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 25px 0;
    @media (max-width: 770px) {
        padding-top: 10px;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const WrapImg = styled.div`
    width: 45%;
    transform: rotate(-12deg);
    @media (max-width: 1320px) {
        width: 60%;
    }
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
    margin-left: 20px;
    width: 55%;
    transition: all ease-in-out 0.2s;
    text-align: right;
    @media (max-width: 1320px) {
        width: 40%;
    }
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
    text-align: right;
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
        text-align: center;
    }
`;
const WrapText = styled.div``;
const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    text-align: right;
    line-height: 1.2;
    span {
        font-style: italic;
        font-weight: 900;
    }
    &.toggle__btn {
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
    }
    @media (max-width: 768px) {
        text-align: center;
        font-size: 14px;
        &.toggle__btn {
            font-size: 12px;
        }
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 16px;
    }
`;

export default LimitOrder;
