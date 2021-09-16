exports.ids = [27,36];
exports.modules = {

/***/ "kSri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Home/components/Pramaster.jsx
var __jsx = external_react_default.a.createElement;



const DataPra = [{
  img: "../images/pramaster/all-time-trader.svg"
}, {
  img: "../images/pramaster/all-time-volume.svg"
}, {
  img: "../images/pramaster/Approach.svg"
}, {
  img: "../images/pramaster/defi-integrations.svg"
}, {
  img: "../images/pramaster/liquidity-providers.svg"
}, {
  img: "../images/pramaster/multi-chain.svg"
}, {
  img: "../images/pramaster/scalability.svg"
}, {
  img: "../images/pramaster/splutions.svg"
}, {
  img: "../images/pramaster/highlight.svg"
}, {
  img: "../images/pramaster/space-NFT.svg"
}];

const Pramaster = () => {
  const renderItem = (element, index) => {
    return __jsx(ItemPra, {
      className: "item-pra",
      key: index
    }, __jsx("img", {
      src: element.img
    }));
  };

  return __jsx(BoxSection, null, __jsx(external_reactstrap_["Container"], null, __jsx(GroupPra, {
    className: "wrapper-pra"
  }, DataPra.map((item, index) => renderItem(item, index)))));
};

const BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 40px 0;
    margin-bottom: 10vh;
`;
const GroupPra = external_styled_components_default.a.div`
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
const TitlePra = external_styled_components_default.a.h3`
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

const ItemPra = external_styled_components_default.a.div`
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
/* harmony default export */ var components_Pramaster = (Pramaster);
// CONCATENATED MODULE: ./client/components/Title/Title.jsx
var Title_jsx = external_react_default.a.createElement;



const Title = ({
  title
}) => {
  return Title_jsx(ContentTitle, {
    className: "title"
  }, title);
};

const ContentTitle = external_styled_components_default.a.h3`
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
/* harmony default export */ var Title_Title = (Title);
// CONCATENATED MODULE: ./client/components/Title/index.js

// CONCATENATED MODULE: ./client/components/Home/components/Growing.jsx
var Growing_jsx = external_react_default.a.createElement;





const Growing = () => {
  return Growing_jsx(Growing_BoxSection, null, Growing_jsx(external_reactstrap_["Container"], null, Growing_jsx(GroupGrow, null, Growing_jsx(Title_Title, {
    title: "Defi space a growing protocol ecosystem."
  }), Growing_jsx(DrepGrow, {
    className: "text-dark"
  }, "forbitswap is a space protocol an advanced transaction builder made simple - a system where anyone can trading, readily manage a range of different activities, from yield farming to leveraged position and debt refinancing, forbitswap protocol potentially to a more robust and transparent financial infrastructure."), Growing_jsx(ThumGrow, null, Growing_jsx("img", {
    src: "./images/200-defi.svg",
    alt: ""
  })))));
};

const Growing_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 45px 0;
`;
const GroupGrow = external_styled_components_default.a.div`
    text-align: center;
    @media (max-width: 576px) {
        text-align: left;
    }
`;
const DrepGrow = external_styled_components_default.a.p`
    font-size: 24px;
    color: #000;
    margin-bottom: 25px;
    font-weight: 300;
    font-family: helvetica neue;

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`;
const BoxLight = external_styled_components_default.a.div`
    display: block;
    margin: 0px;
    border-radius: 50%;
    height: 600px;
    width: 600px;
    background: linear-gradient(
        to bottom,
        rgb(255 255 255) 0%,
        rgb(213 243 255) 0%,
        rgb(220 250 255) 10%,
        rgb(222 247 255) 21%,
        rgb(167 235 255) 52%,
        rgb(255 255 255) 100%
    );
    position: absolute;
    left: -10%;
    top: 0%;
    bottom: auto;
    opacity: 0.5;
    z-index: -1;
    -webkit-transform: rotate(220deg);
    -ms-transform: rotate(220deg);
    transform: rotate(220deg);
`;
const ThumGrow = external_styled_components_default.a.p`
    max-width: 700px;
    margin: 0 auto;

    img {
        width: 100;
    }
`;
/* harmony default export */ var components_Growing = (Growing);
// CONCATENATED MODULE: ./client/components/Home/constants/index.js
const DataSuite = [{
  title: "Governance",
  dreption: "A unanimous governance mechanism to adapt decentralized network changes over time",
  link: "/",
  background: "./images/suite/1.svg",
  delay: "200"
}, {
  title: "Rewards",
  dreption: "Earn rewards from liquidity mining and every time you make a trade",
  link: "/",
  background: "./images/suite/2.svg",
  delay: "300"
}, {
  title: "DEX aggregation",
  dreption: "Access liquidity on multi chains from all decentralised liquidity providers",
  link: "/",
  background: "./images/suite/3.svg",
  delay: "400"
}, {
  title: "Developer friendly",
  dreption: "Easily integrate ZeeSuite with your existing workflows",
  link: "/",
  background: "./images/suite/4.svg",
  delay: "500"
}, {
  title: "Gasless",
  dreption: "Economical trades with gasless transactions realized by using transaction fee mining",
  link: "/",
  background: "./images/suite/5.svg",
  delay: "600"
}];
const DataToken = [{
  icon: "./images/space-special/token-burn.svg",
  iconLight: "./images/light-icon/Token-Burn.svg",
  title: "Token Burn",
  dreption: "10% of the tranding fees is used to buy and burn tokens.",
  link: "/",
  delay: "200"
}, {
  icon: "./images/space-special/oracle.svg",
  iconLight: "./images/light-icon/Oracles.svg",
  title: "Oracles",
  dreption: "Highly decentralized, manipulation-resistant, on-chain price feeds.",
  link: "/",
  delay: "200"
}, {
  icon: "./images/space-special/Flash-Swaps.svg",
  iconLight: "./images/light-icon/Flash-Swaps.svg",
  title: "Flash Swaps",
  dreption: "Withdraw the reserves of any ERC20 token on forbitswap and execute arbitrary logic.",
  link: "/",
  delay: "200"
}, {
  icon: "./images/space-special/Programmable-Liquidity.svg",
  iconLight: "./images/light-icon/Programmable-Liquidity.svg",
  title: "Programmable Liquidity",
  dreption: "A step-by-step guide to getting started building interfaces with forbitswap.",
  link: "/",
  delay: "200"
}];
const DataCom = [{
  icon: "./images/icon-social/fb.svg",
  title: "Facebook",
  delay: "50",
  link: "/"
}, {
  icon: "./images/icon-social/tw.svg",
  title: "Twitter",
  delay: "100",
  link: "/"
}, {
  icon: "./images/icon-social/tele.svg",
  title: "Instagram",
  delay: "150",
  link: "/"
}, {
  icon: "./images/icon-social/medium.svg",
  title: "Medium",
  delay: "200",
  link: "/"
}, {
  icon: "./images/icon-social/reddit.svg",
  title: "Reddit",
  delay: "250",
  link: "/"
}, {
  icon: "./images/icon-social/discord.svg",
  title: "Discord",
  delay: "0",
  link: "/"
}];
const DataFBTC = [{
  icon: "./images/fbtc-token-icon/Efficiency-1.svg",
  iconLight: "./images/light-icon/Efficiency.svg",
  title: "Efficiency",
  delay: "50",
  animate: "fade-up",
  description: "DeFi replaces some of these trust requirements with smart contracts."
}, {
  icon: "./images/fbtc-token-icon/Transparency.svg",
  iconLight: "./images/light-icon/Transparency.svg",
  title: "Transparency",
  delay: "100",
  animate: "fade-up",
  description: "DeFi applications are transparent. All transactions are publicly observable, and the smart contract code can be analyzed on-chain."
}, {
  icon: "./images/fbtc-token-icon/Accessibility.svg",
  iconLight: "./images/light-icon/Accessibility.svg",
  title: "Accessibility",
  delay: "150",
  animate: "fade-up",
  description: "DeFi protocols can be used by anyone, open and accessible financial system."
}, {
  icon: "./images/fbtc-token-icon/Composability.svg",
  iconLight: "./images/light-icon/Composability.svg",
  title: "Composability",
  delay: "150",
  animate: "fade-up",
  description: "The shared settlement layer allows these protocols and applications to interconnect. On-chain fund protocols can make use of decentralized exchange protocols or trading to achieve leveraged positions through protocols."
}, {
  icon: "./images/fbtc-token-icon/Centric chains.svg",
  iconLight: "./images/light-icon/Centric chains.svg",
  title: "Centric chains",
  delay: "150",
  animate: "fade-up",
  description: "Scaling and Multi-Chain open the crypto economy is increasingly becoming a cross-chain ecosystem where users want great DeFi services on multiple blockchains and scaling solutions simultaneously."
}];
const ContributorData = [{
  img: "coingecko"
}, {
  img: "chainlink"
}, {
  img: "graph"
}, {
  img: "metamask"
}, {
  img: "dune"
}, {
  img: "wallet"
}, {
  img: "binance"
}, {
  img: "polygon"
}, {
  img: "coinbase"
}];
const DataSocialLinkFooter = [{
  url: "./images/icon-social-footer/1.svg"
}, {
  url: "./images/icon-social-footer/2.svg"
}, {
  url: "./images/icon-social-footer/3.svg"
}, {
  url: "./images/icon-social-footer/4.svg"
}, {
  url: "./images/icon-social-footer/5.svg"
}, {
  url: "./images/icon-social-footer/6.svg"
}];
// CONCATENATED MODULE: ./client/components/Home/components/Suite.jsx
var Suite_jsx = external_react_default.a.createElement;






const Suite = () => {
  const renderItem = (element, index) => {
    return Suite_jsx(Itemsuite, {
      href: element.link,
      key: index
    }, Suite_jsx(WrapperImg, null, Suite_jsx(BackgroundItem, {
      src: element.background
    })), Suite_jsx(WrapperContent, null, Suite_jsx(TitleSuite, {
      className: "text-dark text-visi"
    }, element.title), Suite_jsx(DrepSuite, {
      className: "text-dark text-visi"
    }, element.dreption)));
  };

  return Suite_jsx(Suite_BoxSection, null, Suite_jsx(external_reactstrap_["Container"], null, Suite_jsx("div", {
    className: "groupsuite"
  }, Suite_jsx(Title_Title, {
    title: "The decentralized trading Protocol a highly scalable and global ecosystem."
  }), Suite_jsx(Dreption, {
    className: "text-dark"
  }, "We build state-of-the-art open-source DeFi applications develop more intuitive user interfaces and simplify to access the forbitswap protocol and contribute to the world of deventralized finance."), Suite_jsx(ListSuite, null, DataSuite.map((item, index) => renderItem(item, index))))));
};

const WrapperImg = external_styled_components_default.a.div`
    max-width: 250px;
    width: 100%;
    max-height: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 576px) {
        max-width: 150px;
        margin-bottom: 10px;
    }
`;
const BackgroundItem = external_styled_components_default.a.img``;
const WrapperContent = external_styled_components_default.a.div``;
const Suite_BoxSection = external_styled_components_default.a.section`
    position: relative;
    margin-bottom: 5rem;
`;
const ListSuite = external_styled_components_default.a.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
const Itemsuite = external_styled_components_default.a.a`
    text-align: center;
    text-decoration: none;
    @media (max-width: 576px) {
        margin-bottom: 20px;
        width: 80%;
        margin: 0 auto;
    }
`;
const Dreption = external_styled_components_default.a.p`
    font-size: 24px;
    color: #000;
    margin-bottom: 45px;
    text-align: center;
    font-weight: 300;

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`;
const ThumSuite = external_styled_components_default.a.p`
    max-width: 60px;
    width: 100%;

    img {
        width: 100%;
    }
`;
const TitleSuite = external_styled_components_default.a.h4`
    font-size: 22px;
    color: #fff;
    margin: 0 auto 5px;
    text-align: center;
    width: fit-content;

    @media (max-width: 576px) {
        text-align: center;
    }
`;
const DrepSuite = external_styled_components_default.a.p`
    font-size: 16px;
    color: #fff;
    text-align: center;
    width: 100%;
    margin: 0;
    max-width: 200px;
    margin: 0 auto;
    font-weight: 300;

    @media (max-width: 576px) {
        font-size: 1.25rem;
        width: 100%;
        margin: unset;
        max-width: unset;
    }
`;
/* harmony default export */ var components_Suite = (Suite);
// CONCATENATED MODULE: ./client/components/Home/components/Superpowers.jsx
var Superpowers_jsx = external_react_default.a.createElement;






const Superpowers = () => {
  const renderItem = (element, index) => {
    return Superpowers_jsx(ItemPower, {
      className: "item-power",
      key: index
    }, Superpowers_jsx("a", {
      href: element.link,
      className: "text"
    }, Superpowers_jsx(ThumItem, null, Superpowers_jsx(Img, {
      src: element.icon,
      alt: ""
    })), Superpowers_jsx("h4", {
      className: "titleitem"
    }, element.title), Superpowers_jsx("p", {
      className: "drepitem text-dark"
    }, element.dreption)));
  };

  return Superpowers_jsx(Superpowers_BoxSection, null, Superpowers_jsx(external_reactstrap_["Container"], null, Superpowers_jsx("div", {
    className: "grouppower"
  }, Superpowers_jsx(Title_Title, {
    title: "Space special for infrastructure tooling and Developer Defi"
  }), Superpowers_jsx(DrepPower, {
    className: "text-dark"
  }, "The protocol\u2019s core design is composability, different components of a system can easily connect and interoperate. Integrated DeFi applications, composable code has created a powerful network effect and launch DeFi protocols with the full-stack tooling and security integrations"), Superpowers_jsx(ListSuper, null, DataToken.map((item, index) => renderItem(item, index)), Superpowers_jsx(ItemCenter, {
    href: "#",
    target: "_blank",
    className: "text item-power-center"
  }, Superpowers_jsx(ThumItem, null, Superpowers_jsx(Img, {
    src: "./images/space-special/multi-chain.svg",
    alt: ""
  })), Superpowers_jsx("h4", {
    className: "titleitem"
  }, "Multi-Chain"), Superpowers_jsx("p", {
    className: "drepitem text-dark"
  }, "Bridging blockchain platforms Multi-Chain Connectivity"))))));
};

const Superpowers_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 45px 0;
    @media (max-width: 576px) {
        padding-top: 0;
    }
`;
const BoxRound = external_styled_components_default.a.section`
    display: block;
    margin: 0px;
    border-radius: 50%;
    height: 550px;
    width: 550px;
    background: linear-gradient(
        to bottom,
        rgb(255 255 255) 0%,
        rgb(213 243 255) 0%,
        rgb(220 250 255) 10%,
        rgb(222 247 255) 21%,
        rgb(167 235 255) 52%,
        rgb(255 255 255) 100%
    );
    position: absolute;
    left: -10%;
    top: 0%;
    bottom: auto;
    opacity: 0.5;
    z-index: -1;
    -webkit-transform: rotate(220deg);
    -ms-transform: rotate(220deg);
    transform: rotate(220deg);
`;
const ListSuper = external_styled_components_default.a.div`
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 120px;
    justify-content: space-around;
    position: relative;

    @media (max-width: 576px) {
        justify-content: center;
    }
    @media (max-width: 850px) {
        gap: 20px;
    }
`;
const DrepPower = external_styled_components_default.a.p`
    font-size: 24px;
    color: #000;
    margin: 0 auto;
    margin-bottom: 45px;
    text-align: center;
    font-weight: 300;

    @media (max-width: 576px) {
        font-size: 1.25rem;
        text-align: left;
    }
`;
const ThumItem = external_styled_components_default.a.span`
    max-width: 80px;
`;
const Img = external_styled_components_default.a.img`
    max-width: 80px;
    width: 100%;
    margin: 15px 0;
`;
const ItemCenter = external_styled_components_default.a.div`
    max-width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    max-height: 300px;
    text-align: center;
    padding-top: 50px;
    border: 1px solid #0168ff;
    p {
        max-width: 220px;
        margin: 0 auto;
    }

    @media (max-width: 850px) {
        position: unset;
        max-width: 340px;
        box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px,
            rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;
        background: #fff;
        transition: ease-in-out 0.3s all;
        text-align: center;
        border-radius: 33px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: 1px solid #0168ff;
        display: block;
        width: 100%;
        height: 100%;
        padding: 13px 15px;
        text-decoration: none;
        color: black;
        &:hover {
            transform: scale(1.05);
        }
    }
`;
const ItemPower = external_styled_components_default.a.div`
    max-width: 340px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px,
        rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;
    background: #fff;
    transition: ease-in-out 0.3s all;
    text-align: center;
    border-radius: 33px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid #0168ff;

    a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 13px 15px;
        text-decoration: none;
        color: black;
    }

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 770px) {
        margin: 0 auto 10px;
    }

    @media (max-width: 576px) {
        p {
            font-size: 1.25rem;
            font-weight: 300;
        }
    }
