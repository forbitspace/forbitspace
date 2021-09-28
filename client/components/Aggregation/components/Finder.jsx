import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Finder = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          {/* <Text>How it works</Text> */}
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
            <img src="../images/home-page/pafider.png" alt="" />
          </ImgHalf>
        </WrapImg>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  margin: 10rem 0; //temporary margin
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
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 576px) {
  }
`;
const WrapImg = styled.div`
  width: 50%;
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
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: right;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Finder;
