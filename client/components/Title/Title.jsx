import React, { useState } from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return <ContentTitle className="title">{title}</ContentTitle>;
};

const ContentTitle = styled.h3`
  margin-bottom: 25px;
  font-size: 48px;
  overflow-wrap: normal;
  text-align: center;
  text-shadow: 0 0 40px rgb(192 219 255 / 46%), 0 0 34px rgb(65 120 255 / 24%);
  // background: linear-gradient(
  //   90deg
  //   ,#080808,#0e0e0e 50%,#165279 70%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  @media (max-width: 770px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export default Title;
