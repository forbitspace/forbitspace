import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import Footer from "../Footer/index";

const Aggregation = () => {
    return (
        <WrapperBackground>
            <WrapContent>
                <Banner />
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
