import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Schedules = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Text>
                    <p className="header">FBS Token Release schedule</p>
                </Text>
                <WrapImg>
                    <img
                        src="../images/token-page/token-release.png"
                        alt="aggregation-protocols"
                    />
                </WrapImg>
                <Text>
                    <p className="header">FBS Token Unlock schedule</p>
                </Text>
                <WrapImg>
                    <img
                        src="../images/token-page/token-unlock.png"
                        alt="aggregation-protocols"
                    />
                </WrapImg>
                <Text>
                    <p className="header">
                        FBS will vest to the governance treasury on a continuous
                        basis according to the following schedule
                    </p>
                </Text>
                <WrapImg>
                    <img
                        src="../images/token-page/token-treasury.png"
                        alt="aggregation-protocols"
                    />
                </WrapImg>
                <Text>
                    <p className="header italic">
                        FBS is the native utility token of the platform and is
                        used in the following functions:
                    </p>
                    <p className="content">
                        •
                        <span className="title-line" className="title-line">
                            {" "}
                            Protocol Governance:
                        </span>{" "}
                        The <span className="forbitspace">FBS</span> token
                        holders can submit and vote on network governance
                        proposals in futures protocol, exchange parameters, and
                        protocol upgrades via a DAO structure.
                    </p>
                    <p className="content">
                        •
                        <span className="title-line">
                            {" "}
                            Liquidity Mining Incentives:
                        </span>{" "}
                        <span className="forbitspace">forbitspace</span>'s
                        protocols multi-chain incorporates a liquidity mining
                        scheme and distributes a fixed number of{" "}
                        <span className="forbitspace">FBS</span> tokens daily
                        weighted by the liquidity each network participant
                        provides on{" "}
                        <span className="forbitspace">forbitspace</span>{" "}
                        protocol or{" "}
                        <span className="forbitspace">forbitswap</span>{" "}
                        protocol.
                    </p>
                    <p className="content">
                        •{" "}
                        <span className="title-line">
                            Protocol Incentivization:
                        </span>{" "}
                        Users can earn <span className="forbitspace">FBS</span>{" "}
                        tokens as rewards based on their trading volume on the{" "}
                        <span className="forbitspace">FBS</span> platform.
                    </p>
                    <p className="content">
                        • <span className="title-line">Staking:</span> Users can
                        stake <span className="forbitspace">FBS</span> tokens to
                        the Safety Module to earn staking rewards in{" "}
                        <span className="forbitspace">FBS</span> tokens. Note
                        that staked <span className="forbitspace">FBS</span>{" "}
                        will balance by the following time.
                    </p>
                    <p className="content">
                        •
                        <span className="title-line">
                            {" "}
                            Collateral Backing for Derivatives:
                        </span>{" "}
                        <span className="forbitspace">FBS</span> will be
                        utilized as an alternative to stablecoins as margin and
                        collateral for{" "}
                        <span className="forbitspace">forbitspace</span>'s
                        derivatives markets. In some futures markets,{" "}
                        <span className="forbitspace">FBS</span> can also be
                        used for collateral backing or insurance pool staking
                        where stakes can earn interest on their locked tokens.
                    </p>
                    <p className="content">
                        •{" "}
                        <span className="title-line">
                            Platform Service Fees:
                        </span>{" "}
                        After the relayer reward distribution, the exchange
                        platform fee will undergo an on-chain buy-back-and-burn
                        event to accrue value for{" "}
                        <span className="forbitspace">FBS</span>.
                    </p>
                    <p className="content">
                        • <span className="title-line">Utility Holders:</span>{" "}
                        <span className="forbitspace">FBS</span> token holders
                        can participate in an auction with options such as
                        Crowdsale, Dutch & Batch auction on Flyby IDO Launchpad
                        - a multi-chain platform, and NFTs Space.
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
const WrapContainer = styled(Container)``;
const Text = styled.div`
    line-height: 1.2;
    .header {
        font-size: 28px;
        font-weight: bold;
        margin: 12px 0;
    }
    .italic {
        font-style: italic;
    }
    .title {
        font-size: 23px;
        margin: 6px 0;
        font-weight: bold;
    }
    .title-line {
        font-weight: bold;
    }
    .content {
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
        padding: 15px 0;
        line-height: 1.2;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 18px;
        }
        .content {
            text-align: left;
            font-size: 14px;
            padding: 12px 0;
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
export default Schedules;
