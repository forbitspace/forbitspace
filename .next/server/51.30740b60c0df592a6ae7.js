exports.ids = [51];
exports.modules = {

/***/ "+Q27":
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




const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../gif/gif_aggregation-protocol.gif",
    alt: "aggregation-protocol"
  }))), __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Text, null, "Aggregation Protocol"), __jsx(SubText, null, __jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity."))));
};

const BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section`
    position: relative;
    padding: 8vh 0 0;
    margin: 0 0 2rem;
    @media (max-width: 770px) {
        padding-top: 60px;
        margin: 0 0 1rem;
    }
`;
const WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"])`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 576px) {
    }
`;
const WrapImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    width: 60%;
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
    text-align: center;
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
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

};;