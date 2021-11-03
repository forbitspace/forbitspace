import React from "react";
import styled from "styled-components";
import Footer from "../Footer/index";
import ContactUs from "./components/Contact";

const Contact = () => {
    return (
        <WrapperBackground className="container">
            <WrapContent>
                <ContactUs />
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

export default Contact;
