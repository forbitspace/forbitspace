import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleFaq>FAQ</TitleFaq>
        <QuestToken>
          <strong>What is ?</strong>
        </QuestToken>
        <p>
          forbitswap is a protocol for exchanging ERC-20 tokens on Ethereum. It
          eliminates trusted intermediaries and unnecessary forms of rent
          extraction, allowing for fast, efficient trading. Where it makes
          tradeoffs decentralization, censorship resistance, and security are
          prioritized. forbitswap is open-source software licensed under GPL
        </p>
        <p>
          If you want to understand more about forbitswap check out the{" "}
          <a target="_blank" href="#">
            docs.
          </a>
        </p>
        <QuestToken>
          <strong>How does forbitswap work?</strong>
        </QuestToken>
        <p>
          forbitswap is an automated liquidity protocol. In practical terms this
          means there are template smart contracts that define a standard way to
          make liquidity pools and corresponding markets that are compatible
          with eachother. There is no orderbook, no centralized party and no
          central facilitator of trade. Each pool is defined by a smart contract
          that includes a few functions to enable swapping tokens, adding
          liquidity and more. At its core each pool uses the function x*y=k to
          maintain a curve along which trades can happen.
        </p>
        <p>
          For a more in depth description. Check out the How forbitswap works
          from the documentation.
        </p>
        <QuestToken>
          <strong>How are prices determined?</strong>
        </QuestToken>
        <p>
          Prices are determined by the amount of each token in a pool. The smart
          contract maintains a constant using the following function: x*y=k. In
          this case x = token0, y = token1, k = constant. For each trade a
          certain amount of tokens are removed from the pool for an amount of
          the other token. To maintain k, the balances held by the smart
          contract are adjusted during the execution of the trade, therefore
          changing the price.
        </p>
        <QuestToken>
          <strong>Why is my swap failing or stuck?</strong>
        </QuestToken>
        <p>
          You might be trying to swap a fee on transfer or deflationary token.
          If so, you have to increase your allowed slippage to account for the
          fee taken during the swap. Click on the gear for settings and adjust
          Slippage tolerance accordingly.
        </p>
        <p>
          Otherwise if your transaction is taking forever or stuck pending the
          gas included might be too low and the transaction will not be
          processed. You probably need to speed up or cancel the transaction in
          you wallet.
        </p>
        <ListToken>
          <li>
            Fix stuck transactions in MetaMask:{" "}
            <a target="_blank" href="#">
              https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction
            </a>
          </li>
          <li>
            Fix stuck transactions in trust wallet:{" "}
            <a target="_blank" href="#">
              https://www.publish0x.com/the-crypt/quick-guide-to-fixing-stuck-ethereum-transactions-xgdvgkv
            </a>
          </li>
        </ListToken>
        <QuestToken>
          <strong>Why is my approve stuck?</strong>
        </QuestToken>
        <p>
          If you speed up an approve, forbitswap can’t detect the new
          transaction. Open your wallet in the interface and click “clear all”
          then try refreshing the page.
        </p>
        <QuestToken>
          <strong>How do I find X token?</strong>
        </QuestToken>
        <p>
          If you can’t find a token in the default list, find the token address
          using etherscan and paste that address into the search field.
        </p>
        <QuestToken>
          <strong>How do I add a logo for a token?</strong>
        </QuestToken>
        <p>
          forbitswap pulls from the trustwallet asset repository on github.{" "}
          <a target="_blank" href="#">
            https://github.com/trustwallet/assets
          </a>{" "}
          Add your token icon to that repo and it will appear on the frontend
          and on info.
        </p>
        <QuestToken>
          <strong>How can I add a token to forbitswap ?</strong>
        </QuestToken>
        <p>
          forbitswap is compatible with any ERC-20 token in the ethereum
          ecosystem. If you want your project to be searchable in their
          interface you should seek to be added to a reputable token list or
          share a link to your token using query parameters. Once loaded via
          link, the token will be added to their interface.
        </p>
        <p>Another option is to open a request using github issues.</p>
        <p>
          The forbitswap team makes no guarantees or provides any timeline. Nor
          will the team ever charge or request funds. We’ve added many UX
          features to make it easier to share a new token with communities like
          local storage support and custom linking. Please make use of them.
        </p>
        <QuestToken>
          <strong>Why does my transaction cost X?</strong>
        </QuestToken>
        <p>
          Ethereum requires gas to execute each transaction. You can also check
          ETH gas station for the current prices required to complete
          transactions. Creating a forbitswap pool is a slightly costlier
          transaction because you are executing a more complex smart contract.
          Read more about how gas works in ethereum.
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
  @media (max-width: 576px) {
    padding: 0;
  }
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

const ListToken = styled.ul`
  padding-left: 0;
`;
const QuestToken = styled.p`
  font-size: 24px;
  color: #000000;
  font-weight: 500;
`;

export default Index;
