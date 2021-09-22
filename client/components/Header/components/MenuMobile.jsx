import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import Logo from "./Logo";
import { navContent } from "../constants/index";

const MenuMobile = () => {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <StyledMenu>
      {menu ? <GlobalStyle /> : <></>}
      <ButtonMenu onClick={toggle} isOpen={menu}>
        <div className="logo-light-mode">
          <span></span>
          <span></span>
        </div>
        <div className="logo-dark-mode">
          <span></span>
          <span></span>
        </div>
      </ButtonMenu>
      <Nav className="bg-nav-mobile" style={{ left: !menu ? "-100%" : "0" }}>
        <div>
          <ul>
            <li style={{ margin: "0 0 20px -10px" }}>
              <Logo />
            </li>
            {navContent.map((item, index) => (
              <li className="title">
                <a
                  href={item.link}
                  className="text"
                  onClick={item.link ? toggle : null}
                >
                  {item.nav}
                </a>
                <img src="../images/light-icon/chevron.svg" alt="" />
                <ul className="submenu">
                  {item.contents.map((item, index) => (
                    <li id={item.disable ? "disable" : ""} onClick={toggle}>
                      <Link href={item.link}>
                        <a className="text">{item.content}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Nav>
      <BlurDiv style={{ display: !menu ? "none" : "block" }} onClick={toggle} />
    </StyledMenu>
  );
};

const GlobalStyle = createGlobalStyle`
  body{
      overflow: hidden;
  }
`;

const Nav = styled.div`
  padding: 1rem 0.5rem;
  position: fixed;
  z-index: 999;
  width: 60vw;
  height: 100%;
  left: -100%;
  top: 0;
  transition: all ease-in-out 0.5s;
  background-image: linear-gradient(268deg, #c4f1f2 3%, #ffffff 97%);
  overflow-y: auto;
  img {
    width: 20px;
    margin-left: 0.5rem;
  }
  ul {
    li {
      margin-top: 5px;
      a {
        text-decoration: none;
        color: #182239;
      }
    }
  }
  .title {
    :hover {
      .submenu {
        max-height: 500px;
      }
    }
  }
  .submenu {
    max-height: 0;
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
    a {
      margin-bottom: 10px !important;
      font-weight: 500 !important;
      font-size: 12px !important;
      font-style: italic;
    }
    #disable {
      opacity: 0.3;
      z-index: -1;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const StyledMenu = styled.div`
  @media (min-width: 770px) {
    display: none;
  }
`;

const ButtonMenu = styled.div`
  .logo-dark-mode {
    display: none;
  }

  div {
    width: 20px;
    height: 2px;
    position: relative;
    margin-bottom: 3px;
    z-index: 10000;

    span {
      position: absolute;
      width: 20px;
      height: 2px;
      background: black;
      transition: all ease-in-out 0.2s;
      border-radius: 5px;
    }

    span:nth-child(1) {
      transform: ${(props) =>
        !props.isOpen ? "rotate(0deg)" : "rotate(45deg)"};
    }
    span:nth-child(2) {
      transform: ${(props) =>
        !props.isOpen ? "rotate(0deg)" : "rotate(-45deg)"};
    }

    &::before {
      content: "";
      height: 2px;
      background-color: black;
      position: absolute;
      bottom: -6px;
      transition: all ease-in-out 0.2s;
      width: ${(props) => (!props.isOpen ? "20px" : "0px")};
      transform-origin: center;
      border-radius: 5px;
    }
    &::after {
      content: "";
      width: 20px;
      height: 2px;
      background-color: black;
      position: absolute;
      top: -6px;
      transition: all ease-in-out 0.2s;
      width: ${(props) => (!props.isOpen ? "20px" : "0px")};
      transform-origin: center;
      border-radius: 5px;
    }
  }

  div.logo-dark-mode {
    width: 20px;
    height: 2px;
    position: relative;
    margin-bottom: 3px;
    z-index: 10000;

    span {
      position: absolute;
      width: 20px;
      height: 2px;
      background: white;
      transition: all ease-in-out 0.2s;
      border-radius: 5px;
    }

    span:nth-child(1) {
      transform: ${(props) =>
        !props.isOpen ? "rotate(0deg)" : "rotate(45deg)"};
    }
    span:nth-child(2) {
      transform: ${(props) =>
        !props.isOpen ? "rotate(0deg)" : "rotate(-45deg)"};
    }

    &::before {
      content: "";
      height: 2px;
      background-color: white;
      position: absolute;
      bottom: -6px;
      transition: all ease-in-out 0.2s;
      width: ${(props) => (!props.isOpen ? "20px" : "0px")};
      transform-origin: center;
      border-radius: 5px;
    }
    &::after {
      content: "";
      width: 20px;
      height: 2px;
      background-color: white;
      position: absolute;
      top: -6px;
      transition: all ease-in-out 0.2s;
      width: ${(props) => (!props.isOpen ? "20px" : "0px")};
      transform-origin: center;
      border-radius: 5px;
    }
  }
`;
const BlurDiv = styled.div`
  background: #000000b5;
  z-index: 998;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  animation: opacity 0.5s 1;

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default MenuMobile;
