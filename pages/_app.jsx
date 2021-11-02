// @flow
import React from "react";
import App from "next/app";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
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
                <NextSeo
                    title={"forbitspace"}
                    description={
                        "forbitspace is an interoperability aggregator protocol that unites decentralized applications across disparate blockchains. Allows crypto traders to tap deep liquidity and receive better pricing one single interface."
                    }
                />
                <Header />
                <div className="main">
                    <Component {...pageProps} />
                </div>
            </React.Fragment>
        );
    }
}
