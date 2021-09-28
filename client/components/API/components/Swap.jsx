import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Swap = () => {
  return (
    <WrapperBanner>
      <WrapContainer>
        <WrapImg>
          <img src="../images/api-page/swap.png" alt="forbitspace foundation" />
        </WrapImg>
      </WrapContainer>
    </WrapperBanner>
  );
};

const WrapperBanner = styled.div`
  padding: 2vh 0 0;
  @media (max-width: 576px) {
    padding: 100px 0;
    text-align: left;
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapImg = styled.div`
  width: 60%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
`;
export default Swap;
