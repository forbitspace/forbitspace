import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { supportedLanguge } from "../constants";



const Languge = () => {
  const [Langs, setLangs] = useState('En')

  return (
    <StyledLanguge>
      <button className="name">
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <svg
            viewBox="0 0 24 24"
            color="#4593f8"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-hBEYos kbqutz icon-dark"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"></path>
          </svg>
        </span>
        <span style={{ display: 'flex', alignItems: 'center' }} className="text">
          {Langs}
        </span>
      </button>
      <StyledRow className="row row-bg-darkmode">
        <React.Fragment>
          {supportedLanguge.map((item, i) => {
            return <Row
              onChoose={() => setLangs(item.abbreviation)}
              key={`card_${i}`}
              name={item.name} />;
          })}
        </React.Fragment>
      </StyledRow>
    </StyledLanguge>
  );
};
const Row = ({ name, onChoose }) => {
  return (
    <StyledButton onClick={onChoose}>{name}</StyledButton>

  );
};



const StyledLanguge = styled.div`
  position: relative;
  margin-right: 15px;
  z-index:15;
  &:hover .row,
  
  &:focus-within .row{
    display: flex;
  }

  span {
    color: black;
  }
  .name{
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    border: 0px;
    border-radius: 16px;
    box-shadow: none;
    color: #4593f8 !important;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: max-content;
    height: 32px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 16px;
    transition: background-color 0.2s ease 0s;
    margin-left: 5px;

    padding: 0;
    border-radius: 8px;
    svg{
        fill: black;
        margin-top: -3px;
    }
  }
`;

const StyledButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  border: 0px;
  border-radius: 8px;
  box-shadow: none;
  color: #4593f8;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 32px;
  line-height: 1;
  letter-spacing: 0.03em;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  padding: 0px 16px;
  transition: background-color 0.2s ease 0s;
  min-height: 32px;
  height: auto;

  &:focus{
    outline: none;
    background: #cfdfe9;
    border-radius: 0;
  }

  &:hover { 
    background: #0e182d;
  }
`;

const StyledRow = styled.div`
  width: 200px;
  display: none;
  position: absolute;
  top: 30px;
  transform: translate(-50%, 0px);
  padding: 10px;
  max-height: 400px;
  overflow-y: scroll;
  z-index: 15;
  border-radius: 0;
  background: white;
  border-radius: 12px;

  &::-webkit-scrollbar-thumb {
    background: #169eff; 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar {
    width: 4px;
  }
`;

export default Languge;
