import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "../../route/index.js";
import Logo from "./Logo";
import { navContent } from "../constants/index";

const MenuMobile = () => {
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState();

    const toggle = () => {
        setMenu(!menu);
        // setActive(!active);
    };

    return (
        <StyledMenu>
            {menu ? <GlobalStyle /> : <></>}
            <ButtonBanner
                href="https://app.forbitspace.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {" "}
                Launch App
            </ButtonBanner>
            <ButtonMenu onClick={toggle} isOpen={menu}>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </ButtonMenu>
            <Nav
                className="bg-nav-mobile"
                style={{ left: !menu ? "-100%" : "0" }}
            >
                <div>
                    <ul>
                        <li style={{ margin: "0 0 20px -10px" }} onClick={toggle}>
                            <Logo />
                        </li>
                        {navContent.map((item, index) => (
                            <li
                                className={active === item.nav ? "title active" : "title"}
                                key={index}
                                onClick={() => setActive(item.nav === active ? "" : item.nav)}
                            >
                                <Link
                                    href={item.link}
                                    className="text"
                                    onClick={item.link ? toggle : null}
                                >
                                    {item.nav}
                                </Link>
                                <img
                                    src="../images/light-icon/chevron.svg"
                                    alt="chevron"
                                />
                                <Ul className="submenu" show={item.show}>
                                    {item.contents.map((item, index) => (
                                        <li
                                            id={item.disable ? "disable" : ""}
                                            onClick={toggle}
                                            key={index}
                                        >
                                            {!item.outLink ? (
                                                <Link href={item.link}>
                                                    <a className="text">
                                                        {item.content}
                                                    </a>
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <span className="text">
                                                        {item.content}
                                                    </span>
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </Ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Nav>
            <BlurDiv
                style={{ display: !menu ? "none" : "block" }}
                onClick={toggle}
            />
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
    background-image: linear-gradient(to top left, #00284b 0%, #020a1a 100%);
    overflow-y: auto;
    img {
        width: 12px;
        margin-left: 0.5rem;
        transition: transform 0.6s;
    }
    ul {
        li {
            margin-top: 5px;
            padding-left: 2rem;
            a {
                text-decoration: none;
                color: #ffffff;
            }
        }
    }
    .active {
        /* :hover { */
            .submenu {
                max-height: 500px;
            }
            img {
                transform: rotateX(-180deg);
            }
        /* } */
    }
    @media (max-width: 576px) {
        width: 100%;
    }
`;

const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 1024px) {
        display: none;
    }
`;

const Ul = styled.ul`
    max-height: ${({ show }) => (show ? "500px" : "0")};
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
`;

const ButtonMenu = styled.div`
    display: block;
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
const ButtonBanner = styled.a`
    padding: 0.35rem 0.85rem;
    text-decoration: none;
    text-align: center;
    border-radius: 12px;
    display: inline-block;
    transform: scale(0.98);
    transition: transform 0.25s ease 0s;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 14px;
    font-style: italic;
    cursor: pointer;
    width: fit-content;
    background-color: rgb(255, 255, 255);
    color: white;
    /* border: 1px solid transparent; */
    margin-right: 1rem;
    background-image: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    width: 100%;
    max-width: 210px;
    /* &:hover { */
    background-size: 200%;
    background-position: 95%;
    color: white;
    /* } */
    :hover {
        color: white;
    }
`;

export default MenuMobile;
