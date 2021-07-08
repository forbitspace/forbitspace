import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleToken>
          Unstoppable liquidity for thousands of users and hundreds of
          applications.
        </TitleToken>
        <GroupPra>
          <p>
            15133 <span>Token Pairs</span>
          </p>
          <p>
            $206M <span>24H Volume</span>
          </p>
          <p>
            $2.9B <span>Total Liquidity</span>
          </p>
          <p>
            ➡️ 100 spam <span>Defi Integrations</span>
          </p>
        </GroupPra>
        <p>
          forbitswap empowers developers, liquidity providers and traders to
          participate in a financial marketplace that is open and accessible to
          all.
        </p>
        <p>
          We are committed to open source software and building on the
          decentralized web.
        </p>
        <ListToken>
          <li>
            <a href="">Forbit Token</a>
          </li>
          <li>
            <a href="">Whitepaper ↗</a>
          </li>
          <li>
            <a href="">Audit ↗</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ListToken>
        <QuestToken>Contact</QuestToken>
        <p>
          To get in touch, please email contact@forbitswap.org <br />
          We encourage anyone facing issues with their wallet, transaction or
          forbitswap related question to join our active community discord.
        </p>
        <ListToken>
          <li>
            <a href="">Discord ↗</a>
          </li>
          <li>
            <a href="">Twitter ↗</a>
          </li>
          <li>
            <a href="">Reddit ↗ </a>
          </li>
        </ListToken>
        <QuestToken>Jobs</QuestToken>
        <p>We are looking for talented people to join our team!</p>
        <p>
          <a target="_blank" href="#">
            Community Manager
          </a>
        </p>
        <p>
          <a target="_blank" href="">
            Senior Front End Engineer
          </a>
        </p>
        <p>
          <a target="_blank" href="">
            Smart Contract Engineer{" "}
          </a>
        </p>
        <p>
          forbitswap welcomes all qualified persons to apply regardless of race,
          religion, gender, gender identity or expression, sexual orientation,
          national origin, genetics, disability, age, or veteran status.
          Compensation will be competitive and commensurate with experience.
          This is a full time role which includes health insurance and other
          benefits.
        </p>
        <QuestToken>Brand Assets</QuestToken>
        <p>
          Download the logo and other brand assets samples{" "}
          <a target="_blank" href="#">
            here.
          </a>
        </p>
      </Container>
    </BoxContent>
  );
};

const BoxContent = styled.section`
  position: relative;
  padding: 40px 0;
  margin: 0 auto;
  max-width: 1000px;
`;

const GroupPra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  p {
    font-size: 26px;
    font-weight: 500;
    text-align: center;

    span {
      display: block;
      font-size: 16px;
      color: #888;
    }
  }
`;

const TitleToken = styled.h3`
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 40px;
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