`;
/* harmony default export */ var components_Superpowers = (Superpowers);
// CONCATENATED MODULE: ./client/components/Home/components/Banner.jsx
var Banner_jsx = external_react_default.a.createElement;


 // import Title from "../../Title";
// import DecentralizedText from "./DecentralizedText";
// import ButtonApp from "../../Header/components/AppLink";

const Banner = () => {
  return Banner_jsx(Banner_BoxSection, null, Banner_jsx(WrapImgBanner, null, Banner_jsx("img", {
    src: "../images/home-page/banner.png",
    alt: ""
  }), Banner_jsx(BackgroundBanner, null)), Banner_jsx(external_reactstrap_["Container"], null, Banner_jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, Banner_jsx(Banner_Title, null, Banner_jsx("img", {
    src: "../images/home-page/Logo-1-02.png",
    alt: ""
  })), Banner_jsx(Text, null, "The Decentralized Exchange Aggregator"), Banner_jsx(SubText, null, "The forbitspace unity Decentralized Protocols that allows crypto traders to tap deep liquidity and receive better pricing one single interface."))));
};

const Banner_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 0;

  @media (max-width: 770px) {
    padding-top: 50px;
    min-height: 100vh;
  }
`;
const WrapImgBanner = external_styled_components_default.a.div`
  width: 100vw;
  height: auto;
  max-width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
const BackgroundBanner = external_styled_components_default.a.div`
  background: url("./images/background-banner-01-min.png");
  background-size: cover;
  background-position: center;
  /* position: absolute; */
  top: -190px;
  left: 0;
  width: 100%;
  /* height: 100vh; */
  z-index: -1;
  opacity: 0.4;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;
