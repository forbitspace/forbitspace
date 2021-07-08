import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container, Row, Col } from "reactstrap";
const DataPra = [
  {
    img: "../images/pramaster/all-time-trader.svg",
  },
  {
    img: "../images/pramaster/all-time-volume.svg",
  },
  {
    img: "../images/pramaster/Approach.svg",
  },
  {
    img: "../images/pramaster/defi-integrations.svg",
  },
  {
    img: "../images/pramaster/liquidity-providers.svg",
  },
  {
    img: "../images/pramaster/multi-chain.svg",
  },
  {
    img: "../images/pramaster/scalability.svg",
  },
  {
    img: "../images/pramaster/splutions.svg",
  },
  {
    img: "../images/pramaster/highlight.svg",
  },
  {
    img: "../images/pramaster/space-NFT.svg",
  },
];

const Pramaster = () => {
  const renderItem = (element) => {
    return (
      <ItemPra className="item-pra">
        <img src={element.img} />
      </ItemPra>
    );
  };

  return (
    <BoxSection>
      <Container>
        <GroupPra className="wrapper-pra">
          {DataPra.map((item) => renderItem(item))}
        </GroupPra>
      </Container>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  padding: 40px 0;
  margin-bottom: 10vh;
`;

const GroupPra = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  transform-style: preserve-3d;
  transition: transform 1s;
  position: relative;
  transform-origin: center;
  display: flex;
  justify-content: center;
  animation: spin3d linear 30s infinite;

  @keyframes spin3d {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-360deg);
    }
  }
`;

const TitlePra = styled.h3`
  font-size: 48px;
  font-weight: bold;
  color: #d5d5d5;
  text-align: center;

  span {
    color: #d5d5d5;
  }

  @media (max-width: 576px) {
    font-size: 38px;
  }
`;

function template(i) {
  return `
      &:nth-child(${i + 1}) {
        transform: rotateY(${i * 36}deg) translateZ(500px);
        @media(max-width: 576px) {
          transform: rotateY(${i * 36}deg) translateZ(200px);
        }
      }
    `;
}
function getAnimations() {
  let str = "";
  for (let index = 0; index < 10; index += 1) {
    str += template(index);
  }
  return str;
}

function animation1(o, a, b, c) {
  let str = `
  0% {
    opacity: ${o};
  }
  `;
  for (let i = 1; i <= 10; i += 1) {
    str += `
      ${i * 10}% {
        opacity: ${i == c ? 1 : i == a || i == b ? 0.8 : 0};
      }
    `;
  }
  return str;
}

const ItemPra = styled.div`
  display: flex;
  position: absolute;
  background: none;
  width: 280px;
  height: 150px;
  font-size: 5em;
  text-align: center;
  flex-direction: column;
  padding-top: 15px;
  color: #fff;
  border-radius: 10px;
  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
  }

  ${getAnimations()}

  :nth-child(1) {
    animation: move1 linear infinite 30s;
    @keyframes move1 {
      ${animation1(1, 1, 9, 10)}
    }
  }
  :nth-child(2) {
    animation: move2 linear infinite 30s;
    @keyframes move2 {
      ${animation1(0.8, 2, 10, 1)}
    }
  }
  :nth-child(3) {
    animation: move3 linear infinite 30s;
    @keyframes move3 {
      ${animation1(0, 1, 3, 2)}
    }
  }
  :nth-child(4) {
    animation: move4 linear infinite 30s;
    @keyframes move4 {
      ${animation1(0, 2, 4, 3)}
    }
  }
  :nth-child(5) {
    animation: move5 linear infinite 30s;
    @keyframes move5 {
      ${animation1(0, 3, 5, 4)}
    }
  }
  :nth-child(6) {
    animation: move6 linear infinite 30s;
    @keyframes move6 {
      ${animation1(0, 4, 6, 5)}
    }
  }
  :nth-child(7) {
    animation: move7 linear infinite 30s;
    @keyframes move7 {
      ${animation1(0, 5, 7, 6)}
    }
  }
  :nth-child(8) {
    animation: move8 linear infinite 30s;
    @keyframes move8 {
      ${animation1(0, 6, 8, 7)}
    }
  }
  :nth-child(9) {
    animation: move9 linear infinite 30s;
    @keyframes move9 {
      ${animation1(0, 7, 9, 8)}
    }
  }
  :nth-child(10) {
    animation: move10 linear infinite 30s;
    @keyframes move10 {
      ${animation1(0.8, 8, 10, 9)}
    }
  }

  p {
    font-size: 16px;
    color: #000;
  }
`;

export default Pramaster;
