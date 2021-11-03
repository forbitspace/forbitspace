exports.ids = [53];
exports.modules = {

/***/ "/+/i":
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




const Finder = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(SubText, null, __jsx("span", null, "forbitspace"), " use an algorithm smart order routing that split a single transaction into multiple orders across various DEX\u2019s, also route orders through allows crypto traders to tap deep liquidity and receive better pricing low cost & efficient the most liquidity")), __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/home-page/pafider.png",
    alt: "logo-path-finder"
  })))));
};

const BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section`
    position: relative;
    margin: 0rem 0 1rem; //temporary margin
    padding: 10vh 0 5rem;
    @media (max-width: 1440px) {
        padding: 1rem 0;
    }
    @media (max-width: 770px) {
        padding: 20px 0 0;
        /* min-height: 80vh; */
    }
`;
const WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"])`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    /* @media (min-width: 1650px) {
    max-width: 80%;
  } */
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const WrapImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    width: 65%;
    /* transform: rotate(-5deg); */
    @media (max-width: 768px) {
        width: 80%;
    }
`;
const ImgHalf = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    width: 100%;
    text-align: left;
    transform: translate(-6rem);
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 1440px) {
        transform: translate(-8rem);
    }
    @media (max-width: 768px) {
        transform: scale(1);
    }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    /* margin-left: 80px; */
    width: 50%;
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
/* harmony default export */ __webpack_exports__["default"] = (Finder);

/***/ })

};;