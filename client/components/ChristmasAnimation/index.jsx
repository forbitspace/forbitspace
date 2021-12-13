import React from "react";
import styled from "styled-components";
import Noel from "./components/Noel";
import Santa from "./components/Santa";

const ChristmasAnimation = () => {
    return (
        <Wrapper>
            <Content>
                <Noel />
                <Santa />
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div``;
const Content = styled.div`
    width: 100vw;
    padding: 0.5em;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 9999;

    position: fixed;
    bottom: 1.5rem;
    left: 0rem;
    @media (min-width: 1440px) {
        /* width: 350px; */
        bottom: 2.5rem;
        padding: 0.5rem 2rem;
        /* left: 2.5rem; */
    }
    @media (max-width: 768px) {
        /* width: 210px; */
    }
    @media (max-width: 576px) {
        /* left: 0.5rem; */
        bottom: 0.5rem;
        /* width: 150px; */
    }
`;

export default ChristmasAnimation;
