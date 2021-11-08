import React from "react";
import { Link } from "../../route/index.js";
import styled from "styled-components";

const Logo = () => {
    return (
        <BoxLogo>
            <Link href="/">
                <a>
                    <img
                        src="../images/logo/logo-forbitspace-dark.png"
                        alt="forbitspace"
                        className="logo--desktop"
                    />
                    <img
                        src="../images/logo/logo-sm-dark.png"
                        alt="forbitspace"
                        className="logo--mobile"
                    />
                </a>
            </Link>
        </BoxLogo>
    );
};

const BoxLogo = styled.div`
    position: relative;
    a {
        display: block;
        overflow: hidden;
        width: 100%;
        max-width: 180px;
        transition: ease-in-out 1s all;

        img {
            width: 100%;
            margin-left: 0;
        }
    }
    .logo--mobile {
        display: none;
        max-width: 45px;
    }
    @media (max-width: 576px) {
        max-width: 120px;
        .logo--desktop {
            display: none;
        }
        .logo--mobile {
            display: block;
        }
    }
`;

export default Logo;
