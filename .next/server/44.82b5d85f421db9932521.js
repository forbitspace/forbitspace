exports.ids = [44];
exports.modules = {

/***/ "E249":
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__("90Kz")();

routes.add("/:username", "profilepage");

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

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// CONCATENATED MODULE: ./client/components/Home/components/Banner.jsx
var __jsx = external_react_default.a.createElement;





const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapImgBanner, null, __jsx(external_react_lazyload_default.a, {
    height: 400
  }, __jsx("img", {
    width: "1251",
    height: "409.79",
    src: "../images/home-page/banner.png",
    alt: "banner-picture"
  }))), __jsx(external_reactstrap_["Container"], null, __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Title, null, __jsx("img", {
    src: "../images/home-page/forbitspace-word.png",
    alt: "forbitspace-dex-name"
  })), __jsx(Text, null, "The Decentralized Exchange Super Aggregator"), __jsx(SubText, null, __jsx("span", null, "forbitspace"), " is an interoperability aggregator protocol that unites decentralized applications across disparate blockchains. Allows crypto traders to tap deep liquidity and receive better pricing one single interface."), __jsx(ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", "Launch App", " ", __jsx("img", {
    src: "../images/chevron-right.svg",
    alt: "button-launch-app-chevron"
  })))));
};

const BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 2vh 0 0;
    transition: min-height 0.3s;
    margin-top: -40px;

    @media (max-width: 770px) {
        margin-top: 0px;
        padding-top: 50px;
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
    width: 75%;
    @media (max-width: 1220px) {
        width: 85%;
    }
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
    /* font-family: sans-serif; */
    line-height: 1.2;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 576px) {
        font-size: 16px;
        margin-top: 2rem;
        line-height: 1.5;
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
    margin-top: 1rem;
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
    /* max-width: 150px; */
    white-space: nowrap;
    overflow: hidden;
    background-size: 200%;
    background-position: right;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    /* :hover {
        color: white;
    } */

    img {
        max-height: 12px;
    }
    @media (min-width: 576px) {
        display: none;
    }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Planets/Planet.jsx

var Planet_jsx = external_react_default.a.createElement;



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
    return Planet_jsx(System, null, data.map((item, index) => Planet_jsx(Planets, {
      key: index
    }, Planet_jsx(external_react_lazyload_default.a, {
      height: 80
    }, Planet_jsx("img", {
      src: `../images/space-planets/${item.img}.svg`,
      alt: item.img
    })))));
  };

  return Planet_jsx(Main, null, Planet_jsx(Orbit, null, Planet_jsx(WrapperPlanet, null, Planet_jsx(Circle, null, Planet_jsx(Logo, null, Planet_jsx(external_react_lazyload_default.a, {
    height: 180
  }, Planet_jsx("img", {
    src: "../images/space-planets/logo.png",
    alt: "logo-forbitspace"
  }))), Planet_jsx(RenderSystem, {
    data: DataRender
  }), Planet_jsx(Earth, null, Planet_jsx(external_react_lazyload_default.a, {
    height: 80
  }, Planet_jsx("img", {
    src: "../images/space-planets/earth.svg",
    alt: "earth-image"
  })), Planet_jsx(Moon, null, Planet_jsx(external_react_lazyload_default.a, {
    height: 80
  }, Planet_jsx("img", {
    src: "../images/space-planets/moon.svg",
    alt: "moon-image"
  }))))))));
};

const Main = external_styled_components_default.a.div`
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: flex-start;
`;
const Orbit = external_styled_components_default.a.div`
    height: 80%;
    width: 100%;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const WrapperPlanet = external_styled_components_default.a.div`
    display: flex;
    justify-content: center;
    /* @media (min-height: 1260px) {
        transform: scale(1);
    }
    @media (min-width: 1281px) {
        transform: scale(1);
    } */

    @media (min-width: 1024px) {
        transform: scale(1);
    }

    @media (max-height: 768px) {
        transform: scale(0.7);
    }

    @media (max-height: 768px) {
        transform: scale(0.7);
    }
`;
const System = external_styled_components_default.a.div``;
const Circle = external_styled_components_default.a.div`
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
const Logo = external_styled_components_default.a.div`
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
const Planets = external_styled_components_default.a.div`
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
const Earth = external_styled_components_default.a.div`
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
const Moon = external_styled_components_default.a.div`
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
/* harmony default export */ var Planets_Planet = (Planet);
// CONCATENATED MODULE: ./client/components/Home/components/Planet.jsx
var components_Planet_jsx = external_react_default.a.createElement;






const Planet_Planet = () => {
  return components_Planet_jsx(Planet_BoxSection, null, components_Planet_jsx(WrapContainer, null, components_Planet_jsx(WrapPlanet, null, components_Planet_jsx(Planets_Planet, null)), components_Planet_jsx(Planet_Content, {
    className: "title-banner text-dark"
  }, components_Planet_jsx(Planet_Title, null, components_Planet_jsx(external_react_lazyload_default.a, {
    height: 500
  }, components_Planet_jsx("img", {
    src: "../images/home-page/forbitspace-word.png",
    alt: "forbitspace-dex-name"
  }))), components_Planet_jsx(Planet_Text, null, "Aggregation Protocol"), components_Planet_jsx(Planet_SubText, null, components_Planet_jsx("span", null, "forbitspace"), " is an aggregator protocol that allows traders to benefit from a large variety of financial tools in a single interface."), components_Planet_jsx(Planet_SubText, null, components_Planet_jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity."))));
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
const WrapContainer = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const WrapPlanet = external_styled_components_default.a.div`
    width: 50%;
    transform: scale(0.68);
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
        transform: scale(0.4);
        margin: -220px 0;
    }
    @media (max-width: 320px) {
        /* transform: scale(0.4); */
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
    line-height: 1.2;
    padding: 0 0 10px;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 16px;
        line-height: 1.5;
    }
`;
const Planet_Text = external_styled_components_default.a.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1px;
    padding: 10px 0;
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
    name: "bsc"
  }, {
    name: "eth"
  }, {
    name: "sushi"
  }, {
    name: "uni"
  }, {
    name: "usdc"
  }, {
    name: "polygon"
  }];
  return LiquidityAnimation_jsx(WrapContent, null, LiquidityAnimation_jsx(BackgroundImg, null, LiquidityAnimation_jsx(external_react_lazyload_default.a, {
    height: 500
  }, LiquidityAnimation_jsx("img", {
    src: "../images/liquidity Pool/background-forbit.png",
    alt: "liquidity"
  }))), LiquidityAnimation_jsx(ItemImg, null, dataTokens.map((item, index) => LiquidityAnimation_jsx(ImgWrap, {
    className: `img-${index}`,
    key: index
  }, LiquidityAnimation_jsx(external_react_lazyload_default.a, {
    height: 500
  }, LiquidityAnimation_jsx("img", {
    src: `../images/liquidity Pool/icon-${item.name}-min.png`,
    alt: item.name + "-icon"
  }))))));
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
        top: 28%;
        left: calc(52% - 70px);
        width: 120px;
        animation: moving 7s infinite;
    }
    &.img-1 {
        top: 7%;
        left: calc(24% - 40px);
        width: 80px;
        animation: moving 5.3s infinite;
    }
    &.img-2 {
        top: 12%;
        left: calc(73% - 40px);
        width: 80px;
        animation: moving 6.9s infinite;
    }
    &.img-3 {
        top: -3%;
        left: calc(35% - 37px);
        width: 74px;
        animation: moving 5.6s infinite;
    }
    &.img-4 {
        top: 8%;
        left: calc(50% - 40px);
        width: 74px;
        animation: moving 4.3s infinite;
    }
    &.img-5 {
        top: 22%;
        left: calc(30% - 35px);
        width: 70px;
        animation: moving 7.5s infinite;
    }
    &.img-6 {
        top: -14%;
        left: calc(53% - 40px);
        width: 65px;
        animation: moving 4.4s infinite;
    }
    &.img-7 {
        top: -5%;
        left: calc(67% - 40px);
        width: 80px;
        animation: moving 6.9s infinite;
    }
    &.img-8 {
        top: 25%;
        left: calc(70% - 40px);
        width: 80px;
        animation: moving 3.9s infinite;
    }
    img {
        transform: scale(1);
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
        &.img-6 {
            top: -10%;
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
    }

    @keyframes moving {
        0% {
            transform: translateY(22px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(22px);
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
  }, "forbitspace"), ", the decentralized protocol that empowering traders to provide liquidity to pools and collect extra rewards in", " ", Liquidity_jsx("span", {
    className: "fbs"
  }, "FBS"), " tokens for participating in liquidity mining programs."), Liquidity_jsx(Liquidity_SubText, null, "A next-generation automated market maker that protects users from front-running attacks and offers capital efficiency to liquidity providers. Enables you to deposit digital assets into liquidity pools while earning interest in real-time in the form of", " ", Liquidity_jsx("span", {
    className: "fbs"
  }, " FBS"), " tokens. Liquidity providers collect rewards on assets locked in pools and extra yield farming rewards in", " ", Liquidity_jsx("span", {
    className: "fbs"
  }, "FBS"), " tokens.")), Liquidity_jsx(WrapLiquidity, null, Liquidity_jsx(ImgHalf, null, Liquidity_jsx(components_LiquidityAnimation, null)))));
};

