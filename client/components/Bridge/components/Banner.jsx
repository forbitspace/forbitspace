import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
// import NetworkAnimation from "./NetworkAnimation";

const Banner = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/self-page/bridge.png"
                            alt="bridge-image"
                        />
                    </ImgHalf>
                </WrapImg>
                <Content className="title-banner text-dark text-visi">
                    <Text>Bridge Space</Text>
                    <SubText>
                        {" "}
                        <span>forbitspace</span> will have extended the
                        Cross-Chain Bridge, allowing users to swap tokens on
                        different blockchains easily and conveniently with the
                        release of Bridge Space Cross-Chain Bridge currently
                        supports on different blockchain.
                        <br />
                        <br />
                        Bridge Space is a blockchain bridge that enables users
                        to access the benefits of different blockchain
                        technologies without having to choose between platforms.
                        <br />
                        <br />
                        This not only helps take pressure off of Ethereum, but
                        This is also particularly important as congestion issues
                        persist on Ethereum, where the most popular DeFi
                        network.
                    </SubText>
                </Content>
            </WrapContainer>
            {/* <NetworkAnimation /> */}
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 15vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
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
    width: 40%;
    max-width: 450px;
    @media (max-width: 768px) {
        width: 50%;
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
    }
`;

const SubText = styled.p`
    font-size: 22px;
    font-weight: 300;
    font-family: sans-serif;
    text-align: right;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }
    @media (max-width: 576px) {
        font-size: 16px;
    }
`;
export default Banner;