const Banner_Title = external_styled_components_default.a.h2`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1;
  img {
    max-width: 400px;
  }
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
    img {
      max-width: 200px;
    }
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`; // const WrapperButtonApp = styled.div`
//   max-width: 350px;
//   /* margin: 0 auto; */
//   /* width: 90%; */
//   text-align: left;
//   @media (max-width: 1200px) {
//     display: block;
//   }
//   @media (max-width: 576px) {
//     text-align: center;
//     max-width: unset;
//   }
// `;
// const TitleBanner = styled.h2`
//   font-size: 40px;
//   font-weight: bold;
//   text-align: right;
//   font-family: "Prompt", sans-serif;
//   color: #3a3939;
//   margin-bottom: 30vh;
//   line-height: 50px;
//   animation: animationTextBanner 3s 1;
//   @media (max-width: 770px) {
//     font-size: 35px;
//     margin-bottom: 50px;
//     text-align: center;
//   }
//   @media (max-width: 576px) {
//     font-size: 1.6rem;
//     text-align: left;
//   }
// `;

/* harmony default export */ var components_Banner = (Banner);
// CONCATENATED MODULE: ./client/components/Home/components/Community.jsx
var Community_jsx = external_react_default.a.createElement;






const Community = () => {
  const renderItem = (element, index) => {
    return Community_jsx(ItemCom, {
      key: index
    }, Community_jsx("a", {
      href: element.link
    }, Community_jsx(ThumIcon, null, Community_jsx("img", {
      src: element.icon,
      alt: ""
    }))));
  };

  return Community_jsx(Community_BoxSection, null, Community_jsx(external_reactstrap_["Container"], null, Community_jsx("div", {
    className: "groupsuite"
  }, Community_jsx(Title_Title, {
    title: "A global community."
  }), Community_jsx(Community_DrepSuite, {
    className: "text-dark"
  }, "Learn more about forbitswap, chat with the team, others in the community, and have your say in shaping the future of the forbitswap protocol."), Community_jsx(ListCom, null, DataCom.map((item, index) => renderItem(item, index))))));
};

const Community_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 45px 0;
`;
const ListCom = external_styled_components_default.a.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;
const ItemCom = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.3s all;
    cursor: pointer;

    :last-child {
        margin-right: 0;
    }

    a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        transition: all ease-in-out 0.3s;
    }

    &:hover a {
        transform: scale(1.2);
    }
`;
const Community_DrepSuite = external_styled_components_default.a.p`
    font-size: 22px;
    color: #000;
    margin-bottom: 90px;
    text-align: center;
    font-weight: 100;

    @media (max-width: 576px) {
        font-size: 1.25rem;
        text-align: left;
    }
`;
const ThumIcon = external_styled_components_default.a.p`
    max-width: 80px;
    width: 100%;

    img {
        width: 100%;
    }
`;
const TitleIcon = external_styled_components_default.a.h4`
    font-size: 26px;
    color: ${props => props.color};
    margin-bottom: 25px;
    text-align: center;
    font-weight: bold;
`;
/* harmony default export */ var components_Community = (Community);
// CONCATENATED MODULE: ./client/components/Home/components/FBTCToken.jsx
var FBTCToken_jsx = external_react_default.a.createElement;






const FBTCToken = () => {
  const renderItem = (element, index) => {
    return FBTCToken_jsx(FBTCToken_ItemCom, {
      key: index
    }, FBTCToken_jsx(FBTCToken_ThumIcon, {
      className: "thumb-icon"
    }, FBTCToken_jsx("img", {
      className: "img-dark",
      src: element.icon,
      alt: ""
    }), FBTCToken_jsx("img", {
      className: "img-light",
      src: element.iconLight,
      alt: ""
    })), FBTCToken_jsx(FBTCToken_TitleIcon, {
      color: element.color
    }, element.title), FBTCToken_jsx(Desc, {
      className: "text-dark"
    }, element.description));
  };

  return FBTCToken_jsx(FBTCToken_BoxSection, null, FBTCToken_jsx(external_reactstrap_["Container"], null, FBTCToken_jsx("div", {
    className: "groupsuite"
  }, FBTCToken_jsx(Title_Title, {
    title: "Community Collaboration in an Open Environment"
  }), FBTCToken_jsx(FBTCToken_ListCom, null, DataFBTC.map((item, index) => renderItem(item, index))))));
};

