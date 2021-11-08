import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Finder = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    {/* <Title>forbitspace</Title> */}
                    {/* <Text>How it works</Text> */}
                    <SubText>
                        <span>forbitspace</span> use an algorithm smart order
                        routing that split a single transaction into multiple
                        orders across various DEX’s, also route orders through
                        allows crypto traders to tap deep liquidity and receive
                        better pricing low cost & efficient the most liquidity
                    </SubText>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/home-page/pafider.png"
                            alt="logo-path-finder"
                        />
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    margin: 0rem 0 1rem; //temporary margin
    padding: 10vh 0 5rem;
    @media (max-width: 1440px) {
        padding: 1rem 0;
    }
    @media (max-width: 770px) {
        padding: 20px 0 0;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const WrapImg = styled.div`
    width: 65%;
    /* transform: rotate(-5deg); */
    @media (max-width: 768px) {
        width: 80%;
    }
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: left;
    transform: translate(-6rem);
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 1440px) {
        transform: translate(-8rem);
    }
    @media (max-width: 768px) {
        transform: scale(1);
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    width: 50%;
    text-align: center;
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
const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    font-family: sans-serif;
    text-align: left;
    line-height: 1.2;
    &.toggle__btn {
        font-style: italic;
        font-weight: 400;
    }
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 16px;
    }
`;
export default Finder;
