import React, { useState } from "react";
import styled from "styled-components";

const Title = ({ title}) => {
  return <ContentTitle size="22px" className="title">{title}</ContentTitle>;
};

const ContentTitle = styled.h3`
    max-width: 600px;
    margin-bottom: 25px;
    font-size: ${(props) => props.size};
    font-weight: bold;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 2px solid #E6ECF1;
    @media(max-width:770px){
      font-size:24px;
    }
    img{
      max-width:30px;
      width: 100%;
      margin-top:-7px;
    }
`;

export default Title;
