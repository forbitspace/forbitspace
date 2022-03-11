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
import FlybyBanner from "../FlybyBanner/FlybyBanner";
// import ChristmasAnimation from "../ChristmasAnimation";

const Index = () => {
    return (
        <React.Fragment>
            <FlybyBanner />
            <LazyLoad height={250}>
                <Banner />
            </LazyLoad>
            <LazyLoad height={250}>
                <Network />
            </LazyLoad>
            <WrapperBackground>
                <Container>
                    <LazyLoad height={250}>
                        <Planet />
                    </LazyLoad>
                    {/* <LazyLoad height={250}>
                        <ChristmasAnimation />
                    </LazyLoad> */}
                    <LazyLoad height={250}>
                        <Liquidity />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <LimitOrder />
                    </LazyLoad>
                    <LazyLoad height={250}>
                        <Derivative />
                    </LazyLoad>
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
    @media (max-width: 576px) {
        overflow-x: hidden;
    }
`;
export default Index;
