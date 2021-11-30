import { createGlobalStyle } from "styled-components";
export const ThemeGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    *,
    *:after,
    *:before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* Element style */

    img,
    iframe {
        max-width: 100%;
    }

    body {
        font-family: "helvetica neue", sans-serif !important;
        font-size: 14px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-image: linear-gradient(
            to right,
            #020a1a 0%,
            #00284b 50%,
            #020a1a 100%
        );
        /* transition: ease-in-out 0.5s all; */
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style-type: none;
    }
    ul {
        padding: 0;
    }
    table {
        padding: 0;
        margin: 0 0 1.45rem;
        font-size: 1rem;
        line-height: 1.45rem;
        border-collapse: collapse;
        width: 100%;
    }

    td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        font-feature-settings: "tnum";
        -moz-font-feature-settings: "tnum";
        -ms-font-feature-settings: "tnum";
        -webkit-font-feature-settings: "tnum";
        padding: 15px 0;
    }

    tr td {
        text-align: left;
    }

    tr th {
        text-align: left;
        font-weight: bold;
    }
    footer {
        position: relative;
        z-index: 10;
    }
    /* CONTAINER */
    .container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 576px) {
        .container{
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .container{
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .container{
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .container{
            max-width: 1180px;
        }
    }

    /* main-page */
    .main {
        margin-top: 50px;
        position: relative;
        z-index: 10;
        min-height: calc(100vh - 125px);
    }

    @media screen and (max-width: 768px) {
        .main {
        margin-top: 0px;
        }
    }
    
    /* style header */
    .header {
        position: relative;
        width: 100%;
        z-index: 999;
    }

    .main-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        transition: 0.3s ease;
    }

    .main-menu {
        display: flex;
        align-items: center;
    }


    .main-menu-btn {
        display: none;
    }

    .main-menu-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: none;
    }

    .main-menu.active {
        right: 0;
    }


    /* Body style */
    body.dark-mode {
        transition: ease-in-out 0.5s all;
        color: #fff;
    }
    body.dark-mode::before {
        content: "";
        position: fixed;
        top: 0;
        background-color: #000;
        opacity: 0.22;
        width: 100vw;
        height: 100vh;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    body.dark-mode::after {
        content: "";
        position: fixed;
        top: 0;
        background-image: linear-gradient(
            to right,
            #020a1a 0%,
            #00284b 50%,
            #020a1a 100%
        );
        background-image: url("../images/background-line-min.png");
        background-size: cover;
        opacity: 0.08;
        width: 100vw;
        height: 100vh;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }


    /* DARK MODE */
    body.dark-mode .visi {
        background: #eaeaea;
        color: #222222;
    }
    body.dark-mode .text-visi {
        color: #ffffff !important;
    }
    body.dark-mode .text-visi h3 {
        color: #ffffff;
    }
    body.dark-mode .text-visi a {
        color: #ffffff;
    }
    body.dark-mode .drep-visi {
        color: #ccc6c6;
    }
    body.dark-mode .link-visi {
        color: #44b8e1;
    }

    body.dark-mode p {
        color: white !important;
    }


`;
