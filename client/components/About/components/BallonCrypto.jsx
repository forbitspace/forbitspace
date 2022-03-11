import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const BallonCrypto = () => {
    return (
        <BoxSection>
            <WrapContainer>
                <WrapText>
                    <Text>What We Do</Text>
                    <SubText>
                        We believe that crypto is just getting started. We have
                        an optimistic view of the future and believe in crypto’s
                        potential and the use of the blockchain as the main
                        underlying technology.
                        <br />
                        <br />
                        To succeed in this nascent and accelerating space
                        requires active management and deep, multi-disciplinary
                        knowledge across financial markets, economics,
                        early-stage investing, community building, and
                        technology — all qualities that we believe the team
                        always positive energy continuous learning.
                    </SubText>
                </WrapText>
            </WrapContainer>
            <WrapContainer>
                <Content className="title-banner text-dark text-visi">
                    <SubText className="w-90">
                        We are determined to co-create solutions and improve
                        scaling solutions to enable the system to expand. A
                        scaling solution is a method of enable a system to
                        expand.
                    </SubText>
                    <Text>Core Value</Text>

                    <SubText className="w-98">
                        We build and leverage technology to decode market
                        dynamics.
                        <br />
                        <br />
                        We continuously seek to harness novel technology systems
                        and software across our firm—from risk management, trade
                        execution, custody, and day-to-day operations. We thrive
                        as problem solvers and emphasize analytical rigor
                        crypto-economic protocols.
                        <br />
                        <br />
                        System Approach we work synergistically to identify
                        opportunities, build technology, and manage risk. We
                        believe in value investments using a rigorous
                        institutional due diligence approach and bring the deep
                        domain expertise of our investment team. Scalability,
                        raising the Ceiling it’s not about the destination, it’s
                        about a user experience journey and provides simple and
                        intuitive products that anyone can use.
                    </SubText>
                    <Text>Principles</Text>
                    <Text className="sub-header">Independent Thinking</Text>
                    <SubText>
                        Our vision is to be limitless. We aim to be an important
                        part of the defi space that is creates transparency for
                        a global economy built on the blockchain of the
                        decentralized financial space.
                    </SubText>
                </Content>
                <WrapImg>
                    <ImgHalf>
                        <img
                            src="../images/about-page/abloutus-min.png"
                            alt="image-space-crypto"
                        />
                    </ImgHalf>
                </WrapImg>
            </WrapContainer>
            <WrapContainer>
                <Content>
                    <Text className="sub-header">Long Term Compass share </Text>
                    <SubText>
                        We aim to build an enduring technology finance firm open
                        up the world to newfound. We are radically optimistic
                        about crypto’s potential to restore trust and enable new
                        kinds of governance where communities collectively make
                        important decisions about how networks evolve strategic
                        relationships and sustainable growth.
                        <br />
                        <br />
                        While having a wide selection of different protocols is
                        beneficial to diversify investments and getting the best
                        yield rates from crypto lending, efficiency and
                        convenience are hindered since the financial information
                        is spread vastly across multiple protocols. That’s where
                        DeFi aggregators thrive.
                        <br />
                        <br />
                        <span>forbitspace</span> DEXs aggregator utilizes the
                        power of blockchain to bring together trades across
                        various decentralized finance platforms (DeFi) into one
                        space, saving users time and increasing efficiency for
                        cryptocurrency trades. We siphon the very best prices
                        from DEXs, swap services, and liquidity pools into one
                        place so that users can optimize their trades.
                    </SubText>
                </Content>
            </WrapContainer>
        </BoxSection>
    );
};

const BoxSection = styled.section`
    position: relative;
    /* min-height: 88vh; */
    padding: 2vh 0 0;
    @media (max-width: 770px) {
        padding-top: 60px;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const WrapImg = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 60%;
    }
`;
const ImgHalf = styled.div`
    width: 100%;
    text-align: left;
    img {
        width: 100%;
        height: auto;
        transform: scale(1.6);
        transform-origin: left;
        margin: 0 0 0 -2rem;
    }
    @media (max-width: 1440px) {
        img {
            transform: scale(1.2);
        }
    }
    @media (max-width: 1024px) {
        img {
            transform: scale(1);
            margin: 0;
            transform-origin: unset;
        }
    }
`;
const WrapText = styled.div`
    width: 100%;
`;
const Content = styled.div`
    /* margin-left: 80px; */
    width: 60%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    :last-child {
        width: 100%;
    }
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
    &.sub-header {
        font-size: 1.6rem;
    }
    @media (max-width: 768px) {
        text-align: center;
        font-size: 26px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 25px;
    }
`;
const SubText = styled.p`
    font-size: 20px;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: left;
    margin-bottom: 4rem;
    line-height: 1.2;
    &.toggle__btn {
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
    }
    &.w-72 {
        width: 72%;
    }

    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
        margin-bottom: 2rem;
        width: 100% !important;
        &.toggle__btn {
            font-size: 12px;
        }
    }
    @media (max-width: 576px) {
        line-height: 1.5;
        font-size: 14px;
    }
`;
export default BallonCrypto;
