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
            "forbitspace The future of decentralized finance Defi space is the next evolution of the financial system"
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
