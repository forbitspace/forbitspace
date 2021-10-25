exports.ids = [51];
exports.modules = {

/***/ "UxSZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HowItWorks = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Text, null, "How Do DEX Aggregators Work")), __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/home-page/howitwork-min.png",
    alt: ""
  }))), __jsx(Content, null, __jsx(SubText, null, __jsx("span", null, "forbitspace"), "'s aggregators source liquidity from different DEXs and thus offer users better token swap rates than they could get on any single DEX. DEX aggregators have the ability to optimize slippage, swap fees and token prices which, when done right, offer a better rate for users."))));
};

const BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 0vh 0 0;
  @media (max-width: 770px) {
    padding-top: 40px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
  @media (max-width: 576px) {
  }
`;
const WrapImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 60%;
  /* transform: rotate(-5deg); */
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const ImgHalf = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  /* margin-left: 80px; */
  /* width: 70%; */
  text-align: center;
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
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
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
const SubText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  &.toggle__btn {
    font-style: italic;
    font-weight: 400;
  }
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (HowItWorks);

/***/ })

};;