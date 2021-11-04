import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
// import Pramaster from "./components/Pramaster";
// import Growing from "./components/Growing";
// import Suite from "./components/Suite";
// import Superpowers from "./components/Superpowers";
import Banner from "./components/Banner";
// import Community from "./components/Community";
// import FBTCToken from "./components/FBTCToken";
// import Ecosystem from "./components/Ecosystem";
import Footer from "../Footer";
// import SpaceNFTs from "./components/SpaceNFTs";
import Planet from "./components/Planet";
import Liquidity from "./components/Liquidity";
import LimitOrder from "./components/LimitOrder";
import Derivative from "./components/Derivative";
import SelfCustody from "./components/SelfCustody";
import System from "./components/System";
import Partners from "./components/Partners";
import Network from "./components/Network";

const Index = () => {
    return (
        <React.Fragment>
            <Banner />
            <WrapperBackground>
                <Container>
                    <Network />
                    <Planet />
                    <Liquidity />
                    <LimitOrder />
                    <Derivative />
                    <SelfCustody />
                    <Partners />
                    <System />
                </Container>
                <Footer />
            </WrapperBackground>
        </React.Fragment>
    );
};
const WrapperBackground = styled.div`
    position: relative;
    font-family: "helvetica neue", "Roboto", sans-serif;
    /* background-image: url("../images/background-line-min.jpg"); */
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
