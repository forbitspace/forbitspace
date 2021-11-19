import React from "react";
import { Link } from "../../route/index.js";
import { navContent } from "../constants/index";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <div className="main-menu">
                <MainMenuNav className="main-menu-nav">
                    {navContent.map((item, index) => (
                        <li key={index}>
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    className="text-dark text-visi"
                                >
                                    {item.nav}
                                </Link>
                            ) : (
                                item.nav
                            )}
                            <DropdownMenu className="dropdown-content">
                                {item.contents.map((item, index) =>
                                    !item.disable ? (
                                        item.outLink ? (
                                            <a
                                                key={index}
                                                href={item.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-dark text-visi"
                                            >
                                                {item.content}
                                            </a>
                                        ) : (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                className="text-dark text-visi"
                                            >
                                                {item.content}
                                            </Link>
                                        )
                                    ) : (
                                        <DisableLink
                                            key={index}
                                            // target="_blank"
                                            className="text-dark text-visi"
                                            id="disable"
                                        >
                                            {item.content}
                                        </DisableLink>
                                    )
                                )}
                            </DropdownMenu>
                        </li>
                    ))}
                </MainMenuNav>
                <div className="main-menu-overlay" />
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    li {
        display: flex;
        align-items: center;
        cursor: default;
        font-size: 14px;
        font-weight: 500;
        a{
            font-weight: 500;
        }
        :hover {
            .dropdown-content {
                max-height: 300px;
            }
        }
        .text-visi {
            font-weight: 800;
        }
    }
    @media screen and (max-width: 1400px) {
        .main-menu {
            margin-right: 40px;
        }
    }

    @media screen and (max-width: 1023px) {
        .main-menu {
            position: fixed;
            top: 0;
            left: unset;
            right: 100%;
            width: 100%;
            height: 100%;
            border-radius: 0;
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
            padding: 20px 0 50px;
            text-align: left;
            -webkit-transition: 0.2s;
            transition: 0.2s;
            z-index: 998;
            margin-right: 0px;
        }
        .main-menu-nav {
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            z-index: 2;
            padding: 20px 0 50px;
            border-radius: 0;
            background: #122131;
            color: #fff;
            background-image: radial-gradient(
            50% 50% at 50% 30%,
            rgb(21 61 111 / 65%) 0%,
            rgba(55, 107, 173, 0) 100%
            );
            background-position: 0px -70vh;
            background-repeat: no-repeat;
        }
        .main-menu-nav > li {
            display: block;
        }
        .main-menu-nav > li > a {
            padding: 15px;
        }
        .main-menu-nav > li > .submenu {
            -webkit-transform: none;
            transform: none;
            position: static;
            -webkit-box-shadow: none;
            box-shadow: none;
            background: #122131;
            color: #fff;
            background-image: radial-gradient(
            50% 50% at 50% 30%,
            rgb(21 61 111 / 65%) 0%,
            rgba(55, 107, 173, 0) 100%
            );
            background-position: 0px -70vh;
            background-repeat: no-repeat;
        }
        .main-menu-overlay {
            display: block;
        }
        .main-menu .main-menu-nav {
            display: block;
            overflow: scroll;
        }
        .main-menu .main-menu-nav li a {
            padding: 10px 15px;
            border-radius: 0;
            color: #fff;
        }
        .main-menu-nav > li > .submenu > li > a {
            color: #fff !important;
            padding: 10px 25px;
        }
        .main-menu .main-menu-nav li a:hover {
            border-radius: 0;
        }
    }
`;

const DropdownMenu = styled.div`
    max-height: 0;
    height: auto;
    position: absolute;
    top: 35px;
    width: max-content;
    overflow: hidden;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    a {
        margin-bottom: 10px !important;
        font-weight: 400 !important;
        font-size: 12px !important;
        font-style: italic;
    }
    #disable {
        opacity: 0.3;
        z-index: -1;
    }
`;
const DisableLink = styled.div`
    margin-bottom: 10px !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    font-style: italic;
`;
const MainMenuNav = styled.ul`
    display: flex;
    margin-bottom: 0;

    li > .submenu {
        position: absolute;
        top: 100%;
        left: 0;
        white-space: nowrap;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        color: #000;
        list-style-type: none;
        min-width: 100%;
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-transform: perspective(1200px) rotateX(-90deg);
        transform: perspective(1200px) rotateX(-90deg);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }

    li:hover > .submenu {
        transform: none;
        padding-left: 0;
    }

    li > .submenu > li > a {
        padding: 10px 15px;
        display: block;
        color: #000;
        font-weight: normal;
        text-transform: none;
        transition: 0.3s ease;
    }

    li > .submenu > li:hover a {
        border-radius: 0;
    }

    li > .submenu > li {
        border-bottom: 1px solid #8080804d;
        border-style: dashed;
    }

    li {
        position: relative;
        margin: 0 15px;
    }
    li::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        right: 50%;
        border-bottom: 2px solid #ffffff;
        transition: all 0.4s;
    }
    li:hover::after {
        left: 0;
        right: 0;
    }

    li a {
        display: block;
        border-radius: 5px;
        background: transparent;
        transition: 0.3s ease;
        font-size: 14px;
        text-decoration: none;
        letter-spacing: 1px;
        margin-right: 5px;
        color: white;
    }
`
export default Nav;
