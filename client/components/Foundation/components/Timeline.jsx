import React from "react";
import styled from "styled-components";

const Timeline = () => {
  return (
    <WrapperTimeline>
      <AreaBox>
        <Title>Areas of interest</Title>
        <ContentBox>
          <Text style={{ display: "flex" }}>
            <img
              src="./images/icon-foundation/network-integrations.svg"
              alt=""
            />
            Network
            <br />
            itegrations
          </Text>
          <Text>
            Research and
            <br />
            developement
          </Text>
          <Text>Education</Text>
          <Text>Global adoption</Text>
        </ContentBox>
        <ButtonApply href="/#">Apply for a grant</ButtonApply>
      </AreaBox>

      <ActivityBox>
        <Title>Activity timeline</Title>
        <ContentActivity>
          <Text>May 7, 2021 — July 2, 2021</Text>
          <Text>Liquidity mining program</Text>
          <Text>
            A joint liquidity mining program with
            <br />
            Wirex offering rewards in forbitspace and WXT
          </Text>
        </ContentActivity>
      </ActivityBox>
    </WrapperTimeline>
  );
};

const WrapperTimeline = styled.section`
  text-align: center;
  position: relative;
  padding: 50px 0 0;
`;

const AreaBox = styled.div`
  padding: 50px 0;
`;

const ActivityBox = styled.div`
  padding: 50px 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 14%;
  text-align: left;
  padding: 60px 40px;

  @media (max-width: 576px) {
    padding: 20px 0;
    p {
      width: 100%;
      text-align: center;
      padding: 20px 0;
      justify-content: center;
    }
  }
`;

const ContentActivity = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  text-align: left;
  padding: 60px 0;

  @media (max-width: 768px) {
    p {
      width: 100%;
      text-align: center;
      padding: 40px 0;
    }
  }
  @media (max-width: 415px) {
    padding: 20px 0;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 600;
  @media (max-width: 576px) {
    letter-spacing: 2px;
  }
  @media (max-width: 415px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const ButtonApply = styled.a`
  padding: 5px 30px;
  margin-top: 30px;
  border-radius: 12px;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  text-align: center;
  font-weight: 500;
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  );
  transition: 0.2s;

  :hover {
    color: #fff;
    background-size: 200%;
    background-position: right;
  }
`;

export default Timeline;
