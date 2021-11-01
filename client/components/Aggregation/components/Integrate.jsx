import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Integrate = () => {
    const network = [
        { networkName: "eth" },
        { networkName: "bsc" },
        { networkName: "plg" },
        { networkName: "ava" },
    ];
    return (
        <BoxSection>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    <Text>Integrated protocols</Text>
                </Content>
                <WrapNetwork>
                    {network.map((item, index) => (
                        <Network>
                            <NetworkIcon>
                                <WrapIcon>
                                    <img
                                        src={`../images/aggregation-page/network/${item.networkName}-network.png`}
                                        alt=""
                                    />
                                </WrapIcon>
                            </NetworkIcon>
                            <NetworkOrbit>
                                <WrapOrbit>
                                    <img
                                        src={`../images/aggregation-page/network/${item.networkName}-orbit.png`}
                                        alt=""
                                    />
                                </WrapOrbit>
                            </NetworkOrbit>
                        </Network>
                    ))}
                </WrapNetwork>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    padding: 0vh 0 0;
    @media (max-width: 770px) {
        padding-top: 40px;
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 576px) {
    }
`;
const WrapNetwork = styled.div``;
const Network = styled.div`
    padding: 3rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    :nth-child(2n) {
        flex-direction: row-reverse;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        :nth-child(2n) {
            flex-direction: column;
        }
    }
`;
const NetworkIcon = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 40%;
    }
`;
const WrapIcon = styled.div`
    img {
        max-width: 360px;
    }
    @media (max-width: 768px) {
        img {
            max-width: 220px;
        }
    }
    @media (max-width: 768px) {
        img {
            max-width: 160px;
        }
    }
`;
const NetworkOrbit = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 60%;
    }
`;
const WrapOrbit = styled.div`
    img {
        /* width: 80%; */
        max-width: 100%;
    }
`;
const Content = styled.div`
    /* margin-left: 80px; */
    /* width: 70%; */
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
        align-items: center;
    }
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: 36px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
    }
    @media (max-width: 576px) {
        font-size: 22px;
    }
`;
export default Integrate;
