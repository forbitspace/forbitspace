import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const HowItWorks = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          {/* <Title>forbitspace</Title> */}
          <Text>How Do DEX Aggregators Work</Text>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/howitwork-min.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content>
          <SubText>
            <span>forbitspace</span>'s aggregators source liquidity from
            different DEXs and thus offer users better token swap rates than
            they could get on any single DEX. DEX aggregators have the ability
            to optimize slippage, swap fees and token prices which, when done
            right, offer a better rate for users.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 0vh 0 0;
  @media (max-width: 770px) {
    padding-top: 40px;
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
  /* width: 70%; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
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
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
  }
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export default HowItWorks;
