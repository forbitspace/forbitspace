import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleToken>Introducing Forbit</TitleToken>
        <DateToken>September 16th, 2021</DateToken>
        <Thumtoken>
          <img src="./images/Me.jpg" alt="thumbnail" />
        </Thumtoken>
        <ListToken>
          <li>Forbit , the forbitswap Protocol token, is live!</li>
          <li>
            Forbit contract address:{" "}
            <a target="_blank" href="#">
              0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984
            </a>
          </li>
          <li>
            60% of the Forbit genesis supply is allocated to forbitswap
            community members, a quarter of which (15% of total supply) has
            already been distributed to past users
          </li>
          <li>
            To start, Forbit is available through four liquidity mining pools:
            Forbit holders may vote to add more pools after an initial 30-day
            governance grace period
          </li>
        </ListToken>
        <QuestToken>
          <b>Community-led Growth</b>
        </QuestToken>
        <p>
          Since its inception, the forbitswap Protocol (”forbitswap”) has served
          as trustless and highly decentralized financial infrastructure.
        </p>
        <p>
          <a target="_blank" href="#">
            Inspired by Ethereum’s vision
          </a>
          , we have long committed to the ideals of permissionless access,
          security, and immutability, all indespensable components for a future
          where anyone in the world can access financial services without fear
          of discrimination or counterparty risk.
        </p>
        <p>
          Now rivaling centralized incumbents on daily volume, forbitswap
          success to date — achieved without involvement of the core development
          team since deployment — indicates that there is considerable demand
          for permissionless financial services. In less than two years, the
          protocol has:
        </p>
        <ListToken>
          <li>
            Supported over $20bn volume ($270k of which was socks!) traded by
            over 250,000 unique addresses across 8,484 unique assets
          </li>
          <li>
            Secured over $1bn liquidity deposited by over 49,000 unique
            liquidity providers (LPs), earning $56m fees in the process
          </li>
          <li>
            Emerged as foundational DeFi infrastructure, with integrations
            across hundreds of interfaces and applications
          </li>
        </ListToken>
        <p>
          Having proven product-market fit for highly decentralized financial
          infrastructure with a platform that has thrived independently,
          <strong>
            forbitswap is now particularly well positioned for community-led
            growth, development, and self-sustainability.
          </strong>{" "}
          The introduction of Forbit (ERC-20) serves this purpose, enabling
          shared community ownership and a vibrant, diverse, and dedicated
          governance system, which will actively guide the protocol towards the
          future.
        </p>
        <p>
          forbitswap has always embraced the tenets of{" "}
          <strong>neutrality and trust minimization</strong> : it is crucial
          that governance is constrained to where it is strictly necessary. With
          this in mind, the forbitswap governance framework is limited to
          contributing to both protocol development and usage as well as
          development of the broader forbitswap ecosystem.
        </p>
        <p>
          In doing so,{" "}
          <strong>
            Forbit officially enshrines forbitswap as publicly-owned and
            self-sustainable infrastructure while continuing to carefully
            protect its indestructible and autonomous qualities.
          </strong>{" "}
        </p>
        <QuestToken>
          <strong>Forbit Allocation</strong>
        </QuestToken>
        <p>
          1 billion Forbit have been minted at genesis and will become
          accessible over the course of 4 years. The initial four year
          allocation is as follows:
        </p>
        <ListToken>
          <li>60.00% to forbitswap community members 600,000,000 Forbit</li>
          <li>
            21.266% to team members and future employees with 4-year vesting
            212,660,000 Forbit
          </li>
          <li>18.044% to investors with 4-year vesting 180,440,000 Forbit</li>
          <li>0.69% to advisors with 4-year vesting 6,900,000 Forbit</li>
        </ListToken>
        <QuestToken>
          A{" "}
          <strong>
            perpetual inflation rate of 2% per year will start after 4 years,{" "}
          </strong>
          ensuring continued participation and contribution to forbitswap at the
          expense of passive Forbit holders.
        </QuestToken>
      </Container>
    </BoxContent>
  );
};

const BoxContent = styled.section`
  position: relative;
  padding: 60px 0;
  margin-bottom: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

const Thumtoken = styled.p`
  max-width: 600px;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const TitleToken = styled.h3`
  font-size: 62px;
  width: 100%;
`;

const DateToken = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #ffffff;
`;

const ListToken = styled.ul`
  padding-left: 0;
`;

const QuestToken = styled.p`
  font-size: 24px;
  color: #000000;
  font-weight: 500;
`;

export default Index;
