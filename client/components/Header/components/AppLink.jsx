import React from "react";
import styled from "styled-components";

const AppLink = ({ marginRight }) => {
  return (
    <ButtonBanner href="/" marginRight={marginRight}>
      {" "}
      Launch App
    </ButtonBanner>
  );
};

const ButtonBanner = styled.a`
  padding: 0.35rem 0.85rem;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  color: white;
  /* border: 1px solid transparent; */
  margin-right: 1rem;
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
  max-width: 210px;
  /* &:hover { */
  background-size: 200%;
  background-position: right;
  color: white;
  /* } */
  :hover {
    color: white;
  }
`;

export default AppLink;
