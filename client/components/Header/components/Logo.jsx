import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <BoxLogo>
      <a href="/">
        <img
          src="../images/Forbitspace-comming/logo-forbitspace.png"
          alt="forbitswap"
          className="logo-dark-mode"
        />
        {/* <img
          src="images/logo-forbitswap-light.svg"
          alt="forbitswap"
          className="logo-light-mode"
        /> */}
      </a>
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
    }
  }
  .logo-dark-mode {
    display: none;
  }

  @media (max-width: 576px) {
    max-width: 120px;
  }
`;

export default Logo;
