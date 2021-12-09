import React from "react";
import styled from "styled-components";

const AppLink = ({ marginRight }) => {
    return (
        <ButtonBanner
            href="https://app.forbitspace.com/"
            target="_blank"
            rel="noreferrer"
            marginRight={marginRight}
        >
            {" "}
            Launch App
        </ButtonBanner>
    );
};

const ButtonBanner = styled.a`
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 1.125rem;
    font-style: italic;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;

    width: 100%;
    max-width: 150px;
    border-radius: 12px;
    padding: 0.35rem 0.85rem;
    margin-right: 1rem;
    transform: scale(0.98);
    transition: transform 0.25s ease 0s;
    box-sizing: border-box;
    display: inline-block;

    background-color: rgb(255, 255, 255);
    color: white;

    background-image: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    overflow: hidden;
    background-size: 200%;
    background-position: 99%;
`;

export default AppLink;
