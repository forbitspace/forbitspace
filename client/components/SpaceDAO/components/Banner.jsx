import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/astronaut.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Text>Governance</Text>
          <SubText>
            <span>Space Dao Governance</span> consists of the proposition and
            decision-making process for the different risk parameter changes,
            improvements and incentives that constitute the policies, and
            upgrades to governance itself.
            <br />
            <br />
            All future decisions governing the protocol will be enacted through
            this procedure. The <span className="fbs">FBS</span> token empowers
            holders to collectively act as governors of the protocol by enabling
            them with the capability to vote and propose.
          </SubText>
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 10vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
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
  padding: 0 20px;
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
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
  /* max-width: 600px; */
  font-family: sans-serif;
  text-align: right;
  span {
    font-style: italic;
    font-weight: 900;
  }
  .fbs {
    font-style: normal;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export default Banner;
