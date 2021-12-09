import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/self-page/phone-1-min.png"
                            alt="phone-image"
                        />
                    </ImgHalf>
                </WrapImg>
                <Content className="title-banner text-dark text-visi">
                    <Text>Mobile Wallet</Text>
                    <SubText>
                        {" "}
                        Mobile wallets are apps on your iOS or Android phone,
                        convenient because they are always with you.
                        <br />
                        <br />
                        Usually, the private key is generated and stored on your
                        device with backup and recovery options, depending on
                        the app.
                    </SubText>
                </Content>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    /* min-height: 88vh; */
    padding: 10vh 0 0;
    @media (max-width: 770px) {
        padding-top: 140px;
    }
    @media (max-width: 576px) {
        padding-top: 80px;
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
const WrapImg = styled.div`
    width: 35%;
    @media (min-width: 1441px) {
        width: 30%;
    }
    @media (max-width: 768px) {
        width: 40%;
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
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    @media (max-width: 768px) {
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
        padding: 1rem 0;
    }
`;
const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: right;
    line-height: 1.2;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }
    @media (max-width: 576px) {
        line-height: 1.2;
        font-size: 16px;
    }
`;
export default Banner;
