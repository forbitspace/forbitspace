import React from "react";
import styled from "styled-components";

import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Numricals from "./components/Numricals";
import Members from "./components/Members";
import { AuditorData, MemberData } from "./constants";

// import {}

const Index = () => {


    return (
        <WrapperBackground>
            <Container className='container'>
                <Banner />
                <Numricals />
                <Members title={'Active core contributors'} data={MemberData} />
                <Members title={'Auditors'} data={AuditorData} />
                <Footer />
            </Container>
        </WrapperBackground>
    );
};



const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
  background-image: url(./images/background-line-min.png);
  background-size: auto;
`
const Container = styled.div`

`


export default Index;
