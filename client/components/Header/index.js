import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Darkmode from "./components/Darkmode";
import Languge from "./components/Languge";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import MenuMobile from "./components/MenuMobile";
import AppLink from "./components/AppLink";

export default function Index() {
  const [showNav, setShowNav] = useState(false);
  window.addEventListener("scroll", () => {
    // console.log("scroll -----------> ", window.scrollY);
    window.scrollY > 100 ? setShowNav(true) : setShowNav(false);
  });
  return (
    <React.Fragment>
      <GlobalStyle />
      <header
        className={
          showNav ? "header header--nav header--active" : "header header--nav"
        }
      >
        <div className="container">
          <div className="main-header">
            <Logo />
            <Nav />
            <ButtonGroup>
              <WrapperButtonApp>
                <AppLink />
              </WrapperButtonApp>
              {/* <Languge /> */}
              {/* <Darkmode /> */}
              <MenuMobile />
            </ButtonGroup>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
const GlobalStyle = createGlobalStyle`
  .header--active{
    background: linear-gradient(180deg, #020c1d95 50%, transparent);
  }
  .header--nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.5s;
    font-family: sans-serif;
  }
`;

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
