import React from "react";
import styled from "styled-components";
import Noel from "./components/Noel";

const ChristmasAnimation = () => {
    return (
        <Wrapper>
            <Content>
                <Noel />
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div``;
const Content = styled.div`
    width: 240px;
    overflow: hidden;

    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    @media (min-width: 1550px) {
        width: 350px;
        bottom: 2.5rem;
        left: 2.5rem;
    }
    @media (max-width: 768px) {
        width: 210px;
    }
    @media (max-width: 576px) {
        left: 0.5rem;
        bottom: 0.5rem;
        width: 150px;
    }
`;

export default ChristmasAnimation;
