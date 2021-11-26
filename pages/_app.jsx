// @flow
import React from "react";
import App from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { ThemeGlobalStyle } from "../public/theme/index";
const Header = dynamic(import("../client/components/Header"), { ssr: false });

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
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <NextSeo title={"forbitspace"} description={"The forbitspace DEX super aggregator is an interoperability protocol that connects disparate blockchains. That unites decentralized applications across disparate blockchains, simultaneously uniting liquidity across chains and making it possible to transact in, out, and across disparate networks with ease."} />
                <Header />
                <div className="main">
                    <ThemeGlobalStyle/>
                    <Component {...pageProps} />
                </div>
            </React.Fragment>
        );
    }
}
