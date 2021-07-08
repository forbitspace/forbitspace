import React from "react";
import styled from "styled-components";
import Title from "../../Title";
import { Container } from "reactstrap";

const SpaceNFTs = () => {
  return (
    <StyledSection>
      <Container>
        <Title title="Space NFTs a revolutionary and innovative technology" />
        <Description className="text-dark">
          Space NFTs decentralized auction platform for creating and selling
          non-fungible tokens. NFT is a unique digital asset that uses
          blockchain technology to define and guarantee its ownership.
        </Description>
        <CircleNFTs
          className="img-dark"
          src="./images/NFTs.png"
          alt="space NFTs"
        />
        <CircleNFTs
          className="img-light"
          src="./images/light-icon/nftslight.png"
          alt="space NFTs"
        />
        <Astronaut
          src="./images/infinity-1-min.png"
          alt="astronaut in the milky way"
        />
      </Container>
    </StyledSection>
  );
};

const Astronaut = styled.img`
  max-width: 900px;
  width: 100%;
`;

const CircleNFTs = styled.img`
  max-width: 1200px;
  width: 100%;
  margin: 4rem auto;
  @media (max-width: 576px) {
    margin: 2rem auto;
  }
`;

const StyledSection = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 576px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 25px;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

export default SpaceNFTs;
