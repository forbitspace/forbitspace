import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const HowItWorks = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          <Text>How it works</Text>
          {/* <WrapText>
            <SubText>
              The <span>forbitspace</span> is an aggregator protocol that allows
              traders to benefit from a large variety of financial tools in a
              single interface.
            </SubText>
          </WrapText> */}
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/howitwork.png" alt="" />
          </ImgHalf>
        </WrapImg>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
  }
`;
const WrapImg = styled.div`
  width: 60%;
  /* transform: rotate(-5deg); */
  @media (max-width: 768px) {
    width: 80%;
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
  /* margin-left: 80px; */
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  /* font-style: italic; */
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
export default HowItWorks;
