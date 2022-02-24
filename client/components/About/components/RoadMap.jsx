import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const RoadMap = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    <Text>Roadmap</Text>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/about-page/roadmap.png"
                            alt="road-map"
                        />
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    /* min-height: 88vh; */
    padding: 2vh 0 1vh;
    @media (max-width: 770px) {
        padding-top: 10px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    flex-direction: column;
    :last-child {
        padding: 4rem 0;
    }
    @media (max-width: 576px) {
        align-items: center;
    }
`;
const WrapImg = styled.div`
    width: 100%;
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: center;
    img {
        width: 100%;
        height: auto;
        max-width: 1200px;
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
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
export default RoadMap;