const Desc = external_styled_components_default.a.p`
    font-size: 24px;
    font-weight: 300;
    @media (max-width: 576px) {
        font-size: 1.25rem;
        text-align: center;
    }
`;
const FBTCToken_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 45px 0;
    @media (max-width: 576px) {
        padding: 0;
    }
`;
const FBTCToken_ListCom = external_styled_components_default.a.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 100px;
    margin-top: 50px;
    gap: 25px;
    @media (max-width: 576px) {
        padding-left: unset;
    }
`;
const FBTCToken_ItemCom = external_styled_components_default.a.div`
    width: 30%;
    height: fit-content;
    overflow: hidden;
    transition: ease-in-out 0.3s all;
    cursor: pointer;

    a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        border-radius: 50%;
        background: #fff;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        transition: all ease-in-out 0.3s;
    }

    @media (max-width: 770px) {
        width: 45%;
        margin-right: 30px;
        margin-bottom: 25px;
    }
    &:hover a {
        transform: scale(1.2);
    }
    @media (max-width: 576px) {
        width: 90%;
        margin: 0 auto;
    }
`;
const FBTCToken_ThumIcon = external_styled_components_default.a.p`
    max-width: 80px;
    width: 100%;
    margin-bottom: 1rem;
    img {
        width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 100px;
        margin: 0 auto;
    }
`;
const FBTCToken_TitleIcon = external_styled_components_default.a.h4`
    font-size: 26px;
    color: ${props => props.color};
    margin-bottom: 10px;
    @media (max-width: 576px) {
        text-align: center;
    }
`;
/* harmony default export */ var components_FBTCToken = (FBTCToken);
// CONCATENATED MODULE: ./client/components/Home/components/Ecosystem.jsx
var Ecosystem_jsx = external_react_default.a.createElement;





const Ecosystem_Community = () => {
  return Ecosystem_jsx(Ecosystem_BoxSection, null, Ecosystem_jsx(Container, null, Ecosystem_jsx(Title_Title, {
    title: "Ecosystem partners"
  }), Ecosystem_jsx(WrapperOrbit, null, Ecosystem_jsx(WrapperBackground, null, Ecosystem_jsx(Background, {
    src: "./images/ecosystem/1.svg",
    alt: "circle orbit"
  }), Ecosystem_jsx("img", {
    className: "icon icon7",
    src: "./images/ecosystem/Group 36856.svg",
    alt: "icon"
  }), Ecosystem_jsx("img", {
    className: "icon icon8",
    src: "./images/ecosystem/usdt.svg",
    alt: "icon"
  }), Ecosystem_jsx("img", {
    className: "icon icon9",
    src: "./images/ecosystem/USDC.svg",
    alt: "icon"
  })), Ecosystem_jsx("div", {
    className: "circle-1"
  }, Ecosystem_jsx("img", {
    src: "./images/ecosystem/2.svg",
    alt: ""
  }), Ecosystem_jsx("img", {
    className: "icon icon1",
    src: "./images/ecosystem/Binance.svg",
    alt: "binance"
  }), Ecosystem_jsx("img", {
    className: "icon icon2",
    src: "./images/ecosystem/meta.svg",
    alt: "metamask"
  }), Ecosystem_jsx("img", {
    className: "icon icon3",
    src: "./images/ecosystem/coinbase.svg",
    alt: "coinbase"
  })), Ecosystem_jsx("div", {
    className: "circle-2"
  }, Ecosystem_jsx("img", {
    src: "./images/ecosystem/3.svg",
    alt: ""
  }), Ecosystem_jsx("img", {
    className: "icon icon1",
    src: "./images/ecosystem/thegraph.svg",
    alt: "thegraph"
  }), Ecosystem_jsx("img", {
    className: "icon icon2",
    src: "./images/ecosystem/poly.svg",
    alt: "poly"
  }), Ecosystem_jsx("img", {
    className: "icon icon3",
    src: "./images/ecosystem/ETH.svg",
    alt: "ETH"
  })), Ecosystem_jsx("div", {
    className: "circle-3"
  }, Ecosystem_jsx("img", {
    src: "./images/ecosystem/4.svg",
    alt: "icon"
  }), Ecosystem_jsx("img", {
    className: "icon icon1",
    src: "./images/ecosystem/chainlink.svg",
    alt: "chainlink"
  }), Ecosystem_jsx("img", {
    className: "icon icon2",
    src: "./images/ecosystem/Group 36638.svg",
    alt: "icon"
  }), Ecosystem_jsx("img", {
    className: "icon icon3",
    src: "./images/ecosystem/Group 36645.svg",
    alt: "icon"
  }), Ecosystem_jsx("img", {
    className: "icon icon4",
    src: "./images/ecosystem/Group 36649.svg",
    alt: "icon"
  }), Ecosystem_jsx("img", {
    className: "icon icon5",
    src: "./images/ecosystem/wallet.svg",
    alt: "wallet"
  }), Ecosystem_jsx("img", {
    className: "icon icon6",
    src: "./images/ecosystem/Group 36854.svg",
    alt: "icon"
  })), Ecosystem_jsx(LogoCenter, null, Ecosystem_jsx("img", {
    src: "./images/ecosystem/fb-partner.svg",
    alt: "icon forbit logo"
  })))));
};

