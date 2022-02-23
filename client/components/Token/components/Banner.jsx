import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
    return (
        <BoxSection>
            <Content>
                <Title>Introducing FBS</Title>
            </Content>
            <WrapContainer>
                <WrapImg>
                    <img
                        src="../images/token-page/token-banner-min.png"
                        alt=""
                    />
                </WrapImg>
                <WrapLogo>
                    <img src="../images/token-page/logo-full-gray.png" alt="" />
                </WrapLogo>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 8vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;
const WrapImg = styled.div`
    width: 100%;
    max-width: 980px;
    img {
        width: 100%;
        margin: auto;
    }
`;
const WrapLogo = styled.div`
    width: 100%;
    max-width: 420px;
    img {
        width: 100%;
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    text-align: center;
`;
const Title = styled.p`
    font-size: 3rem;
    font-weight: 900;
    font-style: italic;
    line-height: 40px;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 2rem 0;
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
    max-width: 600px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 16px;
    }
`;

export default Banner;
