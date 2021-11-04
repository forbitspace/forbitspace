import React, { Suspense } from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import Finder from "./components/Finder";
import Footer from "../Footer/index";
import Integrate from "./components/Integrate";
import LazyLoad from "react-lazyload";

const Aggregation = () => {
    return (
        <WrapperBackground>
            <WrapContent>
                <LazyLoad height={200}>
                    <Banner />
                </LazyLoad>
                <LazyLoad height={200}>
                    <HowItWorks />
                </LazyLoad>
                <LazyLoad height={200}>
                    <Finder />
                </LazyLoad>
                <LazyLoad height={200}>
                    <Integrate />
                </LazyLoad>
            </WrapContent>
            <Footer />
        </WrapperBackground>
    );
};

const WrapperBackground = styled.section`
    position: relative;
    overflow-x: hidden;
    background-size: auto;
`;

const WrapContent = styled.div`
    min-height: calc(100vh - 330px);
`;
export default Aggregation;
