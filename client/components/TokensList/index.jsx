import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TabTokens from "./components/TabTokens";

import { Container, Row, Col } from "reactstrap";
import TabPairs from "./components/TabPairs";
import TabTransactions from "./components/TabTransactions";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleFaq>forbitswap</TitleFaq>
        <Row>
          <Col lg="6">
            <div className="box-tab">
              <Tabline>
                <TitleRates>Total Liquidity</TitleRates>
                <Rates>
                  $25,066,770<span>+1.06%</span>
                </Rates>
              </Tabline>
              <Tabline>
                <TitleRates>Volume (24hrs)</TitleRates>
                <Rates>
                  $6,920,080<span>+78.89%</span>
                </Rates>
              </Tabline>
              <Tabline>
                <TitleRates>Transactions (24hrs)</TitleRates>
                <Rates>
                  4,987<span>+59.89%</span>
                </Rates>
              </Tabline>
            </div>
          </Col>
          <Col lg="6">
            <Thumtoken>
              <img src="./images/chart.jpg" alt="" />
            </Thumtoken>
          </Col>
        </Row>
        <Row>
          <Col>
            <TabTokens />
            <TabPairs />
            <TabTransactions />
          </Col>
        </Row>
      </Container>
    </BoxContent>
  );
};

const BoxContent = styled.section`
  position: relative;
  padding: 50px 0;
  margin: 0 auto;
`;

const Thumtoken = styled.p`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const TitleFaq = styled.h3`
  font-size: 52px;
  width: 100%;
  margin-bottom: 40px;
`;

const Tabline = styled.div`
  background: #fff;
  box-shadow: 1px 2px 7px 1px #989898;
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 8px;
  transition: ease-in-out 0.5s all;
  width: calc(100% - 25px);
  cursor: pointer;

  &:hover {
    margin-left: -15px;
  }
`;
const Rates = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;
const TitleRates = styled.h3`
  font-size: 20px;
  width: 100%;
  color: #000;
  margin-bottom: 15px;
`;

export default Index;
