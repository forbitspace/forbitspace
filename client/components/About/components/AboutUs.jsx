import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          <Title>About us</Title>
          <SubText></SubText>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/about-page/team-space.png" alt="" />
          </ImgHalf>
        </WrapImg>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 20%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h2`
  font-size: 55px;
  line-height: 1;
  font-weight: 500;
  text-align: right;
  @media (max-width: 576px) {
    font-size: 39px;
    letter-spacing: 2px;
  }
`;
const SubText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  font-family: sans-serif;
  /* max-width: 600px; */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default AboutUs;
