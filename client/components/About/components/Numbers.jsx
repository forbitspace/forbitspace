import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Numbers = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapContent>
          <BoxContent>
            <Head>1,3M</Head>
            <Text>Total swaps</Text>
          </BoxContent>
          <BoxContent>
            <Head>1,5B</Head>
            <Text>Available liquidity</Text>
          </BoxContent>
          <BoxContent>
            <Head>72+</Head>
            <Text>Liquidity sources</Text>
          </BoxContent>
          <BoxContent>
            <Head>{"<500ms"}</Head>
            <Text>Response time</Text>
          </BoxContent>
        </WrapContent>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 20px;
  @media (max-width: 770px) {
    padding-top: 10px;
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
    flex-direction: column;
  }
`;
const WrapContent = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 25px 60px;
  border-radius: 22px;
  background-image: linear-gradient(
    to right,
    #020a1a 0%,
    #012341 50%,
    #020a1a 100%
  );
  /* border: 2px solid #fff; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  ::after {
    content: "";
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background-image: linear-gradient(
      to right,
      #0168ff 0%,
      rgba(1, 104, 255, 0) 50%,
      #0ff 100%
    );
    border-radius: 22px;
    z-index: -1;

    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
    ::after {
      content: "";
      width: calc(100% + 2px);
      height: calc(100% + 2px);

      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
    }
  }
`;

const BoxContent = styled.div`
  width: 20%;
  padding: 10px 30px;
  text-align: center;
  @media (max-width: 576px) {
    width: 50%;
  }
`;
const Head = styled.div`
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
  }
`;

export default Numbers;
