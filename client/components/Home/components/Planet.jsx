import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Planets from "../../Planets/Planet";
import LazyLoad from "react-lazyload";

const Planet = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <WrapPlanet>
                    <Planets />
                </WrapPlanet>
                <Content className="title-banner text-dark">
                    <Title>
                        <LazyLoad height={500}>
                            <img
                                src="../images/home-page/forbitspace-word.png"
                                alt="forbitspace-dex-name"
                            />
                        </LazyLoad>
                    </Title>
                    <Text>Aggregation Protocol</Text>
                    <SubText>
                        <span>forbitspace</span> is an aggregator protocol that
                        allows traders to benefit from a large variety of
                        financial tools in a single interface.
                    </SubText>
                    <SubText>
                        <span>forbitspace</span> use an algorithm smart order
                        routing that split a single transaction into multiple
                        orders across various DEX’s, also route orders through
                        allows crypto traders to tap deep liquidity and receive
                        better pricing low cost & efficient the most liquidity.
                    </SubText>
                </Content>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 25px 0;
    @media (min-width: 800px) {
        margin: -120px 0;
    }
    @media (min-width: 1280px) {
        margin: -50px 0;
    }
    @media (min-width: 1440px) {
        margin: -200px 0;
    }

    @media (max-width: 770px) {
        padding-top: 10px;
    }
`;
const WrapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const WrapPlanet = styled.div`
    width: 50%;
    transform: scale(0.68);
    @media (max-width: 1440px) {
        transform: scale(0.65);
    }
    @media (max-width: 1024px) {
        transform: scale(0.55);
    }
    @media (max-width: 768px) {
        transform: scale(0.65);
        margin: -60px 0;
    }
    @media (max-width: 415px) {
        transform: scale(0.4);
        margin: -220px 0;
    }
    @media (max-width: 320px) {
        /* transform: scale(0.4); */
        margin: -280px 0;
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    width: 50%;
    text-align: right;
    max-width: 800px;
    @media (max-width: 1024px) {
        margin-left: 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }
`;
const Title = styled.h2`
    font-size: 5rem;
    font-weight: 600;
    line-height: 1;
    img {
        max-width: 350px;
    }
    @media (max-width: 576px) {
        font-size: 45px;
        letter-spacing: 2px;
        img {
            max-width: 170px;
        }
    }
`;
const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    line-height: 1.2;
    padding: 0 0 10px;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 16px;
        line-height: 1.5;
    }
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    padding: 10px 0;
    @media (max-width: 768px) {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 200;
        line-height: 25px;
    }
`;

export default Planet;
