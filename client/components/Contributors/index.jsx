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
  MemberData_2,
} from "./constants";
import Leaders from "./components/Leader";

const Index = () => {
  return (
    <WrapperBackground>
      <Container className="container">
        <Banner />
        <Leaders />
        <Members title={""} data={MemberData} />
        <Members title={""} data={MemberData_1} />
        <Members title={""} data={MemberData_2} />
        <Members
          title={"Advisors"}
          data={AdvisorData}
          isAdvisor={true}
          gap={"10%"}
          imgCenter={true}
        />
        <FooterContributor />
        <Footer />
      </Container>
      {/* <BackgroundImg src="../images/background-line-min.png"></BackgroundImg> */}
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

// const BackgroundImg = styled.img`
//   position: absolute;
//   top: -100vh;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: calc(100% + 100vh);
//   opacity: 0.3;
//   z-index: -1;
//   @media (max-width: 576px) {
//     position: fixed;
//   }
// `;
// const BackgroundImg = styled.img`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   /* height: calc(100% + 100vh); */
//   min-height: 100vh;
//   opacity: 0.6;
//   z-index: -1;
//   @media (max-width: 576px) {
//     position: fixed;
//   }
// `;
export default Index;
