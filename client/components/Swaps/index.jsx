import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
    return (
        <BoxContent>
            <Container>
                <TitleFaq>Swaps</TitleFaq>
                <p>
                    <img src="./images/swap2.png" alt="swap-2" />
                </p>
                <TitleSecurity>Introduction</TitleSecurity>
                <p>
                    Token swaps in forbitswap are a simple way to trade one
                    ERC-20 token for another.
                </p>
                <p>
                    For end-users, swapping is intuitive: a user picks an input
                    token and an output token. They specify an input amount, and
                    the protocol calculates how much of the output token they’ll
                    receive. They then execute the swap with one click,
                    receiving the output token in their wallet immediately.
                </p>
                <p>
                    In this guide, we’ll look at what happens during a swap at
                    the protocol level in order to gain a deeper understanding
                    of how forbitswap works.
                </p>
                <p>
                    Swaps in forbitswap are different from trades on traditional
                    platforms. forbitswap does not use an order book to
                    represent liquidity or determine prices. forbitswap uses an
                    automated market maker mechanism to provide instant feedback
                    on rates and slippage.
                </p>
                <p>
                    As we learned in Protocol Overview, each pair on forbitswap
                    is actually underpinned by a liquidity pool. Liquidity pools
                    are smart contracts that hold balances of two unique tokens
                    and enforces rules around depositing and withdrawing them.
                </p>
                <p>
                    This rule is the constant product formula. When either token
                    is withdrawn (purchased), a proportional amount of the other
                    must be deposited (sold), in order to maintain the constant.
                </p>
                <TitleSecurity>Anatomy of a swap</TitleSecurity>
                <p>
                    At the most basic level, all swaps in forbitswap V2 happen
                    within a single function, aptly named swap:
                </p>
                <ReadMore herf="/">
                    function swap(uint amount0Out, uint amount1Out, address to,
                    bytes calldata data);
                </ReadMore>
                <TitleSecurity>Receiving tokens</TitleSecurity>
                <p>
                    As is probably clear from the function signature, forbitswap
                    requires swap callers to specify how many output tokens they
                    would like to receive via the amount{(0, 1)}Out parameters,
                    which correspond to the desired amount of token{(0, 1)}.
                </p>
                <TitleSecurity>Sending Tokens</TitleSecurity>
                <p>
                    What’s not as clear is how forbitswap receives tokens as
                    payment for the swap. Typically, smart contracts which need
                    tokens to perform some functionality require callers to
                    first make an approval on the token contract, then call a
                    function that in turn calls transferFrom on the token
                    contract. This is not how V2 pairs accept tokens. Instead,
                    pairs check their token balances at the end of every
                    interaction. Then, at the beginning of the next interaction,
                    current balances are differenced against the stored values
                    to determine the amount of tokens that were sent by the
                    current interactor. See the whitepaper for a justification
                    of why this is the case.
                </p>
                <p>
                    The takeaway is that tokens must be transferred to pairs
                    before swap is called (the one exception to this rule is
                    Flash Swaps). This means that to safely use the swap
                    function, it must be called from another smart contract. The
                    alternative (transferring tokens to the pair and then
                    calling swap) is not safe to do non-atomically because the
                    sent tokens would be vulnerable to arbitrage.
                </p>
                <TitleSecurity>Developer resources</TitleSecurity>
                <ul>
                    <li>
                        To see how to implement token swaps in a smart contract
                        read Trading from a smart contract.
                    </li>
                    <li>
                        To see how to execute a swap from an interface read
                        Trading (SDK).
                    </li>
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
