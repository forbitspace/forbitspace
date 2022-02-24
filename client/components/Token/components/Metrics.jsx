import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Metrics = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Text>
                    <p className="header">Key Metrics</p>
                    <p className="content">
                        • Token type: Utility Governance and Multi-chain.
                        <br />
                    </p>
                    <p className="content">
                        • Max Supply: 9,999,999,999{" "}
                        <span className="forbitspace">FBS</span>.
                        <br />
                    </p>
                </Text>
                <Text className="contract">
                    <p className="header">Contract:</p>
                    <p className="title">• ERC20:</p>
                    <p className="content link">
                        <a
                            href="https://etherscan.io/token/0xa953736904e23fafb42e353d4122420899999999"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://etherscan.io/token/0xa953736904e23fafb42e353d4122420899999999
                        </a>
                        <br />
                    </p>
                    <p className="title">• Bep20:</p>
                    <p className="content link">
                        <a
                            href="https://bscscan.com/token/0xA953736904e23Fafb42e353D4122420899999999"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://bscscan.com/token/0xA953736904e23Fafb42e353D4122420899999999
                        </a>
                        <br />
                    </p>
                    <p className="title">• SLP:</p>
                    <p className="content link">
                        <a
                            href="https://solanabeach.io/address/Hwv5ecNoHv5kNnQ2ungWN6PSq1pMq89McysSQtiELTTH"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://solanabeach.io/address/Hwv5ecNoHv5kNnQ2ungWN6PSq1pMq89McysSQtiELTTH
                        </a>
                        <br />
                    </p>
                    <p className="title">• Polygon:</p>
                    <p className="content link">
                        <a
                            href="https://polygonscan.com/token/0xA953736904e23Fafb42e353D4122420899999999"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://polygonscan.com/token/0xA953736904e23Fafb42e353D4122420899999999
                        </a>
                        <br />
                    </p>
                    <p className="title">• Avalanche:</p>
                    <p className="content link">
                        <a
                            href="https://snowtrace.io/address/0xA953736904e23Fafb42e353D4122420899999999"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://snowtrace.io/address/0xA953736904e23Fafb42e353D4122420899999999
                        </a>
                        <br />
                    </p>
                </Text>
                <WrapImg>
                    <img src="../images/token-page/fbs-ticker.png" alt="" />
                </WrapImg>
                <Text></Text>
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
    &.contract {
        overflow: auto;
        padding: 10px 0;
    }
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
    }
    .title {
        font-size: 23px;
        margin: 6px 0;
    }
    .dex {
        font-weight: 500;
        font-style: italic;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
    }
    .title {
        font-size: 20px;
    }
    .link {
        padding-left: 1rem;
        font-size: 22px;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content,
        .link {
            text-align: left;
            font-size: 16px;
        }
    }
`;
const WrapImg = styled.div`
    width: 100%;
    margin: 3rem 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        /* max-width: 920px; */
        border-radius: 16px;
        /* margin: auto; */
    }
`;
export default Metrics;
