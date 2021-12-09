import React from "react";
import styled from "styled-components";

const Banner = () => {
    return (
        <WrapperBanner>
            <BackgroundBanner>
                <img
                    src="../images/contributor-page/spaceship-min.png"
                    alt="orbit contributors"
                />
            </BackgroundBanner>
            <Content className="title-banner text-dark text-visi">
                <Title>Financial Orbit Space</Title>
                <Text>
                    We are a team that combines experienced professionals in
                    financial markets, and young, dynamic, open-minded, and
                    strong focused on research in the blockchain and
                    decentralized finance ecosystem that aims to bring DeFi
                    space to the wider community.
                </Text>
            </Content>
        </WrapperBanner>
    );
};

const WrapperBanner = styled.div`
    text-align: right;
    position: relative;
    /* display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column; */
    @media (max-width: 576px) {
        text-align: left;
        min-height: 83vh;
        padding-top: 3rem;
    }
`;
const BackgroundBanner = styled.div`
    img {
        width: 100%;
    }
    margin: auto 0;
`;
const Content = styled.div`
    margin-top: 3rem;
    @media (max-width: 576px) {
        margin-left: 0;
        margin-top: 80px;
    }
`;
const Title = styled.h2`
    font-size: 3.5rem;
    text-align: center;
    /* font-family: Montserrat, sans-serif; */
    font-style: italic;
    font-weight: 500;
    @media (max-width: 576px) {
        font-size: 30px;
        letter-spacing: 2px;
    }
`;
const Text = styled.p`
    font-size: 24px;
    font-style: italic;
    font-weight: 300;
    line-height: 40px;
    line-height: 1.2;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 18px;
        line-height: 1.5;
    }
`;
export default Banner;
