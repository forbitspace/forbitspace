import React, { Suspense } from "react";
import styled from "styled-components";
// import Banner from "./components/Banner";
// import HowItWorks from "./components/HowItWorks";
// import Finder from "./components/Finder";
import Footer from "../Footer/index";
import Loading from "../Loading/index";
import Integrate from "./components/Integrate";

const Banner = React.lazy(() => import("./components/Banner"));
const HowItWorks = React.lazy(() => import("./components/HowItWorks"));
const Finder = React.lazy(() => import("./components/Finder"));

const Aggregation = () => {
    return (
        <WrapperBackground>
            <WrapContent>
                <Suspense fallback={<Loading />}>
                    <Banner />
                    <HowItWorks />
                    <Finder />
                    <Integrate />
                </Suspense>
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
