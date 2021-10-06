exports.ids = [51];
exports.modules = {

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

/***/ })

};;