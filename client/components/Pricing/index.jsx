import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleFaq>Pricing</TitleFaq>
        <TitleSecurity>How are prices determined?</TitleSecurity>
        <p>
          As we learned in Protocol Overview, each pair on forbitswap is
          actually underpinned by a liquidity pool. Liquidity pools are smart
          contracts that hold balances of two unique tokens and enforces rules
          around depositing and withdrawing them. The primary rule is the
          constant product formula. When a token is withdrawn (bought), a
          proportional amount must be deposited (sold) to maintain the constant.
          The ratio of tokens in the pool, in combination with the constant
          product formula, ultimately determine the price that a swap executes
          at.
        </p>
        <h4>How forbitswap handles prices</h4>
        <p>
          In forbitswap V1, trades are always executed at the “best possible”
          price, calcuated at execution time. Somewhat confusingly, this
          calculation is actually accomplished with one of two different
          formulas, depending on whether the trade specifies an exact input or
          output amount. Functionally, the difference between these two
          functions is miniscule, but the very existence of a difference
          increases conceptual complexity. Initial attempts to support both
          functions in V2 proved inelegant, and the decision was made to not
          provide any pricing functions in the core. Instead, pairs directly
          check whether the invariant was satisfied (accounting for fees) after
          every trade. This means that rather than relying on a pricing function
          to also enforce the invariant, V2 pairs simply and transparently
          ensure their own safety, a nice separation of concerns. One downstream
          benefit is that V2 pairs will more naturally support other flavors of
          trades which may emerge, (e.g. trading to a specific price at
          execution time).
        </p>
        <p>
          At a high level, in forbitswap V2, trades must be priced in the
          periphery. The good news is that the library provides a variety of
          functions designed to make this quite simple, and all swapping
          functions in the router are designed with this in mind.
        </p>
        <h4>Pricing Trades</h4>
        <p>
          When swapping tokens on forbitswap, it’s common to want to receive as
          many output tokens as possible for an exact input amount, or to pay as
          few input tokens as possible for an exact output amount. In order to
          calculate these amounts, a contract must look up the current reserves
          of a pair, in order to understand what the current price is. However,
          it is not safe to perform this lookup and rely on the results without
          access to an external price.
        </p>
        <p>
          Say a smart contract naively wants to send 10 DAI to the DAI/WETH pair
          and receive as much WETH as it can get, given the current reserve
          ratio. If, when called, the naive smart contract simply looks up the
          current price and executes the trade, it is vulnerable to
          front-running and will likely suffer an economic loss. To see why,
          consider a malicious actor who sees this transaction before it is
          confirmed. They could execute a swap which dramatically changes the
          DAI/WETH price immediately before the naive swap goes through, wait
          for the naive swap to execute at a bad rate, and then swap to change
          the price back to what it was before the naive swap. This attack is
          fairly cheap and low-risk, and can typically be performed for a
          profit.
        </p>
        <p>
          To prevent these types of attacks, it’s vital to submit swaps that
          have access to knowledge about the “fair” price their swap should
          execute at. In other words, swaps need access to an oracle, to be sure
          that the best execution they can get from forbitswap is close enough
          to what the oracle considers the “true” price. While this may sound
          complicated, the oracle can be as simple as an off-chain observation
          of the current market price of a pair. Because of arbitrage, it’s
          typically the case that the ratio of the intra-block reserves of a
          pair is close to the “true” market price. So, if a user submits a
          trade with this knowledge in mind, they can ensure that the losses due
          to front-running are tightly bounded. This is how, for example, the
          forbitswap frontend ensure trade safety. It calculates the optimal
          input/output amounts given observed intra-block prices, and uses the
          router to perform the swap, which guarantees the swap will execute at
          a rate no less that x% worse than the observed intra-block rate, where
          x is a user-specified slippage tolerance (0.5% by default).
        </p>
        <p>
          There are, of course, other options for oracles, including native
          forbitswap V2 oracles.
        </p>
        <h4>Exact Input</h4>
        <p>
          If you’d like to send an exact amount of input tokens in exchange for
          as many output tokens as possible, you’ll want to use getAmountsOut.
          The equivalent SDK function is getOutputAmount, or minimumAmountOut
          for slippage calculations.
        </p>
        <h4>Exact Output</h4>
        <p>
          If you’d like to receive an exact amount of output tokens for as few
          input tokens as possible, you’ll want to use getAmountsIn. The
          equivalent SDK function is getInputAmount, or maximumAmountIn for
          slippage calculations.
        </p>
        <h4>Swap to Price</h4>
        <p>For this more advanced use case, see ExampleSwapToPrice.sol.</p>
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
