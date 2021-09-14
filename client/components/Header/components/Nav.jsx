import React from "react";
// import Link from "next/link";
import { navContent } from "../constants/index";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div className="main-menu">
        <ul className="main-menu-nav">
          {/* <li>
            <Link href="/" activeClassName="active">
              <a href="#" className="text-dark text-visi">
                Space Trade
              </a>
            </Link>
          </li>*/}
          {navContent.map((item, index) => (
            <li>
              <a href="#" className="text-dark text-visi">
                {item.nav}
              </a>
              <DropdownMenu className="dropdown-content">
                {item.contents.map((item, index) => (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-dark text-visi"
                  >
                    {item.content}
                  </a>
                ))}
              </DropdownMenu>
            </li>
          ))}
        </ul>
        <div className="main-menu-overlay" />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  li {
    display: flex;
    align-items: center;
    :hover {
      .dropdown-content {
        max-height: 300px;
      }
    }
    .text-visi {
      font-weight: 600;
    }
  }
`;

const DropdownMenu = styled.div`
  max-height: 0;
  height: auto;
  position: absolute;
  top: 35px;
  width: max-content;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  a {
    margin-bottom: 10px !important;
    font-weight: 300 !important;
  }
`;

export default Nav;
