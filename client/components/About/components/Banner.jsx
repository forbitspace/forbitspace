import React, { useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <BoxSection open={open}>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            <img src="../images/about-page/crypto-space.png" alt="" />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Text>Market</Text>
          <SubText>
            As the DeFi market continues to boom and expands, new solutions
            emerge to simplify user navigation and improve user experiences. One
            of such recent innovations is the launch of DEX aggregators –
            platforms that unify numerous DEXs in the same merge space and allow
            users to conduct operations on all covered platforms without the
            need to create separate accounts and wallets.
          </SubText>
          {open ? (
            <>
              <SubText>
                While having a wide selection of different protocols is
                beneficial to diversify investments and getting the best yield
                rates from crypto lending, efficiency and convenience are
                hindered since the financial information is spread vastly across
                multiple protocols. That’s where DeFi aggregators thrive.
              </SubText>
              <SubText>
                forbitspace DEXs aggregator utilizes the power of blockchain to
                bring together trades across various decentralized finance
                platforms (DeFi) into one space, saving users time and
                increasing efficiency for cryptocurrency trades. We siphon the
                very best prices from DEXs, swap services, and liquidity pools
                into one place so that users can optimize their trades.
              </SubText>
            </>
          ) : (
            <></>
          )}
          <SubText onClick={() => setOpen(!open)} className="toggle__btn">
            {open ? "Hide" : "Read more..."}
          </SubText>
          {/* <WrapperButtonApp>
            <ButtonBanner href="/">Google Play</ButtonBanner>
            <ButtonBanner href="/">App Store</ButtonBanner>
          </WrapperButtonApp> */}
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 2vh 0 0;
  margin-top: ${({ open }) => (open ? "0" : "-6rem")};
  @media (max-width: 1024px) {
    padding-top: 20px;
    margin-top: 0;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
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
  }
`;
const Content = styled.div`
  /* margin-left: 80px; */
  width: 60%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SubText = styled.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: right;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    &.toggle__btn {
      font-size: 12px;
    }
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export default Banner;
