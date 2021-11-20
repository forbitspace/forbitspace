import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
export default class extends Document {
    static async getInitialProps(...args) {
        const documentProps = await super.getInitialProps(...args);
        return { ...documentProps };
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta charSet="utf-8" />
                    <meta
                        name="keywords"
                        content="forbitspace, forbitswap, flyby, ido, decentralized, defi, dex, exchange, crypto, fbs"
                    />
                    <meta
                        name="referrer"
                        content="origin-when-crossorigin"
                        id="meta_referrer"
                    />
                    <meta name="theme-color" content="#fff" />
                    <meta
                        property="og:image"
                        content="https://ipfs.infura.io/ipfs/QmaioLHcm1ugkc36oSQ1zyg56W2sqiPhWxvB1xtK2egEWs"
                    />
                    <meta httpEquiv="cache-control" content="no-cache" />
                    <meta httpEquiv="expires" content="0" />
                    <meta
                        httpEquiv="Cache-Control"
                        content="no-cache, no-store, must-revalidate"
                    />
                    <meta
                        httpEquiv="X-UA-Compatible"
                        content="IE=edge,chrome=1"
                    />
                    <link rel="shortcut icon" href="../images/logo-space.png" />
                    <link
                        rel="apple-touch-icon"
                        sizes="192x192"
                        href="../images/logo-space.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="512x512"
                        href="../images/logo-space.png"
                    />
                    {/* <link
                        rel="stylesheet"
                        href="/js/fontawesome-free-5.15.3-web/css/all.min.css"
                    /> */}
                    <link rel="stylesheet" href="/css/style.css" type="text/css" />
                    {/* <link rel="stylesheet" href="/css/responsive.css" type="text/css" /> */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        rel="preload"
                        href="/css/style.css"
                        as="style"
                        onLoad="this.rel='stylesheet'"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,500;1,700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link> */}
                    <link
                        rel="manifest"
                        href="../public/manifest.json"
                        crossOrigin="use-credentials"
                    />
                </Head>
                <body className="dark-mode">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