const LogoCenter = external_styled_components_default.a.div`
  img {
    max-width: 50px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @media (max-width: 650px) {
    img {
      max-width: 30px;
    }
  }
  @media (max-width: 375px) {
    img {
      max-width: 25px;
    }
  }
`;
const WrapperBackground = external_styled_components_default.a.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate-right linear 25s infinite;
  @keyframes rotate-right {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Container = external_styled_components_default.a.div`
  position: relative;
  min-height: 800px;
  @media (max-width: 576px) {
    min-height: 500px;
  }
`;
const Background = external_styled_components_default.a.img`
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const WrapperOrbit = external_styled_components_default.a.div`
  position: relative;
  max-width: 662px;
  width: 100%;
  margin: 410px auto 0;
  .icon {
    width: 50px;
    position: absolute;
    z-index: 1;

    @media (max-width: 576px) {
      max-width: 30px;
    }
    @media (max-width: 420px) {
      max-width: 25px;
    }
  }

  .icon7 {
    left: 27px;
    animation: rotate-left linear 25s infinite;
    @media (max-width: 576px) {
      left: 20px;
    }
    @media (max-width: 420px) {
      left: 22px;
    }
  }

  .icon8 {
    top: -303px;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: rotate-left linear 25s infinite;
    @media (max-width: 576px) {
      top: -186px;
    }
  }

  .icon9 {
    right: 27px;
    animation: rotate-left linear 25s infinite;
    @media (max-width: 576px) {
      right: 22px;
    }
    @media (max-width: 420px) {
      right: 22px;
    }
  }

  @media (max-width: 576px) {
    margin: 300px auto 0;
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
  }

  .circle-1 {
    width: 247px;
    height: 247px;
    @media (max-width: 576px) {
      width: 120px;
      height: 120px;
    }

    .icon1 {
      top: -25px;
      right: 0;
      left: 0;
      margin: 0 auto;
      animation: rotate-right linear 45s infinite;
      @media (max-width: 576px) {
        top: -13px;
        right: 0;
        left: 0;
        margin: 0 auto;
      }
    }
    .icon2 {
      bottom: 30px;
      left: -3px;
      animation: rotate-right linear 45s infinite;
      @media (max-width: 576px) {
        bottom: 30px;
        left: -12px;
      }
    }
    .icon3 {
      bottom: 30px;
      right: -3px;
      animation: rotate-right linear 45s infinite;
      @media (max-width: 576px) {
        bottom: 30px;
        right: -12px;
      }
    }

    animation: rotate-left linear 45s infinite;
  }

  .circle-2 {
    @media (max-width: 576px) {
      width: 200px;
      height: 200px;
    }
    @media (max-width: 420px) {
      width: 186px;
      height: 186px;
    }

    width: 350px;
    height: 350px;
    animation: rotate-right linear 30s infinite;

    .icon1 {
      top: 0;
      left: 57px;
      animation: rotate-left linear 30s infinite;
      @media (max-width: 576px) {
        top: -10px;
        left: 57px;
      }
    }
    .icon2 {
      bottom: 0;
      right: 57px;
      animation: rotate-left linear 30s infinite;
      @media (max-width: 576px) {
        bottom: -9px;
        right: 57px;
      }
    }
    .icon3 {
      top: 62px;
      right: 0;
      animation: rotate-left linear 30s infinite;
      @media (max-width: 576px) {
        top: 50px;
        right: -5px;
      }
    }
  }

  .circle-3 {
    @media (max-width: 576px) {
      width: 266px;
      height: 266px;
    }
    @media (max-width: 420px) {
      width: 250px;
      height: 250px;
    }

    .icon1 {
      top: -28px;
      left: 0;
      right: 0;
      margin: 0 auto;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        top: -15px;
      }
    }
    .icon2 {
      top: 97px;
      right: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        top: 49px !important;
        right: 2px !important;
      }
    }
    .icon3 {
      bottom: 97px;
      right: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        bottom: 49px !important;
        right: 2px !important;
      }
    }
    .icon4 {
      top: 97px;
      left: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        top: 49px !important;
        left: 2px !important;
      }
    }
    .icon5 {
      bottom: -28px;
      left: 0;
      right: 0;
      margin: 0 auto;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        bottom: -15px !important;
      }
    }
    .icon6 {
      bottom: 97px;
      left: -5px;
      animation: rotate-right linear 25s infinite;
      @media (max-width: 576px) {
        bottom: 49px !important;
        left: 2px !important;
      }
    }

    width: 450px;
    height: 450px;
    animation: rotate-left linear 25s infinite !important;
  }

  @keyframes rotate-left {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @keyframes rotate-right {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Ecosystem_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 45px 0;
  overflow: hidden;
`;
/* harmony default export */ var Ecosystem = (Ecosystem_Community);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Home/components/SpaceNFTs.jsx
var SpaceNFTs_jsx = external_react_default.a.createElement;





const SpaceNFTs = () => {
  return SpaceNFTs_jsx(StyledSection, null, SpaceNFTs_jsx(external_reactstrap_["Container"], null, SpaceNFTs_jsx(Title_Title, {
    title: "Space NFTs a revolutionary and innovative technology"
  }), SpaceNFTs_jsx(Description, {
    className: "text-dark"
  }, "Space NFTs decentralized auction platform for creating and selling non-fungible tokens. NFT is a unique digital asset that uses blockchain technology to define and guarantee its ownership."), SpaceNFTs_jsx(CircleNFTs, {
    className: "img-dark",
    src: "./images/NFTs.png",
    alt: "space NFTs"
  }), SpaceNFTs_jsx(CircleNFTs, {
    className: "img-light",
    src: "./images/light-icon/nftslight.png",
    alt: "space NFTs"
  }), SpaceNFTs_jsx(Astronaut, {
    src: "./images/infinity-1-min.png",
    alt: "astronaut in the milky way"
  })));
};

const Astronaut = external_styled_components_default.a.img`
  max-width: 900px;
  width: 100%;
`;
const CircleNFTs = external_styled_components_default.a.img`
  max-width: 1200px;
  width: 100%;
  margin: 4rem auto;
  @media (max-width: 576px) {
    margin: 2rem auto;
  }
`;
const StyledSection = external_styled_components_default.a.section`
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 576px) {
    text-align: left;
  }
`;
const Description = external_styled_components_default.a.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 25px;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;
/* harmony default export */ var components_SpaceNFTs = (SpaceNFTs);
// EXTERNAL MODULE: ./client/components/Planets/Planet.jsx
var Planet = __webpack_require__("n/ku");

// CONCATENATED MODULE: ./client/components/Home/components/Planet.jsx
var Planet_jsx = external_react_default.a.createElement;





const Planet_Planet = () => {
  return Planet_jsx(Planet_BoxSection, null, Planet_jsx(WrapContainer, null, Planet_jsx(WrapPlanet, null, Planet_jsx(Planet["default"], null)), Planet_jsx(Planet_Content, {
    className: "title-banner text-dark text-visi"
  }, Planet_jsx(Planet_Title, null, Planet_jsx("img", {
    src: "../images/home-page/Logo-1-02.png",
    alt: ""
  })), Planet_jsx(Planet_Text, null, "Aggregation Protocol"), Planet_jsx(Planet_SubText, null, "The forbitspace is an aggregator protocols allows traders to benefit from a large variety of financial tools in a single interface.forbitspace the ability to split a single transaction into multiple orders across various DEX\u2019s, also route orders through multiple assets if determined to provide a user the most liquidity."))));
};

const Planet_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */
  @media (min-width: 800px) {
    /* padding: 25px 0; */
    margin: -50px 0;
  }
  @media (min-width: 1440px) {
    margin: 150px 0;
  }
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapPlanet = external_styled_components_default.a.div`
  width: 50%;
  transform: scale(1);
  @media (min-width: 2100px) {
    transform: scale(1.2);
  }
  @media (max-width: 1440px) {
    transform: scale(0.75);
  }
  @media (max-width: 1024px) {
    transform: scale(0.55);
  }
  @media (max-width: 786px) {
    transform: scale(0.75);
  }
  @media (max-width: 576px) {
    transform: scale(0.65);
    margin: -170px 0;
  }
  @media (max-width: 400px) {
    transform: scale(0.5);
    margin: -220px 0;
  }
`;
const Planet_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Planet_Title = external_styled_components_default.a.h2`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1;
  img {
    max-width: 350px;
  }
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
    img {
      max-width: 170px;
    }
  }
