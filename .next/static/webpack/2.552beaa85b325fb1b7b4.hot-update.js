webpackHotUpdate_N_E(2,{

/***/ "./client/components/ChristmasAnimation/components/Noel.jsx":
/*!******************************************************************!*\
  !*** ./client/components/ChristmasAnimation/components/Noel.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacefintechbe02/Desktop/01-document/forbitspace-home/forbitspace/client/components/ChristmasAnimation/components/Noel.jsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    .snowflake {\\n        color: #ffffff !important;\\n        font-size: 1em;\\n        font-family: Arial;\\n        text-shadow: 0 0 1px #000;\\n        opacity: 0.8;\\n    }\\n\\n    @-webkit-keyframes snowflakes-fall {\\n        0% {\\n            top: -30%;\\n        }\\n        100% {\\n            top: 100%;\\n        }\\n    }\\n    @-webkit-keyframes snowflakes-shake {\\n        0% {\\n            -webkit-transform: translateX(0px);\\n            transform: translateX(0px);\\n        }\\n        50% {\\n            -webkit-transform: translateX(80px);\\n            transform: translateX(80px);\\n        }\\n        100% {\\n            -webkit-transform: translateX(0px);\\n            transform: translateX(0px);\\n        }\\n    }\\n    @keyframes snowflakes-fall {\\n        0% {\\n            top: -30%;\\n        }\\n        100% {\\n            top: 100%;\\n        }\\n    }\\n    @keyframes snowflakes-shake {\\n        0% {\\n            transform: translateX(0px);\\n        }\\n        50% {\\n            transform: translateX(40px);\\n        }\\n        100% {\\n            transform: translateX(0px);\\n        }\\n    }\\n    .snowflake {\\n        position: absolute;\\n        top: -30%;\\n        z-index: 9999;\\n        -webkit-user-select: none;\\n        -moz-user-select: none;\\n        -ms-user-select: none;\\n        user-select: none;\\n        cursor: default;\\n        -webkit-animation-name: snowflakes-fall, snowflakes-shake;\\n        -webkit-animation-duration: 4s, 10s;\\n        -webkit-animation-timing-function: linear, ease-in-out;\\n        -webkit-animation-iteration-count: infinite, infinite;\\n        -webkit-animation-play-state: running, running;\\n        animation-name: snowflakes-fall, snowflakes-shake;\\n        animation-duration: 4s, 10s;\\n        animation-timing-function: linear, ease-in-out;\\n        animation-iteration-count: infinite, infinite;\\n        animation-play-state: running, running;\\n    }\\n    @media (min-width: 1440px) {\\n        .snowflake {\\n            -webkit-animation-duration: 8s, 10s;\\n            animation-duration: 8s, 10s;\\n        }\\n    }\\n    .snowflake:nth-of-type(0) {\\n        left: 1%;\\n        -webkit-animation-delay: 0s, 0s;\\n        animation-delay: 0s, 0s;\\n    }\\n    .snowflake:nth-of-type(1) {\\n        left: 10%;\\n        -webkit-animation-delay: 1s, 1s;\\n        animation-delay: 1s, 1s;\\n    }\\n    .snowflake:nth-of-type(2) {\\n        left: 20%;\\n        -webkit-animation-delay: 6s, 0.5s;\\n        animation-delay: 6s, 0.5s;\\n    }\\n    .snowflake:nth-of-type(3) {\\n        left: 30%;\\n        -webkit-animation-delay: 4s, 2s;\\n        animation-delay: 4s, 2s;\\n    }\\n    .snowflake:nth-of-type(4) {\\n        left: 40%;\\n        -webkit-animation-delay: 2s, 2s;\\n        animation-delay: 2s, 2s;\\n    }\\n    .snowflake:nth-of-type(5) {\\n        left: 50%;\\n        -webkit-animation-delay: 8s, 3s;\\n        animation-delay: 8s, 3s;\\n    }\\n    .snowflake:nth-of-type(6) {\\n        left: 60%;\\n        -webkit-animation-delay: 6s, 2s;\\n        animation-delay: 6s, 2s;\\n    }\\n    .snowflake:nth-of-type(7) {\\n        left: 70%;\\n        -webkit-animation-delay: 2.5s, 1s;\\n        animation-delay: 2.5s, 1s;\\n    }\\n    .snowflake:nth-of-type(8) {\\n        left: 80%;\\n        -webkit-animation-delay: 1s, 0s;\\n        animation-delay: 1s, 0s;\\n    }\\n    .snowflake:nth-of-type(9) {\\n        left: 90%;\\n        -webkit-animation-delay: 3s, 1.5s;\\n        animation-delay: 3s, 1.5s;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 33%;\\n    animation: \", \" 5s linear infinite;\\n\\n    img {\\n        width: 100%;\\n        max-width: 100px;\\n    }\\n    &.wide-screen {\\n        display: none;\\n    }\\n    @media (min-width: 1440px) {\\n        width: fit-content;\\n        img {\\n            max-width: 210px;\\n        }\\n        &.medium-screen {\\n            display: none;\\n        }\\n        &.wide-screen {\\n            display: block;\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    max-width: 240px;\\n    display: flex;\\n    flex-wrap: nowrap;\\n    align-items: flex-end;\\n    justify-content: center;\\n    gap: 1rem;\\n    position: relative;\\n    @media (min-width: 1440px) {\\n        flex-direction: column-reverse;\\n        max-width: 210px;\\n    }\\n    @media (max-width: 576px) {\\n        gap: 3px;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    0% {\\n        transform: rotate(-20deg);\\n    }\\n    25% {\\n        transform: rotate(20deg);\\n    }\\n    50% {\\n        transform: rotate(-20deg);\\n    }\\n    75% {\\n        transform: rotate(20deg);\\n    }\\n    100% {\\n        transform: rotate(-20deg);\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Noel = function Noel() {\n  return __jsx(WrapContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(Snowflake, {\n    className: \"snowflakes\",\n    \"aria-hidden\": \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"\\u2746\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"\\u2746\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, \"\\u2746\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, \"\\u2746\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"\\u2746\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"\\u2745\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"\\u2746\"), __jsx(\"div\", {\n    className: \"snowflake\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, \"\\u2745\")), __jsx(WrapImage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/design-image/noel_2.png\",\n    alt: \"noel-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  })), __jsx(WrapImage, {\n    className: \"wide-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/design-image/noel_1.png\",\n    alt: \"noel-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  })), __jsx(WrapImage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/design-image/noel_3.png\",\n    alt: \"noel-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  })), __jsx(WrapImage, {\n    className: \"medium-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/design-image/noel_1.png\",\n    alt: \"noel-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  })));\n};\n\n_c = Noel;\nvar shake = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject());\nvar WrapContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = WrapContent;\nvar WrapImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3(), shake);\n_c3 = WrapImage;\nvar Snowflake = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = Snowflake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Noel);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Noel\");\n$RefreshReg$(_c2, \"WrapContent\");\n$RefreshReg$(_c3, \"WrapImage\");\n$RefreshReg$(_c4, \"Snowflake\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvQ2hyaXN0bWFzQW5pbWF0aW9uL2NvbXBvbmVudHMvTm9lbC5qc3g/OWMzOCJdLCJuYW1lcyI6WyJOb2VsIiwic2hha2UiLCJrZXlmcmFtZXMiLCJXcmFwQ29udGVudCIsInN0eWxlZCIsImRpdiIsIldyYXBJbWFnZSIsIlNub3dmbGFrZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLFNBQ0ksTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQ7QUFBVyxhQUFTLEVBQUMsWUFBckI7QUFBa0MsbUJBQVksTUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFHSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQUlJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLEVBS0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosRUFNSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixFQU9JO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IE5vZWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBDb250ZW50PlxuICAgICAgICAgICAgPFNub3dmbGFrZSBjbGFzc05hbWU9XCJzbm93Zmxha2VzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25vd2ZsYWtlXCI+4p2GPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25vd2ZsYWtlXCI+4p2GPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25vd2ZsYWtlXCI+4p2GPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25vd2ZsYWtlXCI+4p2FPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25vd2ZsYWtlXCI+4p2FPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25vd2ZsYWtlXCI+4p2FPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbm93Zmxha2VcIj7inYY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNub3dmbGFrZVwiPuKdhTwvZGl2PlxuICAgICAgICAgICAgPC9Tbm93Zmxha2U+XG4gICAgICAgICAgICA8V3JhcEltYWdlPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2Rlc2lnbi1pbWFnZS9ub2VsXzIucG5nXCIgYWx0PVwibm9lbC1pbWFnZVwiIC8+XG4gICAgICAgICAgICA8L1dyYXBJbWFnZT5cbiAgICAgICAgICAgIDxXcmFwSW1hZ2UgY2xhc3NOYW1lPVwid2lkZS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9kZXNpZ24taW1hZ2Uvbm9lbF8xLnBuZ1wiIGFsdD1cIm5vZWwtaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9XcmFwSW1hZ2U+XG4gICAgICAgICAgICA8V3JhcEltYWdlPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2Rlc2lnbi1pbWFnZS9ub2VsXzMucG5nXCIgYWx0PVwibm9lbC1pbWFnZVwiIC8+XG4gICAgICAgICAgICA8L1dyYXBJbWFnZT5cbiAgICAgICAgICAgIDxXcmFwSW1hZ2UgY2xhc3NOYW1lPVwibWVkaXVtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2Rlc2lnbi1pbWFnZS9ub2VsXzEucG5nXCIgYWx0PVwibm9lbC1pbWFnZVwiIC8+XG4gICAgICAgICAgICA8L1dyYXBJbWFnZT5cbiAgICAgICAgPC9XcmFwQ29udGVudD5cbiAgICApO1xufTtcblxuY29uc3Qgc2hha2UgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgfVxuYDtcblxuY29uc3QgV3JhcENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIGdhcDogM3B4O1xuICAgIH1cbmA7XG5jb25zdCBXcmFwSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAzMyU7XG4gICAgYW5pbWF0aW9uOiAke3NoYWtlfSA1cyBsaW5lYXIgaW5maW5pdGU7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgJi53aWRlLXNjcmVlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLm1lZGl1bS1zY3JlZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmLndpZGUtc2NyZWVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgU25vd2ZsYWtlID0gc3R5bGVkLmRpdmBcbiAgICAuc25vd2ZsYWtlIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBzbm93Zmxha2VzLWZhbGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0b3A6IC0zMCU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHNub3dmbGFrZXMtc2hha2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc25vd2ZsYWtlcy1mYWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdG9wOiAtMzAlO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc25vd2ZsYWtlcy1zaGFrZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc25vd2ZsYWtlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0zMCU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc25vd2ZsYWtlcy1mYWxsLCBzbm93Zmxha2VzLXNoYWtlO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHMsIDEwcztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsIGVhc2UtaW4tb3V0O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlLCBpbmZpbml0ZTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZywgcnVubmluZztcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNub3dmbGFrZXMtZmFsbCwgc25vd2ZsYWtlcy1zaGFrZTtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cywgMTBzO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsIGVhc2UtaW4tb3V0O1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZSwgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nLCBydW5uaW5nO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgIC5zbm93Zmxha2Uge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDhzLCAxMHM7XG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDhzLCAxMHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNub3dmbGFrZTpudGgtb2YtdHlwZSgwKSB7XG4gICAgICAgIGxlZnQ6IDElO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHMsIDBzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzLCAwcztcbiAgICB9XG4gICAgLnNub3dmbGFrZTpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzLCAxcztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcywgMXM7XG4gICAgfVxuICAgIC5zbm93Zmxha2U6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA2cywgMC41cztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA2cywgMC41cztcbiAgICB9XG4gICAgLnNub3dmbGFrZTpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDRzLCAycztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0cywgMnM7XG4gICAgfVxuICAgIC5zbm93Zmxha2U6bnRoLW9mLXR5cGUoNCkge1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycywgMnM7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMnMsIDJzO1xuICAgIH1cbiAgICAuc25vd2ZsYWtlOm50aC1vZi10eXBlKDUpIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogOHMsIDNzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDhzLCAzcztcbiAgICB9XG4gICAgLnNub3dmbGFrZTpudGgtb2YtdHlwZSg2KSB7XG4gICAgICAgIGxlZnQ6IDYwJTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDZzLCAycztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA2cywgMnM7XG4gICAgfVxuICAgIC5zbm93Zmxha2U6bnRoLW9mLXR5cGUoNykge1xuICAgICAgICBsZWZ0OiA3MCU7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjVzLCAxcztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzLCAxcztcbiAgICB9XG4gICAgLnNub3dmbGFrZTpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzLCAwcztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcywgMHM7XG4gICAgfVxuICAgIC5zbm93Zmxha2U6bnRoLW9mLXR5cGUoOSkge1xuICAgICAgICBsZWZ0OiA5MCU7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcywgMS41cztcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzcywgMS41cztcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOb2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/ChristmasAnimation/components/Noel.jsx\n");

/***/ })

})