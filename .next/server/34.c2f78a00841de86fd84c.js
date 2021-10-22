exports.ids = [34,52];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

/***/ }),

/***/ "MTiB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppLink = ({
  marginRight
}) => {
  return __jsx(ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noreferrer",
    marginRight: marginRight
  }, " ", "Launch App");
};

const ButtonBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
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
  font-style: italic;
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
/* harmony default export */ __webpack_exports__["a"] = (AppLink);

/***/ }),

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

// EXTERNAL MODULE: ./client/components/Header/components/AppLink.jsx
var AppLink = __webpack_require__("MTiB");

// CONCATENATED MODULE: ./client/components/Home/components/Banner.jsx
var __jsx = external_react_default.a.createElement;



 // import Title from "../../Title";
// import DecentralizedText from "./DecentralizedText";
// import ButtonApp from "../../Header/components/AppLink";

const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapImgBanner, null, __jsx("img", {
    src: "../images/home-page/banner.png",
    alt: "banner-picture"
  })), __jsx(external_reactstrap_["Container"], null, __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, __jsx("img", {
    src: "../images/home-page/forbitspace-word.png",
    alt: "forbitspace-dex-name"
  })), __jsx(Text, null, "The Decentralized Exchange Super Aggregator"), __jsx(SubText, null, __jsx("span", null, "forbitspace"), " is an interoperability aggregator protocol that unites decentralized applications across disparate blockchains. Allows crypto traders to tap deep liquidity and receive better pricing one single interface."), __jsx(ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", "Launch App ", __jsx("img", {
    src: "../images/chevron-right.svg",
    alt: ""
  })))));
};

const BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 2vh 0 0;
  transition: min-height 0.3s;
  margin-top: -40px;

  @media (max-width: 770px) {
    margin-top: 0px;
    padding-top: 50px;
    /* min-height: ${({
  height
}) => height}; */
  }
`;
const WrapImgBanner = external_styled_components_default.a.div`
  width: 100vw;
  height: auto;
  max-width: 100%;
  margin-bottom: -80px;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
const Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;
const Title = external_styled_components_default.a.h2`
  font-size: 4rem;
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
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    margin-top: 2rem;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  font-style: italic;
  @media (max-width: 576px) {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 200;
    line-height: 25px;
  }
`;
const ButtonBanner = external_styled_components_default.a.a`
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
  font-style: italic;
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
  /* max-width: 210px; */
  /* &:hover { */
  background-size: 200%;
  background-position: right;
  color: white;
  /* } */
  :hover {
    color: white;
  }

  img {
    max-width: 12px;
  }
  @media (min-width: 576px) {
    display: none;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// EXTERNAL MODULE: ./client/components/Planets/Planet.jsx
var Planet = __webpack_require__("n/ku");

// CONCATENATED MODULE: ./client/components/Home/components/Planet.jsx
var Planet_jsx = external_react_default.a.createElement;





const Planet_Planet = () => {
  return Planet_jsx(Planet_BoxSection, null, Planet_jsx(WrapContainer, null, Planet_jsx(WrapPlanet, null, Planet_jsx(Planet["default"], null)), Planet_jsx(Planet_Content, {
    className: "title-banner text-dark"
  }, Planet_jsx(Planet_Title, null, Planet_jsx("img", {
    src: "../images/home-page/forbitspace-word.png",
    alt: "forbitspace-dex-name"
  })), Planet_jsx(Planet_Text, null, "Aggregation Protocol"), Planet_jsx(Planet_SubText, null, "The ", Planet_jsx("span", null, "forbitspace"), " is an aggregator protocol that allows traders to benefit from a large variety of financial tools in a single interface."), Planet_jsx(Planet_SubText, null, Planet_jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity."))));
};

const Planet_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 25px 0;
  @media (min-width: 800px) {
    margin: -120px 0;
  }
  @media (min-width: 1280px) {
    margin: -50px 0;
  }
  @media (min-width: 1440px) {
    margin: -200px 0;
  }

  @media (max-width: 770px) {
    padding-top: 10px;
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapPlanet = external_styled_components_default.a.div`
  width: 50%;
  transform: scale(0.75);
  @media (max-width: 1440px) {
    transform: scale(0.65);
  }
  @media (max-width: 1024px) {
    transform: scale(0.55);
  }
  @media (max-width: 768px) {
    transform: scale(0.65);
    margin: -60px 0;
  }
  @media (max-width: 415px) {
    transform: scale(0.6);
    margin: -220px 0;
  }
  @media (max-width: 320px) {
    transform: scale(0.4);
    margin: -280px 0;
  }
`;
const Planet_Content = external_styled_components_default.a.div`
  /* margin-left: 80px; */
  width: 50%;
  text-align: right;
  max-width: 800px;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
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
  font-size: 22px;
  font-weight: 300;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
const Planet_Text = external_styled_components_default.a.p`
  font-size: 2rem;
  font-weight: 500;
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
// CONCATENATED MODULE: ./client/components/Home/components/LiquidityAnimation.jsx
var LiquidityAnimation_jsx = external_react_default.a.createElement;



const LiquidityAnimation = () => {
  const dataTokens = [{
    name: "fbs"
  }, {
    name: "usdt"
  }, {
    name: "aave"
  }, {
    name: "dai"
  }, {
    name: "eth"
  }, {
    name: "sushi"
  }, {
    name: "uni"
  }, {
    name: "usdc"
  }];
  return LiquidityAnimation_jsx(WrapContent, null, LiquidityAnimation_jsx(BackgroundImg, null, LiquidityAnimation_jsx("img", {
    src: "../images/liquidity Pool/background-forbit.png",
    alt: ""
  })), LiquidityAnimation_jsx(ItemImg, null, dataTokens.map((item, index) => LiquidityAnimation_jsx(ImgWrap, {
    className: `img-${index}`,
    key: index
  }, LiquidityAnimation_jsx("img", {
    src: `../images/liquidity Pool/icon-${item.name}.png`,
    alt: `liquidity-${item.name}-icon`
  })))));
};

const WrapContent = external_styled_components_default.a.div`
  position: relative;
`;
const BackgroundImg = external_styled_components_default.a.div`
  width: 100%;
`;
const ItemImg = external_styled_components_default.a.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const ImgWrap = external_styled_components_default.a.div`
  position: absolute;
  &.img-0 {
    top: 35%;
    left: calc(50% - 70px);
    width: 140px;
    animation: moving 7s infinite;
  }
  &.img-1 {
    top: 10%;
    left: calc(25% - 40px);
    width: 80px;
    animation: moving 5.3s infinite;
  }
  &.img-2 {
    top: 23%;
    left: calc(77% - 40px);
    width: 80px;
    animation: moving 8.9s infinite;
  }
  &.img-3 {
    top: 0%;
    left: calc(40% - 37px);
    width: 74px;
    animation: moving 5.6s infinite;
  }
  &.img-4 {
    top: 10%;
    left: calc(60% - 40px);
    width: 74px;
    animation: moving 4.3s infinite;
  }
  &.img-5 {
    top: 25%;
    left: calc(37% - 35px);
    width: 70px;
    animation: moving 7.5s infinite;
  }
  &.img-6 {
    top: -10%;
    left: calc(60% - 40px);
    width: 65px;
    animation: moving 5.4s infinite;
  }
  &.img-7 {
    top: -1%;
    left: calc(75% - 40px);
    width: 80px;
    animation: moving 6.9s infinite;
  }
  img {
    transform: scale(0.9);
  }
  @media (max-width: 1024px) {
    img {
      transform: scale(0.7);
    }
  }
  @media (max-width: 768px) {
    img {
      transform: scale(0.8);
    }
  }
  @media (max-width: 700px) {
    img {
      transform: scale(0.65);
    }
  }
  @media (max-width: 320px) {
    img {
      transform: scale(0.5);
    }
    &.img-0 {
      top: 28%;
      left: calc(50% - 70px);
      width: 140px;
      animation: moving 7s infinite;
    }
  }

  @keyframes moving {
    0% {
      transform: translateY(25px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(25px);
    }
  }
`;
/* harmony default export */ var components_LiquidityAnimation = (LiquidityAnimation);
// CONCATENATED MODULE: ./client/components/Home/components/Liquidity.jsx
var Liquidity_jsx = external_react_default.a.createElement;





const Liquidity = () => {
  return Liquidity_jsx(Liquidity_BoxSection, null, Liquidity_jsx(Liquidity_WrapContainer, null, Liquidity_jsx(Liquidity_Content, {
    className: "title-banner text-dark text-visi"
  }, Liquidity_jsx(Liquidity_Text, null, "Liquidity Pool"), Liquidity_jsx(Liquidity_SubText, null, "With ", Liquidity_jsx("span", {
    className: "space"
  }, "forbitspace"), ", the decentralized protocol that empowering traders to provide liquidity to pools and collect extra rewards in ", Liquidity_jsx("span", {
    className: "fbs"
  }, "FBS"), " tokens for participating in liquidity mining programs."), Liquidity_jsx(Liquidity_SubText, null, "A next-generation automated market maker that protects users from front-running attacks and offers capital efficiency to liquidity providers. Enables you to deposit digital assets into liquidity pools while earning interest in real-time in the form of", " ", Liquidity_jsx("span", {
    className: "fbs"
  }, " FBS"), " tokens. Liquidity providers collect rewards on assets locked in pools and extra yield farming rewards in ", Liquidity_jsx("span", {
    className: "fbs"
  }, "FBS"), " tokens.")), Liquidity_jsx(WrapLiquidity, null, Liquidity_jsx(ImgHalf, null, Liquidity_jsx(components_LiquidityAnimation, null)))));
};

const Liquidity_BoxSection = external_styled_components_default.a.section`
  position: relative;
  /* min-height: 88vh; */
  /* padding: 10vh 0 0; */
  padding: 25px 0;
  @media (max-width: 770px) {
    padding-top: 10px;
  }
`;
const Liquidity_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapLiquidity = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 700px) {
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
  /* margin-left: 80px; */
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: 22px;
  font-weight: 300;
  max-width: 600px;
  text-align: left;
  .space {
    font-style: italic;
    font-weight: 900;
  }
  .fbs {
    font-style: normal;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_Liquidity = (Liquidity);
// CONCATENATED MODULE: ./client/components/Home/components/LimitOrder.jsx
var LimitOrder_jsx = external_react_default.a.createElement;




const LimitOrder = () => {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  return LimitOrder_jsx(LimitOrder_BoxSection, null, LimitOrder_jsx(LimitOrder_WrapContainer, null, LimitOrder_jsx(WrapImg, null, LimitOrder_jsx(LimitOrder_ImgHalf, null, LimitOrder_jsx("img", {
    src: "../images/home-page/limit.png",
    alt: "limit-order"
  }))), LimitOrder_jsx(LimitOrder_Content, {
    className: "title-banner text-dark text-visi"
  }, LimitOrder_jsx(LimitOrder_Text, null, "Limit Order Protocol"), LimitOrder_jsx(WrapText, null, LimitOrder_jsx(LimitOrder_SubText, null, "A limit order places a specific price that a trader wants to buy or sell at and is only executed if the market hits that price."), LimitOrder_jsx(LimitOrder_SubText, null, "Whereas market orders are executed immediately, limit orders are executed at a predefined price, which is generally better than the current market price."), open ? LimitOrder_jsx(external_react_default.a.Fragment, null, LimitOrder_jsx(LimitOrder_SubText, null, "The ", LimitOrder_jsx("span", null, "forbitspace"), " platforms help users place the limit order which is handled by the order-book feature. We limit order protocol provides the most innovative and optimal. A limit order is a type of buy order which a user can place with a specific buy or sell price whose limit is determined by the user him/herself. The enables the trade to be automatically executed when the market price reaches the users\u2019 target price. It allows users to buy dips or take profits to take benefits of volatility in the marketplace."), LimitOrder_jsx(LimitOrder_SubText, null, "A limit order would allow DeFi traders to get their swaps at desired prices by leaving instructions to fill buy or sell orders at specific prices (or better prices). For instance, if you think an asset is too expensive at the moment, or you are expecting prices to drop throughout the day, then you simply set a limit order to buy at a price below the current market price. How much lower is totally up to users.")) : LimitOrder_jsx(external_react_default.a.Fragment, null), LimitOrder_jsx(LimitOrder_SubText, {
    onClick: () => setOpen(!open),
    className: "toggle__btn"
  }, open ? "Hide" : "Read more...")))));
};

const LimitOrder_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 25px 0;
  @media (max-width: 770px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const LimitOrder_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 45%;
  transform: rotate(-12deg);
  @media (max-width: 1320px) {
    width: 60%;
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
  width: 55%;
  transition: all ease-in-out 0.2s;
  text-align: right;
  @media (max-width: 1320px) {
    width: 40%;
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
  text-align: right;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }
`;
const WrapText = external_styled_components_default.a.div``;
const LimitOrder_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  text-align: right;
  span {
    font-style: italic;
    font-weight: 900;
  }
  &.toggle__btn {
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    &.toggle__btn {
      font-size: 12px;
    }
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_LimitOrder = (LimitOrder);
// CONCATENATED MODULE: ./client/components/Home/components/Derivative.jsx
var Derivative_jsx = external_react_default.a.createElement;




const Derivative = () => {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  return Derivative_jsx(Derivative_BoxSection, null, Derivative_jsx(Derivative_WrapContainer, null, Derivative_jsx(Derivative_Content, {
    className: "title-banner text-dark text-visi"
  }, Derivative_jsx(Derivative_Text, null, "Derivative Protocol"), Derivative_jsx(Derivative_SubText, null, "Crypto derivatives trading is on the rise today. The futures and options allow the traders to hedge their positions and mitigate their risks during highly volatile trading days."), open ? Derivative_jsx(external_react_default.a.Fragment, null, Derivative_jsx(Derivative_SubText, null, "Synthetic assets on decentralized trading platforms are fetching good trade volume."), Derivative_jsx(Derivative_SubText, null, "Derivatives in the Defi world are important because what is being built here is not a trading and speculation market; it\u2019s a use-case market. The principle of hedging goes far beyond Defi or cryptocurrencies. It\u2019s applicable to the traditional financial world as well."), Derivative_jsx(Derivative_SubText, null, "Derivatives protocol provider used to create custom assets by using forward-looking features of locking the price in and the ability to either buy or sell an asset. Like derivatives are a contract that represents an asset bought or sold at a future date for a future price, synthetics are the very underlying asset representative of other assets.")) : Derivative_jsx(external_react_default.a.Fragment, null), Derivative_jsx(Derivative_SubText, {
    onClick: () => setOpen(!open),
    className: "toggle__btn"
  }, open ? "Hide" : "Read more...")), Derivative_jsx(Derivative_WrapImg, null, Derivative_jsx(Derivative_ImgHalf, null, Derivative_jsx("img", {
    src: "../images/home-page/derivative.png",
    alt: "derivative"
  })))));
};

const Derivative_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 25px 0;
  @media (max-width: 770px) {
    padding: 10px;
  }
`;
const Derivative_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Derivative_WrapImg = external_styled_components_default.a.div`
  width: 50%;
  padding: 0 30px 0 0;
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
  /* margin-left: 80px; */
  width: 50%;
  /* max-width: 600px; */
  text-align: left;
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
  font-size: 22px;
  font-weight: 300;
  &.toggle__btn {
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    &.toggle__btn {
      font-size: 12px;
    }
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_Derivative = (Derivative);
// CONCATENATED MODULE: ./client/components/Home/components/SelfCustody.jsx
var SelfCustody_jsx = external_react_default.a.createElement;




const SelfCustody = () => {
  return SelfCustody_jsx(SelfCustody_BoxSection, null, SelfCustody_jsx(SelfCustody_WrapContainer, null, SelfCustody_jsx(SelfCustody_WrapLiquidity, null, SelfCustody_jsx(SelfCustody_ImgHalf, null, SelfCustody_jsx("img", {
    src: "../images/home-page/self-custody-min.png",
    alt: "self-custody"
  }))), SelfCustody_jsx(SelfCustody_Content, null, SelfCustody_jsx(SelfCustody_Text, null, "Self-custody"), SelfCustody_jsx(SelfCustody_SubText, null, "In the world DeFi, your money becomes empowered. You can store it, lend it, trade it, zap it, and track it in real-time. It\u2019s a bit like a game but at the heart of this is more control, aka self-custody."), SelfCustody_jsx(SelfCustody_SubText, null, "Self-custody refers to individuals being 100% in control of their assets, similar to cash. Except this is digital cash, and it\u2019s not dependent on a bank or other entity to issue it or verify transactions. This is precisely why blockchain was such a huge innovation starting with Bitcoin and then Ethereum."))));
};

const SelfCustody_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 25px 0;

  @media (max-width: 768px) {
    padding-top: 10px;
    /* min-height: 80vh; */
  }
`;
const SelfCustody_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

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
  margin-left: 55px;
  width: 50%;
  text-align: right;
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
  text-align: right;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }
`;
const SelfCustody_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_SelfCustody = (SelfCustody);
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
  img: "link"
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
const EcosystemData = [{
  img: "eth"
}, {
  img: "binance"
}, {
  img: "solana"
}, {
  img: "polygon"
}, {
  img: "avalanche"
}, {
  img: "arbitrum"
}, {
  img: "coinbase"
}, {
  img: "metamask"
}, {
  img: "near"
}, {
  img: "trust-wallet"
}, {
  img: "fire-block"
}, {
  img: "wallet-connect"
}, {
  img: "safepal"
}, {
  img: "coin-gecko"
}, {
  img: "defillama"
}, {
  img: "link"
}, {
  img: "the-graph"
}, {
  img: "dune"
}, {
  img: "phantom"
}, {
  img: "zapper"
}, {
  img: "de-bank"
}, {
  img: "crypto"
}, {
  img: "alpha-wallet"
}, {
  img: "intotheblock"
}];
const DataSocialLinkFooter = [{
  link: "https://twitter.com/forbitspace",
  url: "./images/icon-social-footer/6.svg"
}, {
  link: "https://t.me/forbitspace",
  url: "./images/icon-social-footer/5.svg"
}, {
  link: "https://github.com/forbitspace",
  url: "./images/icon-social-footer/4.svg"
}, {
  link: "https://medium.com/@forbitspace",
  url: "./images/icon-social-footer/1.svg"
}, {
  link: "https://discord.com/invite/forbitspace",
  url: "./images/icon-social-footer/3.svg"
}, {
  link: "https://www.reddit.com/r/forbitspace/",
  url: "./images/icon-social-footer/2.svg"
}];
// CONCATENATED MODULE: ./client/components/Home/components/System.jsx

var System_jsx = external_react_default.a.createElement;



const System = () => {
  const ContributorRender = ({
    data,
    title
  }) => {
    return System_jsx(WrapperInner, null, System_jsx("div", {
      className: "header"
    }, title), System_jsx("div", {
      className: "img-content"
    }, data.map((item, index) => System_jsx("div", {
      className: "img-holder",
      key: index
    }, System_jsx("img", {
      src: `./images/logo-contributor/${item.img}.svg`,
      alt: `logo-${item.img}`
    })))));
  };

  return System_jsx(WrapperSystem, null, System_jsx("div", {
    className: "container"
  }, System_jsx(ContributorRender, {
    data: EcosystemData,
    title: "Ecosystem partners"
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
      rel: "noreferrer",
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
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: #fff;

    @media (max-width: 415px) {
      font-size: 26px;
    }
  }
  .img-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 45px;
    gap: 10px;

    @media (max-width: 576px) {
      padding: 30px 10px;
      justify-content: space-between;
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

    /* @media (max-width: 415px) {
      width: 70%;
    } */
  }
`;
const BecomeBox = external_styled_components_default.a.div`
  .content {
    text-align: center;
  }
  .header-content {
    font-size: 2rem;
    font-weight: 500;
  }
  .inner-content {
    font-size: 22px;
  }
  @media (max-width: 786px) {
    .header-content {
      font-size: 26px;
    }
    .inner-content {
      font-size: 14px;
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
  max-width: 30px;
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
  }, Partners_jsx(Partners_Text, null, "Liquidity Partners"), Partners_jsx(Partners_SubText, null)), Partners_jsx(Partners_WrapImg, null, Partners_jsx(Partners_ImgHalf, null, Partners_jsx("img", {
    src: "../images/home-page/partners.png",
    alt: "partner-img"
  })))));
};

const Partners_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 25px 0;
  @media (max-width: 770px) {
    padding: 15px;
    /* min-height: 80vh; */
  }
`;
const Partners_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  /* display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Partners_WrapImg = external_styled_components_default.a.div`
  width: 60%;
  margin: 0 4rem 0 auto;
  @media (min-width: 2100px) {
    width: 65%;
    margin: 0 10rem 0 auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
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
  /* margin-left: 80px; */
  width: 40%;
  text-align: left;
  /* max-width: 600px; */
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    max-width: unset;
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
  font-size: 22px;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ var components_Partners = (Partners);
// CONCATENATED MODULE: ./client/components/Home/components/Network.jsx
var Network_jsx = external_react_default.a.createElement;




const Network = () => {
  return Network_jsx(Network_BoxSection, null, Network_jsx(Network_WrapContainer, null, Network_jsx(Network_WrapContent, null, Network_jsx(Network_WrapImg, null, Network_jsx(WrapperButtonApp, null, Network_jsx(Network_ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Space Trade")), Network_jsx(Network_ImgHalf, null, Network_jsx("img", {
    src: "../images/home-page/network-02.png",
    alt: "space-network"
  }))), " ", Network_jsx(WrapTitle, null, Network_jsx(Network_Text, null, "Multi Network"), Network_jsx(Network_SubText, {
    className: "subtext__title"
  }, Network_jsx("span", null, "forbitspace "), " aggregator protocol is now available on Ethereum, Binance Smart Chain, and layer 2 Polygon, Arbitrum, and Optimism we currently launch each blockchain as by stage."), Network_jsx(Network_SubText, {
    className: "subtext__title"
  }, "We plan to support more EVM chains and non-EVM chains, Solana, Avalanche, and more in the months following launch."))), Network_jsx(Network_WrapContent, null, Network_jsx(Network_SubText, {
    className: "subtext__content"
  }, "The ", Network_jsx("span", null, "forbitspace "), " DEX super aggregator is an interoperability protocol that connects disparate blockchains. That unites decentralized applications across disparate blockchains, simultaneously uniting liquidity across chains and making it possible to transact in, out, and across disparate networks with ease."), Network_jsx(Network_WrapImg, {
    className: "img__swap"
  }, Network_jsx(WrapperButtonApp, null, Network_jsx(Network_ButtonBanner, {
    href: "https://app.forbitswap.com/#/swap",
    target: "_blank",
    rel: "noreferrer",
    className: "forbitswap"
  }, "forbitswap")), Network_jsx(Network_ImgHalf, null, Network_jsx("img", {
    src: "../images/home-page/network-01.png",
    alt: "swap-network"
  }))))));
};

const Network_BoxSection = external_styled_components_default.a.section`
  position: relative;
  padding: 6vh 0px 0;

  @media (max-width: 1024px) {
    padding: 25px 15px 0;
  }
`;
const Network_Text = external_styled_components_default.a.div`
  font-size: 2rem;
  font-weight: 500;
  text-align: right;
  padding: 1vh 0;
  @media (max-width: 768px) {
    font-size: 26px;
    padding: 10px 0 30px;
    text-align: center;
  }
`;
const Network_WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;
const WrapTitle = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;
const Network_WrapContent = external_styled_components_default.a.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    :first-child {
      flex-direction: column-reverse;
    }
  }
`;
const Network_WrapImg = external_styled_components_default.a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  &.img__swap {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70% !important;
    justify-content: center;
    :first-child {
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    width: 100% !important;
  }
`;
const Network_ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    padding: 10px 0 25px;
  }
`;
const Network_SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  /* width: 60%; */
  span {
    font-style: italic;
    font-weight: 900;
  }
  &.subtext__title {
    text-align: right;
  }
  &.subtext__content {
    width: 50%;
    padding: 40px 0;
  }
  /* @media (min-width: 1441px) {
    width: 50%;
    &.subtext__content {
      width: 35%;
    }
  } */
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100% !important;
    text-align: center !important;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    &.subtext__content {
      padding: 0;
    }
  }
`;
const WrapperButtonApp = external_styled_components_default.a.div`
  max-width: 350px;
  text-align: left;
  @media (max-width: 1200px) {
    display: block;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: unset;
  }
`;
const Network_ButtonBanner = external_styled_components_default.a.a`
  padding: 0.25rem 0.85rem;
  text-decoration: none;
  text-align: center;
  font-style: italic;
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
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
/* harmony default export */ var components_Network = (Network);
// CONCATENATED MODULE: ./client/components/Home/index.jsx
var Home_jsx = external_react_default.a.createElement;


 // import Pramaster from "./components/Pramaster";
// import Growing from "./components/Growing";
// import Suite from "./components/Suite";
// import Superpowers from "./components/Superpowers";

 // import Community from "./components/Community";
// import FBTCToken from "./components/FBTCToken";
// import Ecosystem from "./components/Ecosystem";

 // import SpaceNFTs from "./components/SpaceNFTs";










const Index = () => {
  return Home_jsx(external_react_default.a.Fragment, null, Home_jsx(components_Banner, null), Home_jsx(WrapperBackground, null, Home_jsx(external_reactstrap_["Container"], null, Home_jsx(components_Network, null), Home_jsx(components_Planet, null), Home_jsx(components_Liquidity, null), Home_jsx(components_LimitOrder, null), Home_jsx(components_Derivative, null), Home_jsx(components_SelfCustody, null), Home_jsx(components_Partners, null), Home_jsx(components_System, null)), Home_jsx(Footer["a" /* default */], null)));
};

const WrapperBackground = external_styled_components_default.a.div`
  position: relative;
  font-family: helvetica neue;
  /* background-image: url("../images/background-line-min.jpg"); */
  @media (max-width: 576px) {
    overflow-x: hidden;
  }
`;
const Home_BackgroundImg = external_styled_components_default.a.img`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: auto;
  height: 100vh;
  opacity: 0.15;
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
      src: `../images/space-planets/${item.img}.svg`,
      alt: item.img
    }))));
  };

  return __jsx(Main, null, __jsx(Orbit, null, __jsx(WrapperPlanet, null, __jsx(Circle, null, __jsx(Logo, null, __jsx("img", {
    src: "../images/space-planets/logo.png",
    alt: "logo-forbitspace"
  })), __jsx(RenderSystem, {
    data: DataRender
  }), __jsx(Earth, null, __jsx("img", {
    src: "../images/space-planets/earth.svg",
    alt: "earth-image"
  }), __jsx(Moon, null, __jsx("img", {
    src: "../images/space-planets/moon.svg",
    alt: "moon-image"
  })))))));
};

const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  /* height: 100vh; */
  display: flex;
  /* background-image: url("../images/Forbitspace-comming/background.jpg"); */
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
  background-image: url("../images/space-planets/circle-line.png");
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

// EXTERNAL MODULE: ./client/components/route/index.js
var route = __webpack_require__("E249");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Footer/constants.js
const DataSocialLinkFooter = [{
  link: "https://twitter.com/forbitspace",
  url: "../images/icon-social-footer/6.svg"
}, {
  link: "https://t.me/forbitspace",
  url: "../images/icon-social-footer/5.svg"
}, {
  link: "https://github.com/forbitspace",
  url: "../images/icon-social-footer/4.svg"
}, {
  link: "https://medium.com/@forbitspace",
  url: "../images/icon-social-footer/1.svg"
}, {
  link: "https://discord.com/invite/forbitspace",
  url: "../images/icon-social-footer/3.svg"
}, {
  link: "https://www.reddit.com/r/forbitspace/",
  url: "../images/icon-social-footer/2.svg"
}];
const navContent = [{
  link: "",
  nav: "Space Trade",
  contents: [{
    link: "/aggregation",
    content: "Aggregation Protocol"
  }, {
    link: "/liquidity",
    content: "Liquidity Protocol"
  }, {
    link: "/limit",
    content: "Limit Order Protocol"
  }, {
    link: "/derivative",
    content: "Derivative Protocol"
  }]
}, {
  link: "",
  nav: "Governance",
  contents: [// {
  //   link: "/token", //.../images/pdf/fbs-token-1.pdf
  //   content: "FBS Token",
  //   outLink: true,
  //   disable: true,
  // },
  {
    link: "/dao",
    content: "Space Dao"
  } // {
  //   link: "",
  //   content: "Pools",
  //   disable: true,
  // },
  // {
  //   link: "",
  //   content: "Farming",
  //   disable: true,
  // },
  // {
  //   link: "",
  //   content: "Stacking",
  //   disable: true,
  // },
  ]
}, {
  link: "",
  nav: "Developers",
  contents: [{
    link: "",
    content: "Documentation"
  }, {
    link: "../forbitspace-whitepaper.pdf",
    content: "Whitepaper",
    outLink: true
  }, {
    link: "https://github.com/forbitspace",
    content: "Github",
    outLink: true
  }, // {
  //   link: "",
  //   content: "Audits",
  //   disable: true,
  // },
  {
    link: "",
    content: "Bug bounty",
    disable: true
  }]
}, {
  nav: "Self-custody",
  link: "/selfcustody",
  contents: [{
    link: "/bridge",
    content: "Bridge Space"
  }, {
    link: "/mobile-wallet",
    content: "Mobile wallet"
  }, {
    link: "/smart-contract",
    content: "Smart contract wallet"
  }, {
    link: "/assets",
    content: "Asset management"
  }]
}, {
  nav: "Support",
  // disable: true,
  link: "",
  contents: [{
    link: "https://help.forbitspace.com/",
    content: "Help Center",
    outLink: true
  }, {
    link: "../documents/terms-of-service.pdf",
    content: "Term of Service",
    outLink: true
  }, {
    link: "../documents/privacy-policy.pdf",
    content: "Privacy Policy",
    outLink: true
  }]
}];
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./client/components/Footer/index.jsx
var __jsx = external_react_default.a.createElement;







const Index = () => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");

  const sendMail = async () => {
    await external_axios_default()({
      method: "GET",
      url: `http://192.168.31.132:1234/v1/mailer?email=${email}`
    });
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = () => {
    // console.log(validateEmail(email));
    if (validateEmail(email)) {
      sendMail();
      alert("Success! Thank you for joining us!");
    } else {
      alert("Your email is invalid. Please try again!");
    }
  };

  return __jsx("footer", {
    className: "footer"
  }, __jsx(FooterMenu, null, __jsx(external_reactstrap_["Container"], null, __jsx(ListMenu, null, navContent.map((item, index) => __jsx("ul", {
    className: "text-visi",
    key: index
  }, __jsx(TitleFooter, null, " ", item.link ? __jsx(route["Link"], {
    href: item.link
  }, item.nav) : item.nav, " "), item.contents.map((item, index) => __jsx("li", {
    key: index
  }, !item.disable ? item.outLink ? __jsx("a", {
    href: item.link,
    target: "_blank",
    rel: "noreferrer"
  }, item.content) : __jsx(route["Link"], {
    href: item.link
  }, item.content) : __jsx(Blank, {
    href: "/"
  }, item.content))))), __jsx("ul", {
    className: "text-visi"
  }, __jsx(SubTitleFooter, null, "Subscribe to our newsletter for updates"), __jsx("div", {
    className: "form-wrap",
    action: ""
  }, __jsx(WrapperInput, null, __jsx(Input, {
    type: "text",
    className: "text bg-input-dark",
    placeholder: "your@email.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    required: true,
    onChange: e => handleChange(e),
    onSubmit: e => {
      sendMail(), e.preventDefault();
    }
  })), __jsx("button", {
    type: "button",
    "aria-label": "send-email-address",
    onClick: handleSubmit
  }, __jsx("i", {
    className: "fa fa-arrow-right"
  }))), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 forbitspace"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return __jsx("a", {
      href: item.link,
      target: "_blank",
      rel: "noreferrer",
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
const Icon = external_styled_components_default.a.img`
  max-width: 20px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
const SocialLink = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const FooterMenu = external_styled_components_default.a.section`
  position: relative;
  padding: 30px 0 0;
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
    width: calc(100% / 6);
    // text-align:right;

    .form-wrap {
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
        background-position: 95%;

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
      font-family: sans-serif;
      margin-bottom: 4px;
      a {
        text-decoration: none;
        color: #4e4f50;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 1024px) {
      width: calc(100% / 5);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      .form-wrap {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      /* width: calc(100% / 6); */
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
      width: 32%;
    }
    @media (max-width: 320px) {
      width: 50%;
    }
  }
`;
const Blank = external_styled_components_default.a.div`
  font-size: 12px;
`;
const TitleFooter = external_styled_components_default.a.div`
  margin-bottom: 10px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  a {
    text-decoration: none;
  }
`;
const SubTitleFooter = external_styled_components_default.a.div`
  margin-bottom: 10px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 100;
  font-style: italic;
`;
const Copyright = external_styled_components_default.a.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
`;
const Input = external_styled_components_default.a.input`
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-style: italic;
  /* font-family: "Averta"; */
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
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;