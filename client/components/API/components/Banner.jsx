import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Banner = () => {
    return (
        <WrapperBanner>
            <WrapContainer>
                <WrapImg>
                    <img
                        src="../images/api-page/api-space-min.png"
                        alt="forbitspace foundation"
                    />
                </WrapImg>
                <Content className="title-banner text-dark text-visi">
                    <Title>API</Title>
                    <SubText>
                        The forbitspace API is a cutting-edge discovery and
                        routing custodial asset exchanges at the best rates on
                        the biggest Ethereum, Binance Smart Chain and Polygon
                        (Matic).
                    </SubText>
                    <SubText>
                        It finds the most efficient token swap paths, splitting
                        swaps protocols and even different market depths within
                        one protocol.
                    </SubText>
                </Content>
            </WrapContainer>
        </WrapperBanner>
    );
};

const WrapperBanner = styled.div`
    padding: 10vh 0 0;
    @media (max-width: 576px) {
        padding: 100px 0;
        text-align: left;
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const WrapImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    max-width: 900px;
    @media (max-width: 768px) {
        justify-content: center;
        :first-child {
            width: 100%;
        }
    }
`;
const Content = styled.div`
    /* margin-left: 100px; */
    padding: 0 10px;
    text-align: right;
    width: 65%;
    align-self: flex-end;
    @media (max-width: 1024px) {
        width: 100%;
        margin-left: 0;
        margin-top: 40px;
        padding: 10px;
    }
`;
const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    padding: 10px 0;
    img {
        max-width: 400px;
    }
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 2px;
        text-align: center;
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
    font-size: 24px;
    font-weight: 300;
    font-family: sans-serif;
    line-height: 1.2;
    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 576px) {
        font-size: 16px;
        line-height: 1.5;
    }
`;
export default Banner;
