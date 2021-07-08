import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from 'next/link';
import Logo from './Logo';





const MenuMobile = () => {

    const [menu, setMenu] = useState(false);


    const toggle = () => {
        setMenu(!menu)
    }

    return (
        <StyledMenu>
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
            <Nav className="bg-nav-mobile" style={{ left: !menu ? '-100%' : '0' }}>
                <div>
                    <ul>
                        <li style={{ margin: '0 0 20px -10px' }}><Logo /></li>
                        <li>
                            <Link href="/" activeClassName="active">
                                <a className="text">Home</a>
                            </Link>
                        </li>
                        <li>
                            <a className="text" target="_blank" href="#">Space Swap</a>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="text" >Space Discovery</a>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="text" >Space Exchange</a>
                        </li>
                        <li>
                            <a href="#" className="text" >Governance</a>
                            <ul className="submenu">
                                <li>
                                    <Link href="#">
                                        <a className="text" >Forum</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/forbit-tokens">
                                        <a className="text" >Forbit Tokens</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="text" >About &nbsp;</a>
                            <ul className="submenu">
                                <li>
                                    <Link href="/blog" activeClassName="active">
                                        <a className="text" >  Blog</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/about">
                                        <a className="text" >Info</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a className="text" >Faq</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="text" >Discord</a>
                                </li>
                                <li>
                                    <a href="#" className="text" >Twitter</a>
                                </li>
                                <li>
                                    <a href="#" className="text" >Reddit</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Nav>
            <BlurDiv style={{ display: !menu ? 'none' : 'block' }} onClick={toggle} />
        </StyledMenu>
    );
};



const Nav = styled.div`
    padding: 1rem .5rem;
    position: fixed;
    z-index: 999;
    width: 60vw;
    height: 100%;
    left: -100%;
    top: 0;
    transition: all ease-in-out .5s;
    background-image: linear-gradient(
        268deg
        , #c4f1f2 3%, #ffffff 97%);
    ul {
        
        li {
        
            margin-top: 5px;
            a {
                text-decoration: none;
                color: #182239;

            }
        }
    }


`

const StyledMenu = styled.div`
    @media(min-width: 770px) {
        display: none;
    }
`

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
            transition: all ease-in-out .2s;
            border-radius: 5px;
        }
        
        span:nth-child(1) {
            transform: ${props => !props.isOpen ? 'rotate(0deg)' : 'rotate(45deg)'};
        } 
        span:nth-child(2) {
            transform: ${props => !props.isOpen ? 'rotate(0deg)' : 'rotate(-45deg)'};
        } 

        &::before {
            content: '';
            height: 2px;
            background-color: black;
            position: absolute;
            bottom: -6px;
            transition: all ease-in-out .2s;
            width: ${props => !props.isOpen ? '20px' : '0px'};
            transform-origin: center;
            border-radius: 5px;
        }
        &::after {
            content: '';
            width: 20px;
            height: 2px;
            background-color: black;
            position: absolute;
            top: -6px;
            transition: all ease-in-out .2s;
            width: ${props => !props.isOpen ? '20px' : '0px'};
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
            transition: all ease-in-out .2s;
            border-radius: 5px;
        }
        
        span:nth-child(1) {
            transform: ${props => !props.isOpen ? 'rotate(0deg)' : 'rotate(45deg)'};
        } 
        span:nth-child(2) {
            transform: ${props => !props.isOpen ? 'rotate(0deg)' : 'rotate(-45deg)'};
        } 

        &::before {
            content: '';
            height: 2px;
            background-color: white;
            position: absolute;
            bottom: -6px;
            transition: all ease-in-out .2s;
            width: ${props => !props.isOpen ? '20px' : '0px'};
            transform-origin: center;
            border-radius: 5px;
        }
        &::after {
            content: '';
            width: 20px;
            height: 2px;
            background-color: white;
            position: absolute;
            top: -6px;
            transition: all ease-in-out .2s;
            width: ${props => !props.isOpen ? '20px' : '0px'};
            transform-origin: center;
            border-radius: 5px;
        }
    }
`
const BlurDiv = styled.div`
    background: #000000b5;
    z-index: 998;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    animation: opacity .5s 1;

    @keyframes opacity {
        0% {opacity: 0}
        100% {opacity: 1}
    }
`




export default MenuMobile;
