import React from "react";
import styled from "styled-components";
import Darkmode from "./components/Darkmode";
import Languge from "./components/Languge";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import MenuMobile from "./components/MenuMobile";
import AppLink from "./components/AppLink";

export default function Index() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="main-header">
            <Logo />
            <Nav />
            <ButtonGroup>
              <WrapperButtonApp>
                <AppLink />
              </WrapperButtonApp>
              <Languge />
              {/* <Darkmode /> */}
              <MenuMobile />
            </ButtonGroup>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

const WrapperButtonApp = styled.div`
  max-width: 200px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;
