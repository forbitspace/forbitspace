import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
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
                        <SubText>
                            The <span>forbitspace</span> platforms help users
                            place the limit order which is handled by the
                            order-book feature. We limit order protocol provides
                            the most innovative and optimal. A limit order is a
                            type of buy order which a user can place with a
                            specific buy or sell price whose limit is determined
                            by the user him/herself.
                        </SubText>
                    </WrapText>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <img src="../images/home-page/limit.png" alt="limit" />
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
            <WrapContainer>
                <SubText>
                    The enables the trade to be automatically executed when the
                    market price reaches the users’ target price. It allows
                    users to buy dips or take profits to take benefits of
                    volatility in the marketplace.
                    <br />
                    <br />A limit order would allow DeFi traders to get their
                    swaps at desired prices by leaving instructions to fill buy
                    or sell orders at specific prices (or better prices). For
                    instance, if you think an asset is too expensive at the
                    moment, or you are expecting prices to drop throughout the
                    day, then you simply set a limit order to buy at a price
                    below the current market price. How much lower is totally up
                    to users.
                </SubText>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 8rem 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const WrapImg = styled.div`
    width: 50%;
    transform: rotate(-5deg);
    @media (max-width: 768px) {
        width: 60%;
    }
    @media (max-width: 576px) {
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
    /* margin-left: 20px; */
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
    }
`;
const WrapText = styled.div``;

const SubText = styled.p`
    font-size: 18px;
    font-weight: 300;
    /* font-family: sans-serif; */
    margin-bottom: 3rem;
    line-height: 1.2;

    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        text-align: justify;
        font-size: 14px;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        text-align: center;
        font-size: 14px;
        margin-bottom: 1.5rem;
    }
`;
export default Banner;
