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
        :hover {
            .dropdown-content {
                max-height: 300px;
            }
        }
        .text-visi {
            font-weight: 800;
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
        font-weight: 500 !important;
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
        color: #182239;
        transition: 0.3s ease;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        letter-spacing: 1px;
        margin-right: 5px;
        color: white;
    }
`
export default Nav;
