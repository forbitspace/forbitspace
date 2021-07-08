import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleFaq>Pools</TitleFaq>
        <p>
          <img src="./images/pools2.png" alt="" />
        </p>
        <TitleSecurity>Introduction</TitleSecurity>
        <p>
          Each forbitswap liquidity pool is a trading venue for a pair of ERC20
          tokens. When a pool contract is created, its balances of each token
          are 0; in order for the pool to begin facilitating trades, someone
          must seed it with an initial deposit of each token. This first
          liquidity provider is the one who sets the initial price of the pool.
          They are incentivized to deposit an equal value of both tokens into
          the pool. To see why, consider the case where the first liquidity
          provider deposits tokens at a ratio different from the current market
          rate. This immediately creates a profitable arbitrage opportunity,
          which is likely to be taken by an external party..
        </p>
        <p>
          When other liquidity providers add to an existing pool, they must
          deposit pair tokens proportional to the current price. If they don’t,
          the liquidity they added is at risk of being arbitraged as well. If
          they believe the current price is not correct, they may arbitrage it
          to the level they desire, and add liquidity at that price.
        </p>
        <TitleSecurity>Pool tokens</TitleSecurity>
        <p>
          <img src="./images/pools3.png" alt="" />
        </p>
        <p>
          Whenever liquidity is deposited into a pool, special tokens known as
          liquidity tokens are minted to the provider’s address, in proportion
          to how much liquidity they contributed to the pool. These tokens are a
          representation of a liquidity provider’s contribution to a pool.
          Whenever a trade occurs, the 0.3% fee which is levied is distributed
          pro-rata to all LPs in the pool at the moment of the trade. To receive
          the underlying liquidity back, plus any fees that were accrued while
          their liquidity was locked, LPs must burn their liquidity tokens..
        </p>
        <p>
          Liquidity providers can also choose to sell, transfer, or otherwise
          use their liquidity tokens in any way they see fit..
        </p>
        <p>Learn more with advanced topics:</p>
        <ReadMore href="/">Understanding Returns</ReadMore>
        <ReadMore href="/">Fees</ReadMore>
        <TitleSecurity>Why pools?</TitleSecurity>
        <p>
          forbitswap is unique in that it doesn’t use an order book to derive
          the price of an asset or to match buyers and sellers of tokens.
          Instead, forbitswap uses what are called Liquidity Pools.
        </p>
        <p>
          Liquidity is typically represented by discrete orders placed by
          individuals onto a centrally operated order book. A participant
          looking to provide liquidity or make markets must actively manage
          their orders, continuously updating them in response to the activity
          of others in the marketplace.
        </p>
        <p>
          While order books are foundational to finance and work great for
          certain usecases, they suffer from a few important limitations that
          are especially magnified when applied to a decentralized or
          blockchain-native setting. Order books require intermediary
          infrastructure to host the orderbook and match orders. This creates
          points of control and adds additional layers of complexity. They also
          require active participation and management from market makers who
          usually use sophsticated infrastructure and algorithms, limiting
          participation to advanced traders. Order books were invented in a
          world with relatively few assets being traded, so it is not surprising
          they aren’t ideal for an ecosystem where anyone can create their own
          token and those tokens usually have low liquidity. In sum, with the
          infrastrucural trade-offs presented by a platform like Ethereum, order
          books are not the native architecture for implementing a liquidity
          protocol on a blockchain.
        </p>
        <p>
          forbitswap focuses on the strengths of Ethereum to reimagine token
          swaps from first principles.
        </p>
        <p>
          A blockchain-native liquidity protocol should take advantage of the
          trusted code execution environment, the autonomous and perpetually
          running virtual machine, and an open, permissionless, and inclusive
          access model that produces an exponentially growing ecosystem of
          virtual assets.
        </p>
        <p>
          It is important to reiterate that a Pool is just a smart contract,
          operated by users calling functions on it. Swapping tokens is calling
          swap on a Pool contract instance, while providing liquidity is calling
          deposit.
        </p>
        <p>
          Just how end-users can interact with the forbitswap protocol through
          the Interface (which in turn interacts with the underlying contracts),
          developers can interact directly with the smart contracts and
          integrate forbitswap functionality into their own applications without
          relying on intermediaries or needing permission.
        </p>
        <TitleSecurity>Developer resources</TitleSecurity>
        <p>
          To see how to pool tokens in a smart contract read Providing
          Liquidity.
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
