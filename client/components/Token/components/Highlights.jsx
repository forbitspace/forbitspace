import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Highlights = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Text>
                    <p className="header">Key Highlights</p>
                    <p className="header dex">
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator
                    </p>
                    <p className="title">• Aggregation Protocol</p>
                    <p className="content">
                        The <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator is an interoperability protocol that
                        unites decentralized applications across disparate
                        blockchains, simultaneously uniting liquidity across
                        chains and making it possible to transact in, out, and
                        across disparate networks with ease.
                        <br />
                        <br />
                    </p>
                    <p className="title">• Liquidity Protocol</p>
                    <p className="content">
                        The <span className="forbitspace">forbitspace</span>{" "}
                        decentralized protocol empowers traders to provide
                        liquidity to pools and collect extra rewards in{" "}
                        <span className="forbitspace">FBS</span> tokens for
                        participating in liquidity mining programs.
                        <br />
                        <br />
                    </p>
                    <p className="title">• Limit Order Protocol</p>
                    <p className="content">
                        A limit order places a specific price that a trader
                        wants to buy or sell at and is only executed if the
                        market hits that price. <br />
                        Whereas market orders are executed immediately, limit
                        orders are executed at a predefined price, which is
                        generally better than the current market price.
                        <br />
                        <br />
                    </p>
                    <p className="title">• Derivative protocol</p>
                    <p className="content">
                        <span className="forbitspace">forbitspace</span>{" "}
                        derivatives protocol is used to create custom assets by
                        using forward-looking features of locking the price in
                        and the ability to either buy or sell an asset.{" "}
                        <span className="forbitspace">forbitspace</span> uses a
                        contract that represents an asset bought or sold at a
                        future date for a future price, synthetics are the very
                        underlying asset representative of other assets.
                        <br />
                        <br />
                    </p>
                    <p className="title">• Self-custody</p>
                    <p className="content">
                        Our app is built on decentralized crypto for customers
                        to do self-custody of their crypto in the main{" "}
                        <span className="forbitspace">forbitspace</span> app.
                        {/* - Our vision:{" "}
                        <span className="forbitspace">forbitspace</span> sees
                        crypto quickly mature to the trading of thousands of new
                        assets and the adoption of new use cases, including
                        DeFi, non-fungible tokens (NFT), smart contracts,
                        decentralized autonomous organizations (DAOs), and more.
                        Our app is built on decentralized crypto for customers
                        to do self-custody of their crypto in the main{" "}
                        <span className="forbitspace">forbitspace</span> app. */}
                    </p>

                    <p className="title">• Space DAO</p>
                    <p className="content">
                        <span className="forbitspace">forbitspace</span>{" "}
                        protocols integrate decentralized autonomous
                        organizations (DAOs) into protocols to facilitate
                        decentralized blockchain governance. Space DAO utilizes
                        blockchain-based tokens to represent voting rights. As a
                        result, only token holders can participate in network
                        governance. These smart contracts can greatly reduce —
                        or even eliminate — the need for intermediaries that
                        might compromise decentralized decision-making.
                    </p>
                </Text>
                <WrapImg>
                    <img
                        src="../images/token-page/ecosystem.png"
                        alt="token-ecosystem"
                    />
                </WrapImg>
                <Text>
                    <p className="content">
                        <span className="forbitspace">forbitswap</span> is a
                        capital-efficient AMM that combines the liquidity on
                        Ethereum blockchain and BNB Chain with the scalability
                        of a Layer 2 platform deployed on the Polygon Network,
                        Avalanche, Arbitrum, and will soon be functional on
                        other blockchains including Solana and more.
                        <br /> <br />
                        <span className="forbitspace">forbitswap</span> will
                        also work to provide a comprehensive platform for social
                        tokens and NFTs.
                    </p>
                    <p className="sub content">
                        <img src="../images/icons/star.svg" alt="star icon" />{" "}
                        Swap
                    </p>
                    <p className="sub content">
                        <img src="../images/icons/star.svg" alt="star icon" />{" "}
                        Staking
                    </p>
                    <p className="sub content">
                        <img src="../images/icons/star.svg" alt="star icon" />{" "}
                        Liquidity mining
                    </p>
                    <p className="sub content">
                        <img src="../images/icons/star.svg" alt="star icon" />{" "}
                        NFTs space marketplace
                    </p>
                    <p className="sub content">
                        <img src="../images/icons/star.svg" alt="star icon" />{" "}
                        flyby IDO Launchpad — a multi-chain platform
                    </p>
                </Text>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;
const Text = styled.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
    }
    .title {
        font-size: 23px;
        margin: 2rem 0 1rem;
    }
    .dex {
        font-size: 23px;
        margin-bottom: 1rem;
        font-weight: 500;
        font-style: italic;
    }
    .content {
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
        line-height: 1.2;
    }
    .sub {
        padding-left: 1rem;
        font-size: 20px;
        color: white;
        display: flex;
        align-items: center;
        img {
            width: 10px;
            margin-right: 6px;
        }
    }
    @media (max-width: 576px) {
        .key {
            font-size: 24px;
            margin: 1rem 0;
        }
        .header {
            font-size: 18px;
        }
        .dex {
            font-size: 20px;
        }
        .title {
            font-size: 20px;
            margin: 1rem 0;
        }
        .content {
            text-align: left;
            font-size: 14px;
            line-height: 1.5;
        }
    }
`;
const WrapImg = styled.div`
    width: 100%;
    img {
        width: 100%;
        margin: auto;
    }
`;
export default Highlights;
