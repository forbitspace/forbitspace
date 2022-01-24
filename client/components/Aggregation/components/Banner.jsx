import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Banner = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <WrapImg>
                    <ImgHalf>
                        <LazyLoad height={400} once={true} placeholder={<img
                            width="1250"
                            height="400"
                            src="../images/aggregation-page/eth-aggregation.png"
                            alt="aggregation-placeholder-picture"
                        />}>
                            {/* <img
                                src="../gif/gif_aggregation-protocol.gif"
                                alt="aggregation-protocols"
                            /> */}
                            <img
                                // src="../gif/space-aggregation.gif"
                                src="https://firebasestorage.googleapis.com/v0/b/image-storage-2f921.appspot.com/o/space-aggregation.gif?alt=media&token=1ace86e6-be8c-4d65-ad75-4717acd316ac"
                                alt="aggregation-protocols"
                            />
                        </LazyLoad>
                    </ImgHalf>
                </WrapImg>
                <Content className="title-banner text-dark text-visi">
                    <Text>Aggregation Protocol</Text>
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
    padding: 8vh 0 0;
    margin: 0 0 2rem;
    @media (max-width: 770px) {
        padding-top: 60px;
        margin: 0 0 1rem;
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 576px) {
    }
`;
const WrapImg = styled.div`
    width: 75%;
    @media (max-width: 768px) {
        width: 85%;
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
    text-align: left;
    line-height: 1.2;
    padding-right: 4rem;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        padding-right: 0;
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
export default Banner;
