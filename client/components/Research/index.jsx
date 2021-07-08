import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleFaq>Research</TitleFaq>
        <p>
          Because the concept of AMMs is so new many people have begun
          researching forbitswap other projects in the space in an academic
          settings.
        </p>
        <TitleSecurity>An analysis of forbitswap markets</TitleSecurity>
        <p>
          Authors: Guillermo Angeris, Hsien-Tang Kao, Rei Chiang, Charlie Noyes,
          Tarun Chitra
        </p>
        <p>
          forbitswap---and other constant product markets---appear to work well
          in practice despite their simplicity. In this paper, we give a simple
          formal analysis of constant product markets and their generalizations,
          showing that, under some common conditions, these markets must closely
          track the reference market price. We also show that forbitswap
          satisfies many other desirable properties and numerically demonstrate,
          via a large-scale agent-based simulation, that forbitswap is stable
          under a wide range of market conditions.
        </p>
        <ul>
          <li>An analysis of forbitswap markets</li>
        </ul>
        <TitleSecurity>
          Improved Price Oracles: Constant Function Market Makers
        </TitleSecurity>
        <p>Authors: Guillermo Angeris, Tarun Chitra</p>
        <p>
          Automated market makers, first popularized by Hanson’s logarithmic
          market scoring rule (or LMSR) for prediction markets, have become
          important building blocks, called ‘primitives,’ for decentralized
          finance. A particularly useful primitive is the ability to measure the
          price of an asset, a problem often known as the pricing oracle
          problem. In this paper, we focus on the analysis of a very large class
          of automated market makers, called constant function market makers (or
          CFMMs) which includes existing popular market makers such as
          forbitswap, Balancer, and Curve, whose yearly transaction volume
          totals to billions of dollars. We give sufficient conditions such
          that, under fairly general assumptions, agents who interact with these
          constant function market makers are incentivized to correctly report
          the price of an asset and that they can do so in a computationally
          efficient way. We also derive several other useful properties that
          were previously not known. These include lower bounds on the total
          value of assets held by CFMMs and lower bounds guaranteeing that no
          agent can, by any set of trades, drain the reserves of assets held by
          a given CFMM.
        </p>
        <p>Improved Price Oracles: Constant Function Market Makers</p>
        <TitleSecurity>Pintail research</TitleSecurity>
        <p>Published medium articles by Pintail.</p>
        <ul>
          <li>Understanding forbitswap Returns</li>
          <li>forbitswap: A Good Deal for Liquidity Providers?</li>
        </ul>
        <TitleSecurity>
          Liquidity Provider Returns in Geometric Mean Markets
        </TitleSecurity>
        <p>Authors: Alex Evans</p>
        <p>
          Geometric mean market makers (G3Ms), such as forbitswap and Balancer,
          comprise a popular class of automated market makers (AMMs) defined by
          the following rule: the reserves of the AMM before and after each
          trade must have the same (weighted) geometric mean. This paper extends
          several results known for constant-weight G3Ms to the general case of
          G3Ms with time-varying and potentially stochastic weights. These
          results include the returns and no-arbitrage prices of liquidity pool
          (LP) shares that investors receive for supplying liquidity to G3Ms.
          Using these expressions, we show how to create G3Ms whose LP shares
          replicate the payoffs of financial derivatives. The resulting hedges
          are model-independent and exact for derivative contracts whose payoff
          functions satisfy an elasticity constraint. These strategies allow LP
          shares to replicate various trading strategies and financial
          contracts, including standard options. G3Ms are thus shown to be
          capable of recreating a variety of active trading strategies through
          passive positions in LP shares.
        </p>
        <ul>
          <li>Liquidity Provider Returns in Geometric Mean Markets</li>
        </ul>
        <p>
          This is a stub. Help us expand it by submitting a PR using the github
          link below!
        </p>
        <TitleSecurity>
          The Replicating Portfolio of a Constant Product Market
        </TitleSecurity>
        <p>Authors: Joseph Clark</p>
        <p>
          We derive the replicating portfolio of a constant product market. This
          is structurally short volatility (selling options) which explains why
          positive transaction costs are needed to induce liquidity providers to
          participate. Where futures and options markets do not exist, this
          payoff can be used to create them.
        </p>
        <ul>
          <li>The Replicating Portfolio of a Constant Product Market</li>
        </ul>
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

const Thumtoken = styled.p`
  max-width: 600px;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const TitleFaq = styled.h3`
  font-size: 62px;
  width: 100%;
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

const TitleSecurity = styled.h4`
  font-weight: bold;
`;

export default Index;