const Liquidity_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 45px 0;
    @media (max-width: 770px) {
        padding-top: 10px;
    }
`;
const Liquidity_WrapContainer = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
    @media (max-width: 576px) {
        gap: 30px;
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
    padding: 10px 0;
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
    line-height: 1.2;
    padding: 0 0 10px;
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
        line-height: 1.5;
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
  return LimitOrder_jsx(LimitOrder_BoxSection, null, LimitOrder_jsx(LimitOrder_WrapContainer, null, LimitOrder_jsx(WrapImg, null, LimitOrder_jsx(LimitOrder_ImgHalf, null, LimitOrder_jsx(external_react_lazyload_default.a, null, LimitOrder_jsx("img", {
    src: "../images/home-page/limit.png",
    alt: "limit-order"
  })))), LimitOrder_jsx(LimitOrder_Content, {
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
    }
`;
const LimitOrder_WrapContainer = external_styled_components_default.a.div`
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
    line-height: 1.2;
    padding: 0 0 10px;
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
        line-height: 1.5;
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
  }, open ? "Hide" : "Read more...")), Derivative_jsx(Derivative_WrapImg, null, Derivative_jsx(Derivative_ImgHalf, null, Derivative_jsx(external_react_lazyload_default.a, null, Derivative_jsx("img", {
    src: "../images/home-page/derivative.png",
    alt: "derivative"
  }))))));
};

const Derivative_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 25px 0;
    @media (max-width: 770px) {
        padding: 10px 0;
    }
`;
const Derivative_WrapContainer = external_styled_components_default.a.div`
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
    line-height: 1.2;
    padding: 10px 0 0;
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
        line-height: 1.5;
        font-size: 16px;
    }
`;
/* harmony default export */ var components_Derivative = (Derivative);
// CONCATENATED MODULE: ./client/components/Home/components/SelfCustody.jsx
var SelfCustody_jsx = external_react_default.a.createElement;





const SelfCustody = () => {
  return SelfCustody_jsx(SelfCustody_BoxSection, null, SelfCustody_jsx(SelfCustody_WrapContainer, null, SelfCustody_jsx(SelfCustody_WrapLiquidity, null, SelfCustody_jsx(SelfCustody_ImgHalf, null, SelfCustody_jsx(external_react_lazyload_default.a, {
    height: 200
  }, SelfCustody_jsx("img", {
    src: "../images/home-page/self-custody-min.png",
    alt: "self-custody"
  })))), SelfCustody_jsx(SelfCustody_Content, null, SelfCustody_jsx(SelfCustody_Text, null, "Self-custody"), SelfCustody_jsx(SelfCustody_SubText, null, "In the world DeFi, your money becomes empowered. You can store it, lend it, trade it, zap it, and track it in real-time. It\u2019s a bit like a game but at the heart of this is more control, aka self-custody."), SelfCustody_jsx(SelfCustody_SubText, null, "Self-custody refers to individuals being 100% in control of their assets, similar to cash. Except this is digital cash, and it\u2019s not dependent on a bank or other entity to issue it or verify transactions. This is precisely why blockchain was such a huge innovation starting with Bitcoin and then Ethereum."))));
};

const SelfCustody_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 25px 0;

    @media (max-width: 768px) {
        padding-top: 10px;
        /* min-height: 80vh; */
    }
