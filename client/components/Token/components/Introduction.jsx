import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import LazyLoad from "react-lazyload";

const Introduction = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <Text>
                    {/* <p className="header">Introduction to FBS</p> */}
                    <p className="content">
                        The <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator is an interoperability protocol that
                        unites decentralized applications across disparate
                        blockchains, simultaneously uniting liquidity across
                        chains and making it possible to transact in, out, and
                        across disparate networks with ease. The{" "}
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator allows crypto traders to tap deep
                        liquidity and receive better pricing with one single
                        interface.
                        <br />
                        <br />
                    </p>
                    <p className="content">
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator employs a smart order routing algorithm
                        to source liquidity from different DEXs and thus offer
                        users better token swap rates than they could get on any
                        single DEX.{" "}
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator has the ability to optimize slippage,
                        swap fees, and minimize slippage on large orders for
                        users and offer traders the best possible price in the
                        shortest possible time.
                        <br />
                        <br />
                        <span className="forbitspace">forbitspace</span> DEX
                        Super Aggregator uses Spaceflight algorithm smart order
                        routing to split a single transaction into multiple
                        orders across various DEXs, also routes orders through
                        allowing crypto traders to tap deep liquidity and
                        receive better pricing, low cost & efficiency in the
                        most of liquidity.
                    </p>
                </Text>
                <WrapImg>
                    <LazyLoad
                        height={400}
                        once={true}
                        placeholder={
                            <img
                                width="1251"
                                height="409.79"
                                src="../images/aggregation-page/aggregation-banner.png"
                                alt="aggregation-picture"
                            />
                        }
                    >
                        <img
                            src="../gif/gif_aggregation-protocol.gif"
                            alt="aggregation-protocols"
                        />
                    </LazyLoad>
                </WrapImg>
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
        font-style: italic;
    }
    .content {
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
        line-height: 1.2;
    }
    @media (max-width: 576px) {
        .header {
            font-size: 18px;
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
    max-width: 720px;
    img {
        width: 100%;
        margin: auto;
    }
`;
export default Introduction;
