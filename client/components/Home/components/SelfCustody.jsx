import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const SelfCustody = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <WrapLiquidity>
                    <ImgHalf>
                        <LazyLoad height={200}>
                            <img
                                src="../images/home-page/self-custody-min.png"
                                alt="self-custody"
                            />
                        </LazyLoad>
                    </ImgHalf>
                </WrapLiquidity>
                <Content>
                    <Text>Self-custody</Text>
                    <SubText>
                        In the world DeFi, your money becomes empowered. You can
                        store it, lend it, trade it, zap it, and track it in
                        real-time. It’s a bit like a game but at the heart of
                        this is more control, aka self-custody.
                    </SubText>
                    <SubText>
                        Self-custody refers to individuals being 100% in control
                        of their assets, similar to cash. Except this is digital
                        cash, and it’s not dependent on a bank or other entity
                        to issue it or verify transactions. This is precisely
                        why blockchain was such a huge innovation starting with
                        Bitcoin and then Ethereum.
                    </SubText>
                </Content>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 25px 0;

    @media (max-width: 768px) {
        padding-top: 10px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const WrapLiquidity = styled.div`
    width: 50%;
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
    margin-left: 55px;
    width: 50%;
    text-align: right;
    max-width: 600px;
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
const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 16px;
    }
`;

export default SelfCustody;
