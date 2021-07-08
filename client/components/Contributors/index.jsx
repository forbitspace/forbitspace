import React from "react";
import styled from "styled-components";

import Footer from "../Footer";
import Banner from "./components/Banner";
import Numricals from "./components/Numricals";
import Members from "./components/Members";

const Index = () => {


    return (
        <WrapperBackground>
            <Container className='container'>
                <Banner />
                <Numricals />
                <Members />
                <Footer />
            </Container>
        </WrapperBackground>
    );
};



const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
`
const Container = styled.div`

`


export default Index;