`;
const SelfCustody_WrapContainer = external_styled_components_default.a.div`
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
    line-height: 1.2;
    padding: 10px 0 0;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        line-height: 1.5;
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
const AuditData = [{
  img: "certik.png"
}, {
  img: "skynet.png"
}];
const EcosystemData = [{
  img: "eth.svg"
}, {
  img: "binance.svg"
}, {
  img: "solana.svg"
}, {
  img: "polygon.svg"
}, {
  img: "avalanche.svg"
}, {
  img: "arbitrum.svg"
}, {
  img: "coinbase.svg"
}, {
  img: "metamask.svg"
}, {
  img: "near.svg"
}, {
  img: "trust-wallet.svg"
}, {
  img: "fire-block.svg"
}, {
  img: "wallet-connect.svg"
}, {
  img: "safepal.svg"
}, {
  img: "coin-gecko.svg"
}, {
  img: "defillama.svg"
}, {
  img: "link.svg"
}, {
  img: "the-graph.svg"
}, {
  img: "dune.svg"
}, {
  img: "phantom.svg"
}, {
  img: "zapper.svg"
}, {
  img: "boarc.png"
}, {
  img: "crypto.svg"
}, {
  img: "alpha-wallet.svg"
}, {
  img: "intotheblock.svg"
}, {
  img: "de-bank.svg"
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
}, {
  link: "https://www.youtube.com/channel/UCU9ejvfmL6p2Pdwp2-q163w",
  url: "../images/icon-social-footer/7.svg"
}];
// CONCATENATED MODULE: ./client/components/Home/components/System.jsx

var System_jsx = external_react_default.a.createElement;




const System_System = () => {
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
    }, System_jsx(external_react_lazyload_default.a, {
      height: 45
    }, System_jsx("img", {
      src: `./images/logo-contributor/${item.img}`,
      alt: `logo-${item.img}`
    }))))));
  };

  const AuditorRender = ({
    data,
    title
  }) => {
    return System_jsx(WrapperInner, {
      className: "auditor"
    }, System_jsx("div", {
      className: "header"
    }, title), System_jsx("div", {
      className: "img-content"
    }, data.map((item, index) => System_jsx("div", {
      className: "img-holder",
      key: index
    }, System_jsx(external_react_lazyload_default.a, {
      height: 45
    }, System_jsx("img", {
      src: `./images/logo-contributor/${item.img}`,
      alt: `logo-${item.img}`
    }))))));
  };

  return System_jsx(WrapperSystem, null, System_jsx("div", {
    className: "container"
  }, System_jsx(ContributorRender, {
    data: EcosystemData,
    title: "Ecosystem partners"
  }), System_jsx(AuditorRender, {
    data: AuditData,
    title: "Security Audit Partner"
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
    &.auditor {
        .img-content {
            justify-content: center;
            padding: 15px 0 45px;
            gap: 6rem;
        }
    }
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
        align-items: center;
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
    @media (max-width: 1024px) {
        &.auditor {
            .img-content {
                gap: 3rem;
            }
        }
    }
    @media (max-width: 576px) {
        &.auditor {
            .img-content {
                gap: 10px;
            }
        }
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
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 1px;
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
/* harmony default export */ var components_System = (System_System);
// CONCATENATED MODULE: ./client/components/Home/components/Partners.jsx
var Partners_jsx = external_react_default.a.createElement;





const Partners = () => {
  return Partners_jsx(Partners_BoxSection, null, Partners_jsx(Partners_WrapContainer, null, Partners_jsx(Partners_Content, {
    className: "title-banner text-dark text-visi"
  }, Partners_jsx(Partners_Text, null, "Liquidity Partners"), Partners_jsx(Partners_SubText, null)), Partners_jsx(Partners_WrapImg, null, Partners_jsx(Partners_ImgHalf, null, Partners_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Partners_jsx("img", {
    src: "../images/home-page/partners.png",
    alt: "partner-img"
  }))))));
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
  }, "Space Trade")), Network_jsx(Network_ImgHalf, null, Network_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Network_jsx("img", {
    src: "../images/home-page/network-02.png",
    alt: "space-network"
  })))), " ", Network_jsx(WrapTitle, null, Network_jsx(Network_Text, null, "Spread across Multiple Networks"), Network_jsx(Network_SubText, {
    className: "subtext__title"
  }, Network_jsx("span", null, "forbitspace"), " aggregator protocol is now available on Ethereum, Binance Smart Chain, and layer 2 Polygon, Avalanche, Arbitrum, and Optimism we currently launch each blockchain as by stage.", Network_jsx("br", null), " As the decentralized space is growing at lightning speed.", Network_jsx("br", null), Network_jsx("br", null), Network_jsx("span", null, "forbitspace"), " connects multiple blockchains, making the network\u2019s transaction from one chain to another seamless becomes that the additional functionality, usability, and scalability are blazingly fast, low cost, & eco-friendly, brings is contributes to the benefit of users. ", Network_jsx("br", null), " ", Network_jsx("br", null), "We plan to support more EVM chains and non-EVM chains, Solana, and more in the months following launch."))), Network_jsx(Network_WrapContent, null, Network_jsx(Network_SubText, {
    className: "subtext__content"
  }, "The ", Network_jsx("span", null, "forbitspace"), " DEX super aggregator is an interoperability protocol that connects disparate blockchains. That unites decentralized applications across disparate blockchains, simultaneously uniting liquidity across chains and making it possible to transact in, out, and across disparate networks with ease."), Network_jsx(Network_WrapImg, {
    className: "img__swap"
  }, Network_jsx(WrapperButtonApp, null, Network_jsx(Network_ButtonBanner, {
    href: "https://app.forbitswap.com/#/swap",
    target: "_blank",
    rel: "noreferrer",
    className: "forbitswap"
  }, "forbitswap")), Network_jsx(Network_ImgHalf, null, Network_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Network_jsx("img", {
    src: "../images/home-page/network-01.png",
    alt: "swap-network"
  })))))));
};

