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
  const {
    0: num,
    1: setNum
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    const myInterval = setInterval(() => {
      if (num < 4) {
        setNum(num + 1);
      } else {
        setNum(0);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }); // console.log('num ----->', num);

  return __jsx(BoxSection, null, __jsx(WrapImgBanner, null, __jsx(external_react_lazyload_default.a, {
    height: 400,
    once: true,
    placeholder: __jsx("img", {
      width: "1251",
      height: "409.79",
      src: "../images/network-banner.png",
      alt: "banner-picture"
    })
  }, __jsx("img", {
    width: "1251",
    height: "409.79" // src="../gif/gif_space.gif"
    ,
    src: "../gif/space-gif-min.gif" // src="https://firebasestorage.googleapis.com/v0/b/image-storage-2f921.appspot.com/o/space-gif-min.gif?alt=media&token=cc2417c4-61fa-4efd-8eab-fe1b042de325"
    ,
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
    /* margin-top: -20px; */

    @media (max-width: 770px) {
        margin-top: 0px;
        padding-top: 50px;
    }
`;
const WrapImgBanner = external_styled_components_default.a.div`
    width: 100vw;
    height: auto;
    max-width: 100%;
    margin-bottom: -20px;
    .lazyload-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100%;
        height: auto;
        max-width: 1250px;
    }
    @media (max-width: 768px) {
        margin-bottom: 0px;
    }
`;
const Content = external_styled_components_default.a.div`
    /* width: 75%; */
    width: 100%;
    text-align: right;
    @media (max-width: 1220px) {
        /* width: 85%; */
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
    line-height: 1.2;
    margin-left: 25%;
    span {
        font-style: italic;
        font-weight: 900;
    }
    @media (max-width: 1220px) {
        margin-left: 15%;
    }
    @media (max-width: 768px) {
        margin-left: 0;
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

    @media (max-width: 768px) {
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
    width: 45%;
    transform: scale(0.68);
    @media (max-width: 1440px) {
        transform: scale(0.65);
    }
    @media (max-width: 1024px) {
        transform: scale(0.55);
    }
    @media (max-width: 768px) {
        transform: scale(0.6);
        margin: -180px 0;
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
    width: 53%;
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
  img: "certik.png",
  link: "https://www.certik.com/projects/forbitspace"
}, {
  img: "skynet.png",
  link: "https://www.certik.com/projects/forbitspace"
}, {
  img: "hacken.svg",
  link: "https://hacken.io/audits/#forbitspace"
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
  // link: "https://discord.com/invite/forbitspace",
  link: "https://discord.gg/CnJqNa2wfG",
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
    }, System_jsx("a", {
      href: item.link,
      target: "_blank",
      rel: "noreferrer noreopenner",
      className: "link-to-web"
    }, System_jsx(external_react_lazyload_default.a, {
      height: 45
    }, System_jsx("img", {
      src: `./images/logo-contributor/${item.img}`,
      className: `img-${item.img.split(".")[0] ? item.img.split(".")[0] : "auditor"}`,
      alt: `logo-${item.img}`
    })))))));
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

        @media (max-width: 767px){
            gap: 7px;;
        }

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
            max-height: 65px;
        }
        .img-hacken {
            margin-left: -2rem;
            padding: 0;
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
                gap: 2rem;
            }
            .img-hacken {
                margin-left: 0;
            }
        }
    }
    @media (max-width: 768px) {
        &.auditor {
            .img-holder {
                padding: 10px 0;
            }
            .img-hacken {
                margin-left: 0;
                width: 100%;
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
    @media (max-width: 576px){
        margin-right: 10px;
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
        max-width: 24px;
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
// CONCATENATED MODULE: ./client/components/Home/components/Routing.jsx
var Routing_jsx = external_react_default.a.createElement;


const Routing_images = [{
  icon: "eth"
}, {
  icon: "bsc"
}, {
  icon: "polygon"
}, {
  icon: "ava"
}, {
  icon: "eth"
}, {
  icon: "bsc"
}, {
  icon: "polygon"
}, {
  icon: "ava"
}]; // const delay = 2500;

const Routing = () => {
  const {
    0: idx,
    1: setIdx
  } = Object(external_react_["useState"])(0);
  const delay = idx === 0 || idx === 8 ? 2000 : 4000;
  const timeoutRef = Object(external_react_["useRef"])(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  Object(external_react_["useEffect"])(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIdx(prevIndex => prevIndex === Routing_images.length ? 0 : prevIndex + 1), // () => setIdx(idx+1),
    delay);
    return () => {
      resetTimeout();
    };
  }, [idx]);
  return Routing_jsx(SlideShow, null, Routing_jsx("img", {
    src: "../images/home-page/eth.png",
    alt: "logo-icon",
    style: {
      opacity: 0
    }
  }), Routing_jsx(Slider, null, Routing_images.map((item, index) => Routing_jsx(Slide, {
    key: index
  }, Routing_jsx("img", {
    src: `../images/home-page/${item.icon}.png`,
    alt: `routing-${item.icon}`
  })))));
};

function template(i) {
  return `
        &:nth-child(${i + 1}) {
            transform: rotateY(${i * 45}deg) translateZ(500px);
            @media(max-width: 768px) {
                transform: rotateY(${i * 45}deg) translateZ(300px);
            }
            @media(max-width: 576px) {
                transform: rotateY(${i * 45}deg) translateZ(200px);
            }
        }
    `;
}

function getAnimations() {
  let str = "";

  for (let index = 0; index < 8; index += 1) {
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

  for (let i = 1; i <= 8; i += 1) {
    str += `
            ${i * 12.5}% {
                opacity: ${i == c ? 1 : 0};
            }
        `;
  }

  return str;
}

const SlideShow = external_styled_components_default.a.div`
    /* border: 1px solid #CCC; */
    position: relative;
    width: 100%;
    max-width: 680px;
    margin: 20px auto;
    /* perspective: 1000px; */
    @media (max-width: 1800px) {
        max-width: 600px;
    }
    @media (max-width: 1500px) {
        max-width: 500px;
    }
    @media (max-width: 1375px) {
        max-width: 460px;
    }
    @media (max-width: 1250px) {
        max-width: 380px;
    }
    /* @media (max-width: 1024px){
        max-width: 320px;
    }
    @media (max-width: 768px){
        max-width: 240px;
    } */
    /* @media (max-width: 690px){
        max-width: 200px;
    } */
    @media (max-width: 576px) {
        max-width: 300px;
    }
`;
const Slider = external_styled_components_default.a.div`
    width: 100%;
    height: 100%;
    max-width: 100vw;
    position: absolute;
    top: 0;
    transform: translateZ(-180px);
    transform-style: preserve-3d;
    animation: spin3d linear 70s infinite;

    @keyframes spin3d {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(-360deg);
        }
    }
`;
const Slide = external_styled_components_default.a.div`
    position: absolute;
    width: 100%;
    height: auto;
    /* left: 10px; */
    top: 10px;
    /* border: 2px solid black; */
    /* line-height: 116px; */
    /* font-size: 80px; */
    font-weight: bold;
    color: white;
    text-align: center;
    overflow: hidden;

    img {
        width: 100%;
        max-width: 680px;
    }
    @media (max-width: 1800px) {
        img {
            max-width: 600px;
        }
    }
    @media (max-width: 1500px) {
        img {
            max-width: 500px;
        }
    }
    @media (max-width: 1375px) {
        img {
            max-width: 460px;
        }
    }
    @media (max-width: 1250px) {
        img {
            max-width: 380px;
        }
    }
    /* @media (max-width: 1024px){
        img{
            max-width: 320px;
        }
    }
    @media (max-width: 768px){
        img{
            max-width: 240px;
        }
    } */
    /* @media (max-width: 690px){
        img{
            max-width: 200px;
        }
    } */
    @media (max-width: 576px) {
        img {
            max-width: 300px;
        }
    }

    ${getAnimations()}

    :nth-child(1) {
        animation: move1 linear infinite 70s;
        transform: rotateY(0deg) translateZ(1115px);
        @keyframes move1 {
            ${animation1(1, 1, 7, 8)}
        }
    }
    :nth-child(2) {
        animation: move2 linear infinite 70s;
        transform: rotateY(45deg) translateZ(1115px);
        @keyframes move2 {
            ${animation1(0, 2, 8, 1)}
        }
    }
    :nth-child(3) {
        animation: move3 linear infinite 70s;
        transform: rotateY(90deg) translateZ(1115px);
        @keyframes move3 {
            ${animation1(0, 1, 3, 2)}
        }
    }
    :nth-child(4) {
        animation: move4 linear infinite 70s;
        transform: rotateY(135deg) translateZ(1115px);
        @keyframes move4 {
            ${animation1(0, 2, 4, 3)}
        }
    }
    :nth-child(5) {
        animation: move5 linear infinite 70s;
        transform: rotateY(180deg) translateZ(1115px);
        @keyframes move5 {
            ${animation1(0, 3, 5, 4)}
        }
    }
    :nth-child(6) {
        animation: move6 linear infinite 70s;
        transform: rotateY(225deg) translateZ(1115px);
        @keyframes move6 {
            ${animation1(0, 4, 6, 5)}
        }
    }
    :nth-child(7) {
        animation: move7 linear infinite 70s;
        transform: rotateY(270deg) translateZ(1115px);
        @keyframes move7 {
            ${animation1(0, 5, 7, 6)}
        }
    }
    :nth-child(8) {
        animation: move8 linear infinite 70s;
        transform: rotateY(315deg) translateZ(1115px);
        @keyframes move8 {
            ${animation1(0, 6, 8, 7)}
        }
    }
    /* transition: ease-in-out opacity 1s;
    &:nth-child(1) { transform: rotateY(   0deg) translateZ(955px); }
    &:nth-child(2) { transform: rotateY(  45deg) translateZ(955px); }
    &:nth-child(3) { transform: rotateY(  90deg) translateZ(955px); }
    &:nth-child(4) { transform: rotateY( 135deg) translateZ(955px); }
    &:nth-child(5) { transform: rotateY( 180deg) translateZ(955px); }
    &:nth-child(6) { transform: rotateY( 225deg) translateZ(955px); }
    &:nth-child(7) { transform: rotateY( 270deg) translateZ(955px); }
    &:nth-child(8) { transform: rotateY( 315deg) translateZ(955px); } */
    @media (max-width: 1800px) {
        &:nth-child(1) {
            transform: rotateY(0deg) translateZ(925px);
        }
        &:nth-child(2) {
            transform: rotateY(45deg) translateZ(925px);
        }
        &:nth-child(3) {
            transform: rotateY(90deg) translateZ(925px);
        }
        &:nth-child(4) {
            transform: rotateY(135deg) translateZ(925px);
        }
        &:nth-child(5) {
            transform: rotateY(180deg) translateZ(925px);
        }
        &:nth-child(6) {
            transform: rotateY(225deg) translateZ(925px);
        }
        &:nth-child(7) {
            transform: rotateY(270deg) translateZ(925px);
        }
        &:nth-child(8) {
            transform: rotateY(315deg) translateZ(925px);
        }
    }
    @media (max-width: 1500px) {
        &:nth-child(1) {
            transform: rotateY(0deg) translateZ(865px);
        }
        &:nth-child(2) {
            transform: rotateY(45deg) translateZ(865px);
        }
        &:nth-child(3) {
            transform: rotateY(90deg) translateZ(865px);
        }
        &:nth-child(4) {
            transform: rotateY(135deg) translateZ(865px);
        }
        &:nth-child(5) {
            transform: rotateY(180deg) translateZ(865px);
        }
        &:nth-child(6) {
            transform: rotateY(225deg) translateZ(865px);
        }
        &:nth-child(7) {
            transform: rotateY(270deg) translateZ(865px);
        }
        &:nth-child(8) {
            transform: rotateY(315deg) translateZ(865px);
        }
    }
    @media (max-width: 1200px) {
        &:nth-child(1) {
            transform: rotateY(0deg) translateZ(625px);
        }
        &:nth-child(2) {
            transform: rotateY(45deg) translateZ(625px);
        }
        &:nth-child(3) {
            transform: rotateY(90deg) translateZ(625px);
        }
        &:nth-child(4) {
            transform: rotateY(135deg) translateZ(625px);
        }
        &:nth-child(5) {
            transform: rotateY(180deg) translateZ(625px);
        }
        &:nth-child(6) {
            transform: rotateY(225deg) translateZ(625px);
        }
        &:nth-child(7) {
            transform: rotateY(270deg) translateZ(625px);
        }
        &:nth-child(8) {
            transform: rotateY(315deg) translateZ(625px);
        }
    }
    @media (max-width: 576px) {
        &:nth-child(1) {
            transform: rotateY(0deg) translateZ(405px);
        }
        &:nth-child(2) {
            transform: rotateY(45deg) translateZ(405px);
        }
        &:nth-child(3) {
            transform: rotateY(90deg) translateZ(405px);
        }
        &:nth-child(4) {
            transform: rotateY(135deg) translateZ(405px);
        }
        &:nth-child(5) {
            transform: rotateY(180deg) translateZ(405px);
        }
        &:nth-child(6) {
            transform: rotateY(225deg) translateZ(405px);
        }
        &:nth-child(7) {
            transform: rotateY(270deg) translateZ(405px);
        }
        &:nth-child(8) {
            transform: rotateY(315deg) translateZ(405px);
        }
    }
`;
/* harmony default export */ var components_Routing = (Routing);
// CONCATENATED MODULE: ./client/components/Home/components/Network.jsx
var Network_jsx = external_react_default.a.createElement;




 // import Pramaster from "./Pramaster";

const Network = () => {
  return Network_jsx(external_react_default.a.Fragment, null, Network_jsx(Network_BoxSection, null, Network_jsx(Network_WrapContainer, {
    className: "container"
  }, Network_jsx(Network_WrapContent, {
    className: "content-space"
  }, Network_jsx(Network_WrapImg, {
    className: "image-space"
  }, Network_jsx(Network_ImgHalf, {
    className: "banner-space"
  }, Network_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Network_jsx("img", {
    // src="../images/home-page/network-02.png"
    src: "../images/home-page/banner.png" // src="https://firebasestorage.googleapis.com/v0/b/image-storage-2f921.appspot.com/o/space_dex_min.gif?alt=media&token=d7c24d47-8c9b-4ce5-9f76-62683113def6"
    ,
    alt: "space-network"
  }))), Network_jsx(WrapperButtonApp, null, Network_jsx(Network_ButtonBanner, {
    href: "https://app.forbitspace.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Space Trade"))), " ", Network_jsx(WrapTitle, {
    className: "title-space"
  }, Network_jsx(Network_Text, null, "Spread across Multiple Networks"), Network_jsx(Network_SubText, {
    className: "subtext__title"
  }, Network_jsx("span", null, "forbitspace"), " aggregator protocol is now available on Ethereum, Binance Smart Chain", Network_jsx("br", null), " and Polygon, Avalanche."), Network_jsx("br", null))))), Network_jsx(GifWrapper, {
    className: "banner-space"
  }, Network_jsx(components_Routing, null)), Network_jsx(Network_BoxSection, null, Network_jsx(Network_WrapContainer, {
    className: "container"
  }, Network_jsx(Network_WrapContent, {
    className: "content-space"
  }, Network_jsx(WrapTitle, {
    className: "title-space"
  }, Network_jsx("br", null), Network_jsx(Network_SubText, {
    className: "subtext__title"
  }, Network_jsx("span", null, "forbitspace"), " connects multiple blockchains, making the network\u2019s transaction from one chain to another seamless becomes that the additional functionality, usability, and scalability are blazingly fast, low cost & eco-friendly, brings is contributes to the benefit of users. ", Network_jsx("br", null), " "))), Network_jsx(Network_WrapContent, null, Network_jsx(Network_SubText, {
    className: "subtext__content"
  }, "The ", Network_jsx("span", null, "forbitspace"), " DEX super aggregator is an interoperability protocol that connects disparate blockchains. That unites decentralized applications across disparate blockchains, simultaneously uniting liquidity across chains and making it possible to transact in, out, and across disparate networks with ease."), Network_jsx(Network_WrapImg, {
    className: "img__swap"
  }, Network_jsx(WrapperButtonApp, {
    className: "btn-swap"
  }, Network_jsx(Network_ButtonBanner, {
    href: "https://app.forbitswap.com/#/swap",
    target: "_blank",
    rel: "noreferrer",
    className: "forbitswap"
  }, "forbitswap")), Network_jsx(Network_ImgHalf, null, Network_jsx(external_react_lazyload_default.a, {
    height: 200
  }, Network_jsx("img", {
    src: "../images/home-page/network-01.png",
    alt: "swap-network"
  }))))))));
};

const Network_BoxSection = external_styled_components_default.a.section`
    position: relative;
    padding: 2vh 0px 0;

    @media (max-width: 1024px) {
        padding: 10px 0 0;
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
const Network_WrapContainer = external_styled_components_default.a.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
    /* padding: 0%; */

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
    &.content-space{
        flex-direction: column;
        align-items: center;
        .title-space{
            width: 100%;
        }
        .image-space{
            width: 100%;
        }
        .banner-space{
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        :first-child {
            /* flex-direction: column-reverse; */
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
        padding: 10px 0;
    }
`;
const GifWrapper = external_styled_components_default.a.div`
    width: 100vw;
    max-width: 100%;
    overflow: hidden;
    text-align: center;
    img{
        width: 100%;
        max-width: 750px;
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
    /* max-width: 350px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: left;
    &.btn-swap{
        justify-content: center;
    }
    @media (max-width: 1200px) {
        /* display: block; */
    }
    @media (max-width: 768px){
        justify-content: center;
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
    padding: 0.35rem 0.85rem;
    /* margin-right: 1rem; */
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
        font-size: 14px;
    }
`;
/* harmony default export */ var components_Network = (Network);
// CONCATENATED MODULE: ./client/components/FlybyBanner/flyby-rocket-base64.js
const flyby_rocket = "data:image/png;base64,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";
// CONCATENATED MODULE: ./client/components/FlybyBanner/FlybyBanner.jsx
var FlybyBanner_jsx = external_react_default.a.createElement;




const FlybyBanner = () => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(true);
  return active ? FlybyBanner_jsx(Wrapper, null, FlybyBanner_jsx(GlobalStyle, null), FlybyBanner_jsx(FlybyBanner_Content, null, FlybyBanner_jsx("img", {
    src: "../images/icons/close-icon.svg",
    alt: "close icon",
    className: "close-icon",
    onClick: () => setActive(false)
  }), FlybyBanner_jsx("a", {
    href: "https://app.flybylaunchpad.com/#/live",
    target: "_blank",
    rel: "noreferrer",
    className: "box"
  }, FlybyBanner_jsx(WrapImage, null, FlybyBanner_jsx(Astronaut, null, FlybyBanner_jsx("img", {
    src: "../images/ido-popup/ido-gif",
    alt: "join background",
    className: "join-bg"
  }))))), FlybyBanner_jsx(BlurDiv, {
    onClick: () => setActive(false)
  })) : FlybyBanner_jsx(external_react_default.a.Fragment, null);
};

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
    body{
        overflow: hidden;
    }
    .header--nav{
        z-index: 0;
    }
`;
const Wrapper = external_styled_components_default.a.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    z-index: 9999999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const FlybyBanner_Content = external_styled_components_default.a.div`
    width: 50vw;
    height: fit-content;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .close-icon {
        width: 20px;
        position: absolute;
        top: 0px;
        right: 0px;
        cursor: pointer;
        opacity: 0.3;
    }
    :hover {
        .close-icon {
            opacity: 0.8;
        }
    }
    @media (max-width: 800px) {
        transform: scale(0.7);
        max-width: 280px;
        .close-icon {
            width: 24px;
            top: 0px;
            right: -10px;
        }
    }
`;
const WrapImage = external_styled_components_default.a.div`
    position: relative;
`;
const Astronaut = external_styled_components_default.a.div`
    /* position: absolute; */
    width: 220px;
    bottom: 0;
    left: 0;
    z-index: 999;
    &:hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
    }
`;
const FlybyBanner_Banner = external_styled_components_default.a.a`
    position: absolute;
    bottom: 85%;
    left: 72%;
    width: 125px;
    height: auto;
    z-index: 999;
    &:hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
    }
    @keyframes popup-scale {
        0% {
            opacity: 0;
        }
        90% {
            transform: scale(0);
            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
const BlurDiv = external_styled_components_default.a.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: #000000cc;
    width: 100%;
    height: 100%;
`;
/* harmony default export */ var FlybyBanner_FlybyBanner = (FlybyBanner);
// CONCATENATED MODULE: ./client/components/Home/index.jsx
var Home_jsx = external_react_default.a.createElement;














 // import ChristmasAnimation from "../ChristmasAnimation";

const Index = () => {
  return Home_jsx(external_react_default.a.Fragment, null, Home_jsx(FlybyBanner_FlybyBanner, null), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Banner, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Network, null)), Home_jsx(WrapperBackground, null, Home_jsx(external_reactstrap_["Container"], null, Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Planet, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Liquidity, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_LimitOrder, null)), Home_jsx(external_react_lazyload_default.a, {
    height: 250
  }, Home_jsx(components_Derivative, null)), Home_jsx(external_react_lazyload_default.a, {
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
  // link: "https://discord.com/invite/forbitspace",
  link: "https://discord.gg/CnJqNa2wfG",
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
  contents: [{
    link: "/fbs-token",
    content: "FBS Token"
  }, {
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
    link: "../terms-of-service.pdf",
    content: "Terms of Service",
    outLink: true
  }, {
    link: "../privacy-policy.pdf",
    content: "Privacy Policy",
    outLink: true
  }, {
    link: "/brandkit",
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
        padding: 40px 0 80px;

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
            width: 48%;
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