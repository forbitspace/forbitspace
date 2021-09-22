import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Implementation from "./components/Implementation";
// import Footer from "../Footer/index";

const Order = () => {
  return (
    <WrapperBackground>
      <Container className="container">
        <Banner />
        <Feature />
        <Implementation />
        {/* <Footer /> */}
      </Container>
    </WrapperBackground>
  );
};

const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
  // background-image: url(./images/background-line-min.png);
  background-size: auto;
`;

const Container = styled.div``;

export default Order;