const Network_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 6vh 0px 0;

    @media (max-width: 1024px) {
        padding: 25px 0 0;
    }
`;
const Network_Text = external_styled_components_default.a.div`
    font-size: 2rem;
    font-weight: 500;
    text-align: right;
    padding: 10px 0;
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
    padding: 1rem 0;
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
    line-height: 1.2;
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
    @media (max-width: 768px) {
        font-size: 14px;
        width: 100% !important;
        text-align: center !important;
    }
    @media (max-width: 576px) {
        font-size: 16px;
        line-height: 1.5;
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
    color: white;
    text-decoration: none;
    text-align: center;
    font-style: italic;
    font-weight: 500;
    font-size: 1.125rem;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: rgb(255, 255, 255);
    width: 100%;
    max-width: 150px;
    border-radius: 12px;
    padding: 0.25rem 0.85rem;
    margin-right: 1rem;
    display: inline-block;
    transform: scale(0.98);
    box-sizing: border-box;
    transition: transform 0.25s ease 0s;
    cursor: pointer;
    overflow: hidden;

    background-image: linear-gradient(
        38deg,
        #00ff36 -10%,
        #00ee57 3%,
        #00c5ad 32%,
        #00a4f1 53%,
        #0b18fc 102%,
        #0d00ff 111%
    );
    background-size: 200%;
    background-position: 99%;

    &.forbitswap {
        background-size: 110%;
        background-position: 30%;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
/* harmony default export */ var components_Network = (Network);
// CONCATENATED MODULE: ./client/components/ChristmasAnimation/components/Noel.jsx
var Noel_jsx = external_react_default.a.createElement;



const Noel = () => {
  return Noel_jsx(Noel_WrapContent, null, Noel_jsx(Snowflake, {
    className: "snowflakes",
    "aria-hidden": "true"
  }, Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2746"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2746"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2746"), Noel_jsx("div", {
    className: "snowflake"
  }, "\u2745")), Noel_jsx(WrapImage, null, Noel_jsx("img", {
    src: "../images/design-image/noel_2.png",
    alt: "noel-image"
  })), Noel_jsx(WrapImage, null, Noel_jsx("img", {
    src: "../images/design-image/noel_3.png",
    alt: "noel-image"
  })), Noel_jsx(WrapImage, null, Noel_jsx("img", {
    src: "../images/design-image/noel_1.png",
    alt: "noel-image"
  })));
};

const shake = external_styled_components_["keyframes"]`
    0% {
        transform: rotate(-20deg);
    }
    25% {
        transform: rotate(20deg);
    }
    50% {
        transform: rotate(-20deg);
    }
    75% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-20deg);
    }
`;
const Noel_WrapContent = external_styled_components_default.a.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
    position: relative;
    @media (max-width: 576px) {
        gap: 3px;
    }
`;
const WrapImage = external_styled_components_default.a.div`
    width: 33%;
    animation: ${shake} 5s linear infinite;

    img {
        width: 100%;
        max-width: 100px;
    }