`;
const Planet_SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Planet_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
/* harmony default export */ var components_Planet = (Planet_Planet);
// CONCATENATED MODULE: ./client/components/Home/components/Liquidity.jsx
var Liquidity_jsx = external_react_default.a.createElement;




const Liquidity = () => {
  return Liquidity_jsx(Liquidity_BoxSection, null, Liquidity_jsx(Liquidity_WrapContainer, null, Liquidity_jsx(Liquidity_Content, {
    className: "title-banner text-dark text-visi"
  }, Liquidity_jsx(Liquidity_Text, null, "Liquidity Pool"), Liquidity_jsx(Liquidity_SubText, null, "Totle aggregates decentralized exchanges and synthetic asset providers into a suite of tools that makes it easy to access deep liquidity for DeFi assets at the best price.")), Liquidity_jsx(WrapLiquidity, null, Liquidity_jsx(ImgHalf, null, Liquidity_jsx("img", {
    src: "../images/home-page/liquidity.png",
    alt: ""
  })))));
};

const Liquidity_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */
  @media (min-width: 768px) {
    padding: 25px 0;
  }
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const Liquidity_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapLiquidity = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Liquidity_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Liquidity_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const Liquidity_SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_Liquidity = (Liquidity);
// CONCATENATED MODULE: ./client/components/Home/components/LimitOrder.jsx
var LimitOrder_jsx = external_react_default.a.createElement;




const LimitOrder = () => {
  return LimitOrder_jsx(LimitOrder_BoxSection, null, LimitOrder_jsx(LimitOrder_WrapContainer, null, LimitOrder_jsx(WrapImg, null, LimitOrder_jsx(LimitOrder_ImgHalf, null, LimitOrder_jsx("img", {
    src: "../images/home-page/limit.png",
    alt: ""
  }))), LimitOrder_jsx(LimitOrder_Content, {
    className: "title-banner text-dark text-visi"
  }, LimitOrder_jsx(LimitOrder_Text, null, "Limit Order Protocol"), LimitOrder_jsx(WrapText, null, LimitOrder_jsx(TitleText, null, "DeFi Aggregation"), LimitOrder_jsx(LimitOrder_SubText, null, "Totle is connected to top decentralized exchanges and synthetic asset providers.", LimitOrder_jsx("br", null), "When you execute a swap through Totle, your order is routed to the sources offering the best prices on the market."), LimitOrder_jsx(TitleText, null, "DeFi Aggregation", LimitOrder_jsx("br", null), "Automatic insurance through Nexus Mutual"), LimitOrder_jsx(LimitOrder_SubText, null, "Users are covered for up to 600 ETH in the event tha funds are lost during a swap due to an unforeseen bug.")))));
};

const LimitOrder_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */
  @media (min-width: 768px) {
    padding: 25px 0;
  }
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const LimitOrder_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 50%;
  /* transform: rotate(-5deg); */
  @media (max-width: 1320px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LimitOrder_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const LimitOrder_Content = external_styled_components_default.a.div`
  margin-left: 20px;
  width: 50%;
  max-width: 600px;
  /* text-align: right; */
  @media (max-width: 1260px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const LimitOrder_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const WrapText = external_styled_components_default.a.div``;
const TitleText = external_styled_components_default.a.p`
  font-size: 1.5rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 300;
  }
`;
const LimitOrder_SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_LimitOrder = (LimitOrder);
// CONCATENATED MODULE: ./client/components/Home/components/Derivative.jsx
var Derivative_jsx = external_react_default.a.createElement;




const Derivative = () => {
  return Derivative_jsx(Derivative_BoxSection, null, Derivative_jsx(Derivative_WrapContainer, null, Derivative_jsx(Derivative_Content, {
    className: "title-banner text-dark text-visi"
  }, Derivative_jsx(Derivative_Text, null, "Derivative Protocol"), Derivative_jsx(Derivative_SubText, null, "Crypto derivatives trading is on the rise today. The futures and options allow the traders to hedge their positions and mitigate their risks during highly volatile trading days.", Derivative_jsx("br", null), "Synthetic assets on decentralized trading platforms are fetching good trade volume"), Derivative_jsx(Derivative_SubText, null, "Derivatives in the Defi world are important because what is being built here is not a trading and speculation market; it\u2019s a use-case market. The principle of hedging goes far beyond Defi or cryptocurrencies. It\u2019s applicable to the traditional financial world as well.", Derivative_jsx("br", null), "Derivatives protocol provider used to create custom assets by using forward-looking features of locking the price in and the ability to either buy or sell an asset. Like derivatives are a contract that represents an asset bought or sold at a future date for a future price, synthetics are the very underlying asset representative of other assets.")), Derivative_jsx(Derivative_WrapImg, null, Derivative_jsx(Derivative_ImgHalf, null, Derivative_jsx("img", {
    src: "../images/home-page/derivative.png",
    alt: ""
  })))));
};

const Derivative_BoxSection = external_styled_components_default.a.section`
  position: relative;
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
  @media (max-width: 770px) {
    padding-top: 10px;
  }
`;
const Derivative_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Derivative_WrapImg = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Derivative_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Derivative_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  /* max-width: 600px; */
  /* text-align: right; */
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Derivative_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const Derivative_SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_Derivative = (Derivative);
// CONCATENATED MODULE: ./client/components/Home/components/SelfCustody.jsx
var SelfCustody_jsx = external_react_default.a.createElement;




const SelfCustody = () => {
  return SelfCustody_jsx(SelfCustody_BoxSection, null, SelfCustody_jsx(SelfCustody_WrapContainer, null, SelfCustody_jsx(SelfCustody_WrapLiquidity, null, SelfCustody_jsx(SelfCustody_ImgHalf, null, SelfCustody_jsx("img", {
    src: "../images/home-page/self-custody.png",
    alt: ""
  }))), SelfCustody_jsx(SelfCustody_Content, null, SelfCustody_jsx(SelfCustody_Text, null, "Self-custody"), SelfCustody_jsx(SelfCustody_SubText, null, "In DeFi, your money becomes empowered. You can store it, lend it, trade it, zap it, and track it in real-time. It\u2019s a bit like a game but at the heart of this is more control, aka self-custody."), SelfCustody_jsx(SelfCustody_SubText, null, "Self-custody refers to individuals being 100% in control of their assets, similar to cash. Except this is digital cash, and it\u2019s not dependent on a bank or other entity to issue it or verify transactions. This is precisely why blockchain was such a huge innovation starting with Bitcoin and then Ethereum."))));
};

const SelfCustody_BoxSection = external_styled_components_default.a.section`
  position: relative;
  @media (min-width: 768px) {
    padding: 25px 0;
  }

  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const SelfCustody_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const SelfCustody_WrapLiquidity = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SelfCustody_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const SelfCustody_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  text-align: left;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const SelfCustody_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SelfCustody_SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_SelfCustody = (SelfCustody);
// CONCATENATED MODULE: ./client/components/Home/components/System.jsx

var System_jsx = external_react_default.a.createElement;



const System = () => {
  const ContributorRender = ({
    data,
    title
  }) => {
    console.log(data);
    return System_jsx(WrapperInner, null, System_jsx("div", {
      className: "header"
    }, title), System_jsx("div", {
      className: "img-content"
    }, data.map(item => System_jsx("div", {
      className: "img-holder"
    }, System_jsx("a", {
      href: "/#"
    }, System_jsx("img", {
      src: `./images/logo-contributor/${item.img}.svg`,
      alt: ""
    }))))));
  };

  return System_jsx(WrapperSystem, null, System_jsx("div", {
    className: "container"
  }, System_jsx(ContributorRender, {
    data: ContributorData,
    title: "Ecosystem partners"
  }), System_jsx(ContributorRender, {
    data: ContributorData,
    title: "Contributors"
  }), System_jsx(BecomeBox, null, System_jsx("div", {
    className: "content"
  }, System_jsx("div", {
    className: "header-content"
  }, "Join the community"), System_jsx("div", {
    className: "inner-content"
  }, "Learn more about Maker, chat with the team, others in the community,", System_jsx("br", null), "and have your say in shaping the future of decentralized finance."))), " ", System_jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return System_jsx(Link, {
      href: item.link,
      target: "_blank",
      key: index
    }, System_jsx(Icon, {
      src: item.url,
      alt: "icon social media"
    }));
  }))));
};

const WrapperSystem = external_styled_components_default.a.section`
  @media (min-width: 1440px) {
    max-width: 1320px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    padding: 45px 0;
  }
`;
const WrapperInner = external_styled_components_default.a.div`
  .header {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    color: #fff;

    @media (max-width: 415px) {
      font-size: 30px;
    }
  }
  .img-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 45px;
    gap: 10px;

    @media (max-width: 415px) {
      padding: 30px 40px;
    }
  }
  .img-holder {
    width: 19%;
    padding: 25px 0;

    img {
      height: auto;
      width: auto;
    }

    @media (max-width: 945px) {
      width: 22.5%;
    }

    @media (max-width: 768px) {
      width: 32%;
    }

    @media (max-width: 574px) {
      width: 45%;
    }

    @media (max-width: 415px) {
      width: 70%;
    }
  }
`;
const BecomeBox = external_styled_components_default.a.div`
  .content {
    text-align: center;
  }
  .header-content {
    font-size: 50px;
    font-weight: 600;
  }
  .inner-content {
    font-size: 24px;
  }
  @media (max-width: 786px) {
    .header-content {
      font-size: 30px;
    }
    .inner-content {
      font-size: 18px;
    }
  }
`;
const SocialLink = external_styled_components_default.a.div`
  width: 100%;
  text-align: center;
  padding: 30px 0;
`;
const Link = external_styled_components_default.a.a`
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;
const Icon = external_styled_components_default.a.img`
  max-width: 40px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
  @media (max-width: 576px) {
    max-width: 25px;
  }
`;
/* harmony default export */ var components_System = (System);
// CONCATENATED MODULE: ./client/components/Home/components/Partners.jsx
var Partners_jsx = external_react_default.a.createElement;




const Partners = () => {
  return Partners_jsx(Partners_BoxSection, null, Partners_jsx(Partners_WrapContainer, null, Partners_jsx(Partners_Content, {
    className: "title-banner text-dark text-visi"
  }, Partners_jsx(Partners_Text, null, "Liquidity Partners"), Partners_jsx(Partners_SubText, null, "Users are covered for up to 600 ETH in the event tha funds are lost during a swap due to an unforeseen bug.")), Partners_jsx(Partners_WrapLiquidity, null, Partners_jsx(Partners_ImgHalf, null, Partners_jsx("img", {
    src: "../images/home-page/partners.png",
    alt: ""
  })))));
};

const Partners_BoxSection = external_styled_components_default.a.section`
  position: relative;
  @media (min-width: 768px) {
    padding: 25px 0;
  }
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const Partners_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Partners_WrapLiquidity = external_styled_components_default.a.div`
  width: 80%;
  @media (min-width: 2100px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Partners_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Partners_Content = external_styled_components_default.a.div`
  margin-left: 80px;
  /* width: 50%; */
  text-align: left;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
const Partners_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const Partners_SubText = external_styled_components_default.a.p`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_Partners = (Partners);
// CONCATENATED MODULE: ./client/components/Home/components/Network.jsx
var Network_jsx = external_react_default.a.createElement;




const Network = () => {
  return Network_jsx(Network_BoxSection, null, Network_jsx(Network_Title, null, "Network"), Network_jsx(Network_WrapContainer, null, Network_jsx(Network_WrapImg, null, Network_jsx(WrapperButtonApp, null, Network_jsx(ButtonBanner, {
    href: "/",
    className: "forbitswap"
  }, " ", "forbitswap")), Network_jsx(Network_ImgHalf, null, Network_jsx("img", {
    src: "../images/home-page/network-01.png",
    alt: ""
  }))), Network_jsx(Network_WrapImg, null, Network_jsx(WrapperButtonApp, null, Network_jsx(ButtonBanner, {
    href: "/"
  }, "Space Trade")), Network_jsx(Network_ImgHalf, null, Network_jsx("img", {
    src: "../images/home-page/network-02.png",
    alt: ""
  })))));
};

const Network_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 12vh 50px 0;

  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const Network_Title = external_styled_components_default.a.div`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
const Network_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Network_WrapImg = external_styled_components_default.a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  :first-child {
    width: 33%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 75vh;
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
`;
const Network_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const WrapperButtonApp = external_styled_components_default.a.div`
  max-width: 350px;
  /* margin: 0 auto; */
  /* width: 90%; */
  text-align: left;
  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: unset;
  }
`;
const ButtonBanner = external_styled_components_default.a.a`
  padding: 0.25rem 0.85rem;
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
  width: 140px;
  background-size: 200%;
  background-position: 99%;
  color: white;

  &.forbitswap {
    background-size: 110%;
    background-position: 30%;
  }
  :hover {
    color: white;
  }
`;
/* harmony default export */ var components_Network = (Network);
// CONCATENATED MODULE: ./client/components/Home/index.jsx
var Home_jsx = external_react_default.a.createElement;





















const Index = () => {
  return Home_jsx(external_react_default.a.Fragment, null, Home_jsx(components_Banner, null), Home_jsx(Home_WrapperBackground, null, Home_jsx(components_Network, null), Home_jsx(components_Planet, null), Home_jsx(components_Liquidity, null), Home_jsx(components_LimitOrder, null), Home_jsx(components_Derivative, null), Home_jsx(components_SelfCustody, null), Home_jsx(components_Partners, null), Home_jsx(components_System, null), Home_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  }), Home_jsx(Footer["a" /* default */], null)));
};

const Home_WrapperBackground = external_styled_components_default.a.div`
  position: relative;
  font-family: helvetica neue;
  @media (max-width: 576px) {
    overflow-x: hidden;
  }
`;
const BackgroundImg = external_styled_components_default.a.img`
  position: absolute;
  top: -100vh;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% + 100vh);
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`; // const BackgroundImgMobile = styled.img`
//   display: none;
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0.1;
//   z-index: -1;
// `;
// const BoxSection = styled.section`
//   position: relative;
//   a {
//     display: block;
//     overflow: hidden;
//     width: 100%;
//     max-width: 100px;
//     transition: ease-in-out 1s all;
//     img {
//       width: 100%;
//       object-fit: cover;
//     }
//     &:hover {
//       transform: rotate(-18deg) scale(1.2);
//     }
//   }
// `;

/* harmony default export */ var Home = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "n/ku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Planet = () => {
  const DataRender = [{
    img: "planet-1"
  }, {
    img: "planet-2"
  }, {
    img: "planet-3"
  }, {
    img: "planet-4"
  }, {
    img: "planet-5"
  }, {
    img: "planet-6"
  }, {
    img: "planet-7"
  }, {
    img: "planet-8"
  }];

  const RenderSystem = ({
    data
  }) => {
    return __jsx(System, null, data.map((item, index) => __jsx(Planets, {
      key: index
    }, __jsx("img", {
      src: `./images/space-planets/${item.img}.svg`,
      alt: ""
    }))));
  };

  return __jsx(Main, null, __jsx(Orbit, null, __jsx(WrapperPlanet, null, __jsx(Circle, null, __jsx(Logo, null, __jsx("img", {
    src: "./images/space-planets/logo.png",
    alt: ""
  })), __jsx(RenderSystem, {
    data: DataRender
  }), __jsx(Earth, null, __jsx("img", {
    src: "./images/space-planets/earth.svg",
    alt: ""
  }), __jsx(Moon, null, __jsx("img", {
    src: "./images/space-planets/moon.svg",
    alt: ""
  })))))));
};

const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  /* height: 100vh; */
  display: flex;
  /* background-image: url("./images/Forbitspace-comming/background.jpg"); */
  background-size: cover;
  align-items: center;
  justify-content: flex-start;
  /* overflow: hidden; */
`;
const Orbit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 80%;
  width: 100%;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperPlanet = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  @media (min-height: 1260px) {
    transform: scale(1.3);
  }
  @media (min-width: 1281px) {
    transform: scale(1.3);
  }

  @media (min-width: 1024px) {
    transform: scale(1);
  }

  @media (max-height: 768px) {
    transform: scale(0.7);
  }

  @media (max-height: 768px) {
    transform: scale(0.7);
  }
  /* 
  @media (max-height: 600px) {
    transform: scale(0.5);
  }

  @media (max-width: 415px) {
    transform: scale(0.5);
  }

  @media (max-height: 425px) {
    transform: scale(0.4);
  }

  @media (max-width: 320px) {
    transform: scale(0.4);
  }

  @media (max-height: 350px) {
    transform: scale(0.3);
  } */
`;
const System = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div``;
const Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 800px;
  height: 800px;
  max-width: 800px;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./images/space-planets/circle-line.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  animation-name: spin;
  animation-duration: 30000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: auto;
  max-width: 20%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: spins;
  animation-duration: 30000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  img {
    height: auto;
    width: 160px;
  }
  @keyframes spins {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Planets = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  width: auto;
  max-width: 24%;

  img {
    animation-name: spinning;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  :nth-child(1) {
    right: 15%;
    top: 16%;
    img {
      width: 190px;
    }
  }

  :nth-child(2) {
    left: 11%;
    top: 58%;
    img {
      width: 140px;
    }
  }

  :nth-child(3) {
    right: 11%;
    bottom: 16%;
    img {
      width: 73px;
    }
  }

  :nth-child(4) {
    left: 35%;
    top: 20%;
    img {
      width: 58px;
    }
  }

  :nth-child(5) {
    right: 45%;
    top: -4%;
    img {
      width: 73px;
    }
  }

  :nth-child(6) {
    right: 45%;
    top: 32%;
    img {
      width: 28.5px;
    }
  }

  :nth-child(7) {
    right: 28%;
    top: 54%;
    img {
      width: 52px;
    }
  }

  :nth-child(8) {
    left: 35%;
    bottom: -1%;
    img {
      width: 28.5px;
    }
  }
  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Earth = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 47%;
  bottom: 21%;
  img {
    width: 80px;
    animation-name: spinning;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
const Moon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* background: #fff; */
  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  img {
    width: 16px;
    position: absolute;
    top: -16px;
    right: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Planet);

/***/ }),

/***/ "yZXQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Footer/constants.js
const DataSocialLinkFooter = [{
  url: "./images/icon-social-footer/1.svg"
}, {
  url: "./images/icon-social-footer/2.svg"
}, {
  url: "./images/icon-social-footer/3.svg"
}, {
  url: "./images/icon-social-footer/4.svg"
}, {
  url: "./images/icon-social-footer/5.svg"
}, {
  url: "./images/icon-social-footer/6.svg"
}];
const navContent = [{
  nav: "Space Trade",
  contents: [{
    link: "",
    content: "Aggregation"
  }, {
    link: "",
    content: "Liquidity Protocol"
  }, {
    link: "",
    content: "Limit Order Protocol"
  }, {
    link: "",
    content: "Derivative Protocol"
  }]
}, {
  nav: "Governance",
  contents: [{
    link: "",
    content: "FBS Token"
  }, {
    link: "",
    content: "Space Dao Pools"
  }, {
    link: "",
    content: "Farming"
  }, {
    link: "",
    content: "Stacking"
  }]
}, {
  nav: "Developers",
  contents: [{
    link: "",
    content: "Documentation"
  }, {
    link: "",
    content: "Whitepaper"
  }, {
    link: "",
    content: "Github"
  }, {
    link: "",
    content: "Audits"
  }, {
    link: "",
    content: "Bug bounty"
  }]
}, {
  nav: "Self-custody",
  contents: [{
    link: "",
    content: "Mobile wallet"
  }, {
    link: "",
    content: "Smart contract wallet"
  }]
}, {
  nav: "Support",
  contents: [{
    link: "",
    content: "Help Center"
  }, {
    link: "",
    content: "Term of Use"
  }, {
    link: "",
    content: "Privacy Policy"
  }]
}, {
  nav: "More",
  contents: [{
    link: "",
    content: "About"
  }, {
    link: "",
    content: "Blog"
  }]
}];
// CONCATENATED MODULE: ./client/components/Footer/index.jsx
var __jsx = external_react_default.a.createElement;





const Index = () => {
  return __jsx("footer", {
    className: "footer"
  }, __jsx(FooterMenu, null, __jsx(external_reactstrap_["Container"], null, __jsx(ListMenu, null, navContent.map((item, index) => __jsx("ul", {
    className: "text-visi"
  }, __jsx(TitleFooter, null, item.nav), item.contents.map((item, index) => __jsx("li", null, __jsx("a", {
    href: item.link,
    target: "_blank"
  }, item.content))))), __jsx("ul", {
    className: "text-visi"
  }, __jsx(TitleFooter, {
    size: "16px"
  }, "Subscribe to our newsletter for updates"), __jsx("form", {
    action: ""
  }, __jsx(WrapperInput, null, __jsx(Input, {
    type: "text",
    className: "text bg-input-dark",
    placeholder: "your@email.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    required: true
  })), __jsx("button", {
    type: "submit"
  }, __jsx("i", {
    className: "fa fa-arrow-right"
  }))), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 forbitspace"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return __jsx(Link, {
      href: item.link,
      target: "_blank",
      key: index
    }, __jsx(Icon, {
      src: item.url,
      alt: "icon social media"
    }));
  })))))), __jsx(BackgroundFooter, null));
};

const BackgroundFooter = external_styled_components_default.a.div`
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
`;
const Link = external_styled_components_default.a.a`
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;
const Icon = external_styled_components_default.a.img`
  max-width: 20px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
const SocialLink = external_styled_components_default.a.div``;
const FooterMenu = external_styled_components_default.a.section`
  position: relative;
  padding: 100px 0 0;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 40px 0;

    &:after {
      content: none;
    }
  }
`;
const ListMenu = external_styled_components_default.a.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 25px;

  ul {
    padding-left: 0;
    width: calc(100% / 7);
    // text-align:right;

    form {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      input {
      }

      button {
        width: 60px;
        height: 30px;
        border: none;
        outline: none;
        background-image: linear-gradient(
          17deg,
          #00ff36 -68%,
          #00ee57 -43%,
          #00c5ad 14%,
          #00a4f1 57%,
          #0b18fc 154%,
          #0d00ff 171%
        );
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
        background-size: 200%;
        background-position: right;

        i {
          color: #fff;
          font-size: 12px;
        }

        &:hover {
          background-size: 200%;
          background-position: right;
        }
      }
    }

    li {
      font-size: 12px;
      font-weight: 300;
      a {
        text-decoration: none;
        color: #4e4f50;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 1024px) {
      width: calc(100% / 6);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      width: calc(100% / 6);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 576px) {
      width: 50%;
    }
  }
`;
const TitleFooter = external_styled_components_default.a.h3`
  font-size: 16px;
  font-size: ${props => props.size};
  margin-bottom: 10px;
  color: #182239;
  font-weight: bold;
`;
const Copyright = external_styled_components_default.a.p`
  font-size: 14px;
  font-weight: 300;
`;
const Input = external_styled_components_default.a.input`
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-family: "Averta";
  font-size: 14px;
  padding: 10px 15px;
  line-height: 20px;
  outline: 0;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border-radius: 10px;
  position: relative;
  border: none;
  background: #cff3f4;
  border: 1px solid #0047b2;
`;
const WrapperInput = external_styled_components_default.a.div`
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
`;
const BorderInput = external_styled_components_default.a.div`
  position: absolute;
  z-index: -1;
  background: white;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 11px;
  background-color: #0047b2;
  /* background-image: linear-gradient(
    38deg,
    #00ff36 -10%,
    #00ee57 3%,
    #00c5ad 32%,
    #00a4f1 53%,
    #0b18fc 102%,
    #0d00ff 111%
  ); */
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;