import React from "react";
import styled from "styled-components";

import Banner from './components/Banner';
import Misson from "./components/Mission";
import Grant from "./components/Grant";
import Timeline from "./components/Timeline";
import Footer from "../Footer/index";

const Foundation = () => {
    return (
        <WrapperBackground>
            <Container className='container'>
                <Banner />
                <Misson />
                <Grant />
                <Timeline />
                <Footer />
            </Container>
        </WrapperBackground>
    );
}

const WrapperBackground = styled.section`
    position: relative;
    overflow-x: hidden;
    background-image: url(./images/background-line-min.png);
    background-size: auto;
`

const Container = styled.div`
    
`

export default Foundation;