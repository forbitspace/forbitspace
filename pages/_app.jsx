// @flow
import React from "react";
// import styled from "styled-components";
import App from "next/app";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const Planet = dynamic(import("../client/components/Planets/Planet"), {
  ssr: false,
});
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
    var show = true;
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <NextSeo
          title={"forbitspace"}
          description={
            "forbitspace is an interoperability aggregator protocol that unites decentralized applications across disparate blockchains. Allows crypto traders to tap deep liquidity and receive better pricing one single interface."
          }
        />
        {show ? (
          <>
            <Header />
            <div className="main">
              <Component {...pageProps} />
            </div>
          </>
        ) : (
          <Planet />
        )}
      </React.Fragment>
    );
  }
}
