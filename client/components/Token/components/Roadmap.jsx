import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const RoadMap = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Text>
                    <p className="content">
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator successfully solves one of the
                        disjointed liquidity that is inherent in decentralized
                        exchanges’ biggest issues — liquidity — by sourcing it
                        through the aggregation of many leading DEXs – at the
                        same time.
                    </p>
                    <p className="content">
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator uses the power of blockchain to bring a
                        multichain ecosystem to explore the possibilities of
                        protocols working together to create scalability and
                        efficiency.
                    </p>
                    <p className="content">
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator connects different blockchains to give
                        users access to hundreds of new assets, a secure,
                        easy-to-use decentralized exchange, and the blockchain
                        industry's fastest smart contracts platform, which is
                        blazingly fast, low-cost, and eco-friendly.
                    </p>
                    <p className="header">Our Roadmap</p>
                </Text>
                <WrapImg>
                    <img
                        src="../images/about-page/roadmap.png"
                        alt="road-map"
                    />
                </WrapImg>
                <WrapFooter>
                    <a
                        href="https://forbitspace.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Website
                    </a>
                    <a
                        href="https://docs.forbitspace.com/english"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Docs
                    </a>
                    <a
                        href="https://twitter.com/forbitspace"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://t.me/forbitspace"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Telegram
                    </a>
                    <a
                        // href="https://discord.com/invite/forbitspace"
                        href="https://discord.com/invite/forbitspace"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Discord
                    </a>
                    <a
                        href="https://help.forbitspace.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Tutorial
                    </a>
                    <a
                        href="https://www.reddit.com/r/forbitspace/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Reddit
                    </a>
                    <a
                        href="https://www.facebook.com/forbitspace"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://github.com/forbitspace"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </WrapFooter>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    font-family: sans-serif;
    /* min-height: 88vh; */
    padding: 4vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)``;
const Text = styled.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 2rem 0 1rem;
        /* font-style: italic; */
    }
    .title {
        font-size: 23px;
        margin: 6px 0;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
        padding: 15px 0;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content {
            text-align: left;
            font-size: 16px;
            padding: 12px 0;
        }
    }
`;
const WrapImg = styled.div`
    width: 100%;
    /* max-width: 720px; */
    img {
        width: 100%;
        margin: auto;
    }
`;
const WrapFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2rem 0;
    a {
        font-size: 20px;
        font-style: italic;
        color: #0168ff;
        max-width: 150px;
        margin-right: 20px;
    }
    @media (max-width: 576px) {
        a {
            font-size: 14px;
            margin-right: 12px;
        }
    }
`;
export default RoadMap;
