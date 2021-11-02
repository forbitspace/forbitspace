import React from "react";
import styled from "styled-components";
import Footer from "../Footer/index";
import Brands from "./components/Brands";

const Branding = () => {
    return (
        <WrapperBackground className="container">
            <WrapContent>
                <Brands />
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

export default Branding;
