import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

const Social = () => {
    return (
        <BoxSocial>
            <Thumtree>Join Group:</Thumtree>
            <LinnkSocial
                target="_blank"
                href="https://facebook.com"
                title="Fanpage Facebook"
            >
                <img src="./images/fbb.png" alt="logo-facebook" />
            </LinnkSocial>
            <LinnkSocial
                target="_blank"
                href="https://facebook.com"
                title="Telegram"
            >
                <img src="./images/lee.png" alt="logo-facebook" />
            </LinnkSocial>
            <LinnkSocial
                target="_blank"
                href="https://facebook.com"
                title="witter"
            >
                <img src="./images/inn.png" alt="logo-facebook" />
            </LinnkSocial>
            <LinnkSocial
                target="_blank"
                href="https://facebook.com"
                title="Reddit"
            >
                <img src="./images/ogg.png" alt="logo-facebook" />
            </LinnkSocial>
            <LinnkSocial
                target="_blank"
                href="https://facebook.com"
                title="LinkedInT"
            >
                <img src="./images/vera.png" alt="logo-facebook" />
            </LinnkSocial>
        </BoxSocial>
    );
};

const BoxSocial = styled.div`
    position: relative;
    display: flex;
    margin-top: 5px;
`;
const Thumtree = styled.p`
    position: relative;
    display: flex;
    color: #6b6969;
    font-size: 16px;
    margin-top: 5px;
    margin-right: 5px;
`;

const LinnkSocial = styled.a`
    display: block;
    max-width: 22px;
    margin-right: 5px;
    overflow: hidden;
    width: 100%;
    outline: none;
    filter: grayscale(1);
    transition: ease-in-out 0.5s all;

    img {
        width: 100%;
        height: 22px;
    }

    :hover {
        filter: unset;
    }
`;

export default Social;
