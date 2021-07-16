// @flow
import React from "react";
import styled from "styled-components";
import App from "next/app";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const Header = dynamic(import("../client/components/Header"), { ssr: false });
// const Footer = dynamic(import("../client/components/Footer"), { ssr: false });

export default class extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // init data API
        return { pageProps };
    }
    render() {
        var show = false;
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <NextSeo
                    title={"forbitspace"}
                    description={
                        "forbitspace The future of decentralized finance Defi space is the next evolution of the financial system"
                    }
                />
                {show ? (
                    <>
                        <Header />
                        <div className='main'>
                            <Component {...pageProps} />
                        </div>
                    </>
                ) : (
                    <Main>
                        <HeaderContent>
                            <LogoSpace>
                                <img
                                    src='./images/Forbitspace-comming/logo-forbitspace.png'
                                    alt=''
                                />
                            </LogoSpace>
                            <UseBtn href='/#'>Use App</UseBtn>
                        </HeaderContent>
                        <Orbit />
                    </Main>
                )}
            </React.Fragment>
        );
    }
}

const Main = styled.div`
    height: 100vh;
    display: flex;
    background-image: url("./images/Forbitspace-comming/background.jpg");
    background-size: cover;
    align-items: center;
    justify-content: center;
`;

const Orbit = styled.div`
    height: 80%;
    width: 100%;
    background-image: url("./images/Forbitspace-comming/orbit-contributor.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const HeaderContent = styled.div`
    max-height: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    padding: 0 120px;
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;
const LogoSpace = styled.div`
    max-height: 80px;
    img {
        width: 150px;
        height: auto;
    }
`;
const UseBtn = styled.a`
    padding: 5px 30px;
    border-radius: 12px;
    transform: scale(0.98);
    transition: transform 0.25s ease 0s;
    box-sizing: border-box;
    text-align: center;
    font-weight: 500;
    font-size: 1.125rem;
    text-decoration: none;
    cursor: pointer;
    color: white;
    background: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    transition: 0.2s;
    max-width: 150px;

    :hover {
        color: #fff;
        background-size: 200%;
        background-position: right;
    }
    @media (max-width: 576px) {
        font-size: 0.8rem;
    }
`;
