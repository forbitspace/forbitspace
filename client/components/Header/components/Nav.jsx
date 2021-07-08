import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => {
    setDropdown(!dropdown);
  };
  return (
    <StyledNav>
      <div className="main-menu">
        <ul className="main-menu-nav">
          <li>
            <Link href="/" activeClassName="active">
              <a href="#" className="text-dark text-visi">
                Space Protocol
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="#" className="text-dark text-visi">
                Aerospace
              </a>
            </Link>
          </li>
          <li>
            <a href="#" className="text-dark text-visi">
              Governance
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-visi">
              Foundation
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-visi">
              Developers
            </a>
          </li>
          <li onMouseEnter={toggle} onMouseLeave={toggle}>
            <a href="#" className="text-dark text-visi">
              Community
            </a>
            <DropdownMenu dropdown={dropdown}>
              <a href="#" target="_blank" className="text-dark text-visi">
                Blog
              </a>
              <a href="#" target="_blank" className="text-dark text-visi">
                Channel
              </a>
            </DropdownMenu>
          </li>
        </ul>
        <div className="main-menu-overlay" />
      </div>
    </StyledNav>
  );
};

const DropdownMenu = styled.div`
  height: ${({ dropdown }) => (!!dropdown ? "60px" : "0")};
  position: absolute;
  top: 35px;
  width: 100px;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  a {
    margin-bottom: 10px !important;
  }
`;

const StyledNav = styled.div`
  li {
    display: flex;
    align-items: center;
  }
`;

const BoxLogo = styled.div`
  position: relative;

  a {
    display: block;
    overflow: hidden;
    width: 100%;
    max-width: 100px;
    transition: ease-in-out 1s all;

    img {
      width: 100%;
      object-fit: cover;
    }

    &:hover {
      transform: rotate(-18deg) scale(1.2);
    }
  }
`;

export default Nav;
