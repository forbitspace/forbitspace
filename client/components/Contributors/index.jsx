import React from "react";
import styled from "styled-components";

import FooterContributor from "./components/Footer";
import Banner from "./components/Banner";
import Members from "./components/Members";
import Footer from "../Footer";
import {
  MemberData,
  MemberData_1,
  AdvisorData,
} from "./constants";
import Leaders from "./components/Leader";
import Advisors from "./components/Advisors";

const Index = () => {
  return (
    <WrapperBackground>
      <Container className="container">
        <Banner />
        <Leaders />
        <Members title={""} data={MemberData} />
        <Members title={""} data={MemberData_1} />
        <Advisors data={AdvisorData}/>
        <FooterContributor />
        <Footer />
      </Container>

    </WrapperBackground>
  );
};

const WrapperBackground = styled.section`
  position: relative;
  overflow-x: hidden;
  background-size: auto;
  font-family: Montserrat, sans-serif;
`;
const Container = styled.div``;
export default Index;
