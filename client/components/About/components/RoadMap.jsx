import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const RoadMap = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          <Title>Road Map</Title>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/about-page/roadmap.png" alt="" />
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
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
    align-items: center;
  }
`;
const WrapImg = styled.div`
  width: 100%;
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    max-width: 900px;
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
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
  @media (max-width: 576px) {
    font-size: 30px;
    letter-spacing: 2px;
  }
`;
export default RoadMap;
