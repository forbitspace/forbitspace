import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import Banner from "./components/Banner";
import Footer from "../Footer";
import Planet from "./components/Planet";
import Liquidity from "./components/Liquidity";
import LimitOrder from "./components/LimitOrder";
import Derivative from "./components/Derivative";
import SelfCustody from "./components/SelfCustody";
import System from "./components/System";
import Partners from "./components/Partners";
import Network from "./components/Network";
import LazyLoad from "react-lazyload";

const Index = () => {
    return (
        <React.Fragment>
            <LazyLoad height={250}>
                <Banner />
            </LazyLoad>
            <WrapperBackground>
                <Container>
                    <LazyLoad height={250}>
                        <Network />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <Planet />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <Liquidity />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <LimitOrder />
                    </LazyLoad>
                    <LazyLoad height={250}></LazyLoad>
                    <Derivative />
                    <LazyLoad height={250}>
                        <SelfCustody />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <Partners />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <System />
                    </LazyLoad>
                </Container>
                <Footer />
            </WrapperBackground>
        </React.Fragment>
    );
};
const WrapperBackground = styled.div`
    position: relative;
    font-family: "helvetica neue", "Roboto", sans-serif;
    @media (max-width: 576px) {
        overflow-x: hidden;
    }
`;

const BackgroundImg = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: auto;
    height: 100vh;
    opacity: 0.15;
    z-index: -1;
    @media (max-width: 576px) {
        position: fixed;
    }
`;

export default Index;
