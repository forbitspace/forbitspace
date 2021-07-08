import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <Title>Security</Title>
        <Dreption>Audit & Formal Verification</Dreption>
        <p>
          Between January 8 and April 30, a team of six engineers reviewed and
          formally verified crucial components of the smart contracts for
          forbitswap V2.
        </p>
        <p>
          Their past work includes smart contract development on and formal
          verification of multi-collateral DAI.
        </p>
        <p>The scope of work includes:</p>
        <ul>
          <li>Formal verification of the core smart contracts.</li>
          <li>Code review of core smart contracts</li>
          <li>Numerical error analysis</li>
          <li>
            Code review of periphery smart contracts (during ongoing
            development)
          </li>
        </ul>
        <p>
          The report also has a “Design Comments” section that we highly
          recommend for gaining a deep technical understanding of some one the
          choices made in forbitswap V2.
        </p>
        <ReadMore href="/">Read the report</ReadMore>
        <TitleSecurity>Bug Bounty</TitleSecurity>
        <p>forbitswap has an open and ongoing bug bounty program.</p>
        <TitleSecurity>
          Considerations when building on forbitswap
        </TitleSecurity>
        <p>
          When integrating forbitswap V2 into another on-chain system,
          particular care must be taken to avoid security vulnerabilities,
          avenues for manipulations, and the potential loss of funds.
        </p>
        <p>
          As a preliminary note: smart contract integrations can happen at two
          levels: directly with Pair contracts, or through the Router. Direct
          interactions offer maximal flexibility, but require the most work to
          get right. Mediated interactions offer more limited capabilities, but
          stronger safety guarantees.
        </p>
        <p>
          There are two primary categories of risk associated with forbitswap
          V2. The first involves so-called “static” errors: accidentally sending
          too many tokens to a pair during a swap (or requesting too few tokens
          back), allowing transactions to linger in the mempool long enough for
          the sender’s expectations about prices to no longer be true, etc.
          These errors are typically addressed with fairly straightforward logic
          checks. Performing these checks is the primary reason for the
          existence of routers. Those who interact directly with pairs must
          perform these checks themselves (with the help of the Library).
        </p>
        <p>
          The second risk category is “dynamic”, and involves runtime pricing.
          Because Ethereum transactions occur in an adversarial environment,
          naively written smart contracts can be exploited for profit. For
          example, if a smart contract checks the asset ratio in a forbitswap
          pool at runtime and trades against it, assuming that the ratio
          represents the “fair” or “market” price of these assets, it is highly
          vulnerable to manipulation. A malicious actor could e.g. trivially
          insert transactions before and after the naive transaction (a
          so-called “sandwich” attack) causing the smart contract to trade at a
          radically worse price, profit from this at the trader’s expense, and
          then return the contracts to their original state, all at a low cost.
          (One important caveat is that these types of attacks are mitigated by
          trading in extremely liquid pools, and/or at low values.)
        </p>
        <p>
          The best way to protect against these attacks is to introduce a price
          oracle. The best “oracle” is simply traders’ off-chain observation of
          the prevailing price, which can be passed into the trade as a safety
          check. This strategy is best suited to retail trading venues where
          users initiate trades on their own behalf. However, it is often the
          case that a trusted price observation cannot be obtained (e.g. in
          multi-step, programmatic interactions involving forbitswap). Without a
          price oracle, these interactions are forced to trade at whatever the
          (potentially manipulated) rate on forbitswap is. However, an oracle
          can bound manipulation, and is a sine qua non. Determining the ideal
          oracle for a given setting is out of scope, but for details on the
          forbitswap V2 approach to oracles, see Oracles.
        </p>
      </Container>
    </BoxContent>
  );
};

const BoxContent = styled.section`
  position: relative;
  padding: 50px 0;
  max-width: 700px;
  margin: 0 auto;
`;

const Dreption = styled.p`
  font-size: 40px;
`;

const Title = styled.h3`
  font-size: 62px;
  width: 100%;
  margin-bottom: 10px;
`;

const TitleSecurity = styled.h4`
  font-weight: bold;
`;

const ReadMore = styled.a`
  width: 100%;
  padding: 15px;
  display: block;
  border: solid 1px #009ef5;
  border-radius: 12px;
  text-decoration: none;
  color: #000;
  font-weight: 400;
  margin-bottom: 15px;
  transition: ease-in-out 0.5s all;
  background-size: 250%;
  background: transparent;

  &:hover {
    margin-left: 5px;
    opacity: 0.5;
  }
`;

export default Index;