`;
const Snowflake = external_styled_components_default.a.div`
    .snowflake {
        color: #ffffff !important;
        font-size: 1em;
        font-family: Arial;
        text-shadow: 0 0 1px #000;
        opacity: 0.8;
    }

    @-webkit-keyframes snowflakes-fall {
        0% {
            top: -30%;
        }
        100% {
            top: 100%;
        }
    }
    @-webkit-keyframes snowflakes-shake {
        0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
        }
        50% {
            -webkit-transform: translateX(80px);
            transform: translateX(80px);
        }
        100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
        }
    }
    @keyframes snowflakes-fall {
        0% {
            top: -30%;
        }
        100% {
            top: 100%;
        }
    }
    @keyframes snowflakes-shake {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(40px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    .snowflake {
        position: absolute;
        top: -30%;
        z-index: 9999;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        -webkit-animation-name: snowflakes-fall, snowflakes-shake;
        -webkit-animation-duration: 4s, 10s;
        -webkit-animation-timing-function: linear, ease-in-out;
        -webkit-animation-iteration-count: infinite, infinite;
        -webkit-animation-play-state: running, running;
        animation-name: snowflakes-fall, snowflakes-shake;
        animation-duration: 4s, 10s;
        animation-timing-function: linear, ease-in-out;
        animation-iteration-count: infinite, infinite;
        animation-play-state: running, running;
    }
    .snowflake:nth-of-type(0) {
        left: 1%;
        -webkit-animation-delay: 0s, 0s;
        animation-delay: 0s, 0s;
    }
    .snowflake:nth-of-type(1) {
        left: 10%;
        -webkit-animation-delay: 1s, 1s;
        animation-delay: 1s, 1s;
    }
    .snowflake:nth-of-type(2) {
        left: 20%;
        -webkit-animation-delay: 6s, 0.5s;
        animation-delay: 6s, 0.5s;
    }
    .snowflake:nth-of-type(3) {
        left: 30%;
        -webkit-animation-delay: 4s, 2s;
        animation-delay: 4s, 2s;
    }
    .snowflake:nth-of-type(4) {
        left: 40%;
        -webkit-animation-delay: 2s, 2s;
        animation-delay: 2s, 2s;
    }
    .snowflake:nth-of-type(5) {
        left: 50%;
        -webkit-animation-delay: 8s, 3s;
        animation-delay: 8s, 3s;
    }
    .snowflake:nth-of-type(6) {
        left: 60%;
        -webkit-animation-delay: 6s, 2s;
        animation-delay: 6s, 2s;
    }
    .snowflake:nth-of-type(7) {
        left: 70%;
        -webkit-animation-delay: 2.5s, 1s;
        animation-delay: 2.5s, 1s;
    }
    .snowflake:nth-of-type(8) {
        left: 80%;
        -webkit-animation-delay: 1s, 0s;
        animation-delay: 1s, 0s;
    }
    .snowflake:nth-of-type(9) {
        left: 90%;
        -webkit-animation-delay: 3s, 1.5s;
        animation-delay: 3s, 1.5s;
    }
`;
/* harmony default export */ var components_Noel = (Noel);
// CONCATENATED MODULE: ./client/components/ChristmasAnimation/index.jsx
var ChristmasAnimation_jsx = external_react_default.a.createElement;




const ChristmasAnimation = () => {
  return ChristmasAnimation_jsx(Wrapper, null, ChristmasAnimation_jsx(ChristmasAnimation_Content, null, ChristmasAnimation_jsx(components_Noel, null)));
};

const Wrapper = external_styled_components_default.a.div``;
const ChristmasAnimation_Content = external_styled_components_default.a.div`
    width: 240px;
    overflow: hidden;

    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    @media (min-width: 1550px) {
        width: 350px;
        bottom: 2.5rem;
        left: 2.5rem;
    }
    @media (max-width: 768px) {
        width: 210px;
    }
    @media (max-width: 576px) {
        left: 0.5rem;
        bottom: 0.5rem;
        width: 150px;
    }
`;
/* harmony default export */ var components_ChristmasAnimation = (ChristmasAnimation);
// CONCATENATED MODULE: ./client/components/Home/index.jsx
var Home_jsx = external_react_default.a.createElement;
















const Index = () => {
  return Home_jsx(external_react_default.a.Fragment, null, Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Banner, null)), Home_jsx(WrapperBackground, null, Home_jsx(external_reactstrap_["Container"], null, Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Network, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Planet, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_ChristmasAnimation, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Liquidity, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_LimitOrder, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }), Home_jsx(components_Derivative, null), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_SelfCustody, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Partners, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_System, null))), Home_jsx(Footer["a" /* default */], null)));
};

const WrapperBackground = external_styled_components_default.a.div`
    position: relative;
    font-family: "helvetica neue", "Roboto", sans-serif;
    @media (max-width: 576px) {
        overflow-x: hidden;
    }
`;
/* harmony default export */ var Home = __webpack_exports__["default"] = (Index);

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
}, {
  link: "https://www.youtube.com/channel/UCU9ejvfmL6p2Pdwp2-q163w",
  url: "../images/icon-social-footer/7.svg"
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
    link: "https://docs.forbitspace.com/",
    content: "Documentation",
    outLink: true
  }, {
    link: "../forbitspace-whitepaper.pdf",
    content: "Whitepaper",
    outLink: true
  }, {
    link: "https://github.com/forbitspace",
    content: "Github",
    outLink: true
  }, {
    link: "https://github.com/forbitspace/forbitspace-audits",
    content: "Audit",
    outLink: true
  }, {
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
    link: "https://blog.forbitspace.com/",
    content: "Blog",
    outLink: true
  }, {
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
  }, {
    link: "/branding",
    content: "Press & Brand" // outLink: true,

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
    className: "text-visi input-field"
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
  })), __jsx(ButtonSend, {
    type: "button",
    "aria-label": "send-email-address",
    onClick: handleSubmit
  }, __jsx("img", {
    src: "../images/icons/arrow-right.svg",
    className: "arrow-right",
    alt: "arrow-right-icon"
  }))), __jsx(Copyright, {
    className: "text-dark foundation"
  }, "forbitspace foundation LLC"), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 @forbitspace, All Rights Reserved, Disclaimer"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
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
    @media (min-width: 1025px) {
        justify-content: flex-start;
    }
`;
const FooterMenu = external_styled_components_default.a.section`
    position: relative;
    padding: 30px 0;
    overflow: hidden;
    .arrow-right {
        width: 12px;
    }

    @media (max-width: 576px) {
        padding: 40px 0;

        &:after {
            content: none;
        }
    }
`;
const ListMenu = external_styled_components_default.a.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 25px;
    .input-field {
        width: 30%;
    }
    ul {
        padding-left: 0;
        width: 14%;
        // text-align:right;

        .form-wrap {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            input {
            }
        }

        li {
            font-size: 12px;
            font-weight: 300;
            font-family: sans-serif;
            margin-bottom: 4px;
            font-style: italic;
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
    @media (max-width: 576px) {
        gap: 2%;

        .input-field {
            padding: 1rem 0;
        }
    }
`;
const Blank = external_styled_components_default.a.div`
    font-size: 12px;
`;
const TitleFooter = external_styled_components_default.a.li`
    margin-bottom: 10px !important;
    color: #ffffff;
    font-family: sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    font-style: normal !important;
    a {
        text-decoration: none;
    }
    @media (max-width: 576px) {
        overflow: hidden;
        text-overflow: ellipsis;
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
    margin-bottom: 6px;
    &.foundation {
        padding-left: 1.5rem;
        margin-bottom: 3px;
    }
    @media (max-width: 1024px) {
        &.foundation {
            padding-left: unset;
        }
    }
`;
const Input = external_styled_components_default.a.input`
    /* width: 100%; */
    max-width: 100%;
    height: 30px;
    margin-right: 5px;
    font-style: italic;
    font-size: 14px;
    padding: 0px 15px;
    line-height: 20px;
    outline: 0;
    transition: all 0.3s ease-in-out;
    background: transparent;
    border-radius: 10px;
    position: relative;
    border: none;
    background: #cff3f4;
    border: 1px solid #0047b2;
    background: #001225;
    color: #ffffff;
    ::placeholder {
        font-weight: 100;
    }
`;
const WrapperInput = external_styled_components_default.a.div`
    position: relative;
    border-radius: 10px;
    margin-right: 5px;
`;
const ButtonSend = external_styled_components_default.a.button`
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

    display: flex;
    align-items: center;
    justify-content: center;

    i {
        color: #fff;
        font-size: 12px;
    }

    :hover {
        background-size: 200%;
        background-position: right;
    }
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;