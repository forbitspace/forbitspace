import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Allocation = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Text>
                    <p className="header">Allocation</p>
                    <p className="title">Token distribution</p>
                </Text>
                <WrapImg>
                    <img
                        src="../images/token-page/token-allocation.png"
                        alt="aggregation-protocols"
                    />
                </WrapImg>
                <Text>
                    <p className="content">
                        • 56,0% to{" "}
                        <span className="forbitspace">forbitspace</span>{" "}
                        Community member.
                    </p>
                    <p className="content">• 10,0% Network growth funds.</p>
                    <p className="content">
                        • 9,0% Early Backers 5-year vesting.
                    </p>
                    <p className="content">• 6,0% Backers 5-year vesting.</p>
                    <p className="content">
                        • 8,0% Core contributors and future employees with a
                        5-year vesting.
                    </p>
                    <p className="content">• 5,0% Strategic Sale IDO, IEO.</p>
                    <p className="content">
                        • 3,0% Small backers 5-year vesting.
                    </p>
                    <p className="content">
                        • 3,0% Advisor with a 5-year vesting.
                    </p>
                    <p className="content">
                        • A perpetual inflation rate of 3% per year will start
                        after 5 years, ensuring continued participation and
                        contribution to the{" "}
                        <span className="forbitspace">forbitspace</span>{" "}
                        protocol and ecosystem at the expense of passive{" "}
                        <span className="forbitspace">FBS</span> holders.
                    </p>
                    <p className="title">Token unlock schedule</p>
                    <p className="content">
                        IEO funding for the liquidity provider protocol was
                        unlocked with a 10% network expansion fund of tokens
                        already accessible. 5,0% Strategic sale private and IDO.
                        The <span className="forbitspace">FBS</span> tokens will
                        be gradually unlocked to distribute community
                        initiatives, liquidity mining, and other programs over a
                        five-year period.
                    </p>
                </Text>
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
        margin: 12px 0;
        font-style: italic;
    }
    .title {
        font-size: 23px;
        margin: 16px 0 6px;
        font-style: italic;
    }
    .content {
        font-size: 22px;
        font-weight: 300;
        text-align: justify;
        padding: 5px 0;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 22px;
        }
        .content {
            text-align: left;
            font-size: 16px;
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
export default Allocation;
