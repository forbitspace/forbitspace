import styled, { createGlobalStyle, keyframes } from "styled-components";
import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <StyledPage>
            <GlobalStyle />
            <h1>404</h1>
            <h2>Page not found</h2>
            <div className="home-button">
                <Link href="/">Home</Link>
            </div>
            <img
                src="../images/logo/logo-forbitspace-dark.png"
                alt="logo-forbitspace"
                class="logo-forbitspace"
            />
            <div class="circle-shadow"></div>
        </StyledPage>
    );
};

const GlobalStyle = createGlobalStyle`
  .main {
      margin-top: 0;
  }
  .main-header {
      display: none;
  }
  .footer {
      display: none;
  }
            /* body {
                overflow-x: hidden;
                overflow-y: auto;
                background-image: linear-gradient(
                    to right,
                    #020a1a 0%,
                    #00284b 50%,
                    #020a1a 100%
                );
            } */
`;

const StyledPage = styled.div`
    height: 80vh;
    width: 100vw;
    padding-top: 18vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    h1 {
        color: #fff;
        font-size: 8rem;
        font-family: "helvetica neue", sans-serif !important;
        font-style: italic;
        font-weight: 900;
        margin-bottom: 0rem;
    }
    h2 {
        color: #fff;
        font-size: 1rem;
        font-family: "helvetica neue", sans-serif !important;
        font-style: italic;
        font-weight: 400;
        text-transform: uppercase;
    }
    .home-button {
        padding: 6px 20px;
        text-decoration: none;
        text-align: center;
        border-radius: 16px;
        display: inline-block;
        transition: transform 0.25s ease 0s;
        box-sizing: border-box;
        font-weight: 500;
        font-size: 1.125rem;
        font-style: italic;
        cursor: pointer;
        width: fit-content;
        /* background-color: rgb(255, 255, 255); */
        color: white;
        /* border: 1px solid transparent; */
        margin-right: 1rem;
        margin-top: 1rem;
        background-image: linear-gradient(
            38deg,
            #00ff36 -10%,
            #00ee57 3%,
            #00c5ad 32%,
            #00a4f1 53%,
            #0b18fc 102%,
            #0d00ff 111%
        );
        width: 100%;
        max-width: 120px;
        background-size: 200%;
        background-position: 99%;
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .logo-forbitspace {
        width: 100%;
        max-width: 360px;
        margin-top: 2rem;
        animation: zoom 3s linear infinite;
    }
    .circle-shadow {
        width: 100%;
        max-width: 400px;
        height: 30px;
        border-radius: 50%;
        margin-top: 2rem;
        background-color: #00000030;
        backdrop-filter: blur(4px);
        box-shadow: 1px 1px 15px #00000030;
    }
    @keyframes zoom {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }
    @media screen and (max-width: 576px) {
        h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.2rem;
        }
        .logo-forbitspace {
            max-width: 200px;
        }

        .circle-shadow {
            width: 100%;
            max-width: 220px;
        }
    }
`;

export default NotFoundPage;
