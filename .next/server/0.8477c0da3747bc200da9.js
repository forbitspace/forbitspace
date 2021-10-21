exports.ids = [0];
exports.modules = {

/***/ "1LJG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ComingSoon; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./client/components/ComingSoon/ComingSoon.jsx
var __jsx = external_react_default.a.createElement;



const Index = () => {
  return __jsx(StyledPage, null, __jsx(Img1, null, __jsx("img", {
    src: "./images/comingsoontext.png",
    alt: ""
  })), __jsx(Img2, null, __jsx("img", {
    src: "./images/comming-earth.png",
    alt: ""
  })), __jsx(Img3, null, __jsx("img", {
    src: "./images/commingbackground.png",
    alt: ""
  })), __jsx(ImgMobile, null, __jsx("img", {
    src: "./images/bg_phone-05.png",
    alt: ""
  })));
};

const Img1 = external_styled_components_default.a.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    right: 0;
    bottom: 0;
    margin: auto;
    img {
        max-width: 700px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        @media(max-width: 576px) {
            width: 90%;
        }
    }
`;
const Img2 = external_styled_components_default.a.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: .8;
    animation: linear spinner 60s infinite;
    img {
        max-width: 700px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        @media(max-width: 576px) {
            width: 90%;
        }
    }

    @keyframes spinner {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
    }
`;
const Img3 = external_styled_components_default.a.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
    img {
        width: 100%;
        height: 100%;
    }
    @media(max-width: 768px) {
        display: none;
    }
`;
const ImgMobile = external_styled_components_default.a.div`
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
    img {
        width: 100%;
        height: 100%;
    }
    @media(max-width: 768px) {
        display: block;
    }
`;
const StyledPage = external_styled_components_default.a.div`
`;
/* harmony default export */ var ComingSoon = (Index);
// CONCATENATED MODULE: ./client/components/ComingSoon/index.js


/***/ })

};;