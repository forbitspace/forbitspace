import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Features = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    {/* <Title>forbitspace</Title> */}
                    <Text>Why use forbitspace API?</Text>
                    <SubText>
                        {/* Users are covered for up to 600 ETH in the event that funds are lost
            during a swap due to an unforeseen bug. */}
                    </SubText>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/api-page/api-02.png"
                            alt="image-space-api"
                        />
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
        padding: 15px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-direction: column;
    @media (max-width: 768px) {
    }
`;
const WrapImg = styled.div`
    width: 60%;
    @media (min-width: 2100px) {
        width: 65%;
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
    /* margin-left: 80px; */
    width: 100%;
    text-align: left;
    /* max-width: 600px; */
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
        max-width: unset;
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
    font-size: 22px;
    font-weight: 300;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 16px;
    }
`;

export default Features;
