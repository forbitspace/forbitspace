import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  return (
    <BoxSection>
      {/* <WrapContainer>
      </WrapContainer> */}
      <WrapContainer>
        <Content className="title-banner text-dark text-visi">
          <WrapText>
            <Title>Governance</Title>
            <SubText>
              <span>Space Dao Governance</span> consists of the proposition and
              decision-making process for the different risk parameter changes,
              improvements and incentives that constitute the policies, and
              upgrades to governance itself. All future decisions governing the
              protocol will be enacted through this procedure. The FBS token
              empowers holders to collectively act as governors of the protocol
              by enabling them with the capability to vote and propose.
            </SubText>
          </WrapText>
        </Content>
        <WrapImg>
          <ImgHalf>
            <img src="../images/home-page/holder.png" alt="" />
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
  flex-direction: column;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 576px) {
  }
`;
const WrapImg = styled.div`
  width: 50%;
  transform: rotate(-5deg);
  @media (max-width: 768px) {
    width: 100%;
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
  width: 100%;
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
const Title = styled.h2`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const WrapText = styled.div`
  width: 55%;
  max-width: 900px;
`;

const SubText = styled.p`
  font-size: 26px;
  font-weight: 300;
  /* max-width: 600px; */
  font-family: sans-serif;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;
