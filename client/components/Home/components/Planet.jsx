import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Planets from "../../Planets/Planet";

const Planet = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapPlanet>
          <Planets />
        </WrapPlanet>
        <Content className="title-banner text-dark text-visi">
          <Title>forbitspace</Title>
          <Text>Aggregation Protocol</Text>
          <SubText>
            The forbitspace is an aggregator protocols allows traders to benefit
            from a large variety of financial tools in a single
            interface.forbitspace the ability to split a single transaction into
            multiple orders across various DEX’s, also route orders through
            multiple assets if determined to provide a user the most liquidity.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */
  @media (min-width: 800px) {
    /* padding: 25px 0; */
    margin: -50px 0;
  }
  @media (min-width: 1440px) {
    margin: 150px 0;
  }
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapPlanet = styled.div`
  width: 50%;
  transform: scale(1);
  @media (min-width: 2100px) {
    transform: scale(1.2);
  }
  @media (max-width: 1440px) {
    transform: scale(0.75);
  }
  @media (max-width: 1024px) {
    transform: scale(0.55);
  }
  @media (max-width: 786px) {
    transform: scale(0.75);
  }
  @media (max-width: 576px) {
    transform: scale(0.65);
    margin: -170px 0;
  }
  @media (max-width: 400px) {
    transform: scale(0.5);
    margin: -220px 0;
  }
`;
const Content = styled.div`
  margin-left: 80px;
  width: 50%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;

export default Planet;
