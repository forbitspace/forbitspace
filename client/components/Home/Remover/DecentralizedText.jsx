import React from "react";
import styled from "styled-components";

const DecentralizedText = () => {
  return (
    <StyledSection>
      <DecentralizeText className="text-dark">
        Decentralized Space <br />
        Trading Protocol
      </DecentralizeText>
      <Description className="text-dark">
        Decentralized space where users from around the world should be able to
        easily access the benefits of decentralized finance
      </Description>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 576px) {
    text-align: left;
  }
`;

const DecentralizeText = styled.p`
  font-size: 6.5rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 5px;
  font-family: helvetica neue;
  @media (max-width: 1025px) {
    font-size: 5rem;
  }
  @media (max-width: 768px) {
    font-size: 35px;
    text-align: left;
    letter-spacing: 2px;
  }
  animation: animationTextBanner 3s 1;

  @keyframes animationTextBanner {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Description = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 25px;
  font-weight: 300 !important;
  animation: animationTextBanner 3s 1;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

export default DecentralizedText;
