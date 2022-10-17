import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import Footer from "../Footer";
import Introduction from "./components/Introduction";
import Highlights from "./components/Highlights";
import Metrics from "./components/Metrics";
import Allocation from "./components/Allocation";
import Schedules from "./components/Schedules";
import RoadMap from "./components/Roadmap";

const Index = () => {
    return (
        <WrapperBackground>
            <WrapContent>
                <Banner />
                <Introduction />
                <Highlights />
                <Metrics />
                <Allocation />
                <Schedules />
                <RoadMap />
            </WrapContent>
            <Footer />
        </WrapperBackground>
    );
};
const WrapperBackground = styled.div`
    position: relative;
    position: relative;
    overflow-x: hidden;
    background-size: auto;

    .forbitspace {
        font-style: italic;
        font-weight: 900 !important;
    }

    @media (max-width: 576px) {
        overflow-x: hidden;
    }
`;

const WrapContent = styled.div`
    min-height: calc(100vh - 330px);
`;

export default Index;
