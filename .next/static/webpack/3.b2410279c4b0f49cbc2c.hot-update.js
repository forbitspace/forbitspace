webpackHotUpdate_N_E(3,{

/***/ "./client/components/Home/components/LimitOrder.jsx":
/*!**********************************************************!*\
  !*** ./client/components/Home/components/LimitOrder.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacefintechbe02/Desktop/document/forbitspace-home/forbitspace/client/components/Home/components/LimitOrder.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 1.2rem;\\n  font-weight: 300;\\n  text-align: right;\\n  span {\\n    font-style: italic;\\n    font-weight: 900;\\n  }\\n  &.toggle__btn {\\n    font-weight: 400;\\n    font-style: italic;\\n  }\\n  @media (max-width: 768px) {\\n    text-align: center;\\n    font-size: 14px;\\n  }\\n  @media (max-width: 576px) {\\n    font-size: 13px;\\n  }\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 2rem;\\n  font-weight: 500;\\n  line-height: 40px;\\n  letter-spacing: 1px;\\n  text-align: right;\\n  @media (max-width: 768px) {\\n    font-size: 26px;\\n    letter-spacing: 1px;\\n    font-weight: 500;\\n    line-height: 25px;\\n    text-align: center;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-left: 20px;\\n  width: 55%;\\n  transition: all ease-in-out 0.2s;\\n  text-align: right;\\n  @media (max-width: 1320px) {\\n    width: 40%;\\n  }\\n  @media (max-width: 768px) {\\n    width: 100%;\\n    margin-left: 0;\\n    margin-top: 20px;\\n    text-align: center;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  text-align: left;\\n  img {\\n    width: 100%;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 45%;\\n  transform: rotate(-12deg);\\n  @media (max-width: 1320px) {\\n    width: 60%;\\n  }\\n  @media (max-width: 768px) {\\n    width: 100%;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: center;\\n  gap: 20px;\\n  @media (min-width: 1650px) {\\n    max-width: 80%;\\n  }\\n  @media (max-width: 768px) {\\n    flex-direction: column-reverse;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  /* min-height: 88vh; */\\n  /* padding: 10vh 0 0; */\\n  padding: 25px 0px;\\n  @media (min-width: 1025px) {\\n    padding: 25px 50px;\\n  }\\n  @media (max-width: 770px) {\\n    padding-top: 10px;\\n    /* min-height: 80vh; */\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar LimitOrder = function LimitOrder() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  return __jsx(BoxSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(WrapContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(WrapImg, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(ImgHalf, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/home-page/limit.png\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }))), __jsx(Content, {\n    className: \"title-banner text-dark text-visi\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \"Limit Order Protocol\"), __jsx(WrapText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(SubText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"A limit order places a specific price that a trader wants to buy or sell at and is only executed if the market hits that price.\"), __jsx(SubText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, \"Whereas market orders are executed immediately, limit orders are executed at a predefined price, which is generally better than the current market price.\"), open ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(SubText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, \"The \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 23\n    }\n  }, \"forbitspace\"), \" platforms help users place the limit order which is handled by the order-book feature. We limit order protocol provides the most innovative and optimal. A limit order is a type of buy order which a user can place with a specific buy or sell price whose limit is determined by the user him/herself. The enables the trade to be automatically executed when the market price reaches the users\\u2019 target price. It allows users to buy dips or take profits to take benefits of volatility in the marketplace.\"), __jsx(SubText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"A limit order would allow DeFi traders to get their swaps at desired prices by leaving instructions to fill buy or sell orders at specific prices (or better prices). For instance, if you think an asset is too expensive at the moment, or you are expecting prices to drop throughout the day, then you simply set a limit order to buy at a price below the current market price. How much lower is totally up to users.\")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), __jsx(SubText, {\n    onClick: function onClick() {\n      return setOpen(!open);\n    },\n    className: \"toggle__btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, open ? \"Hide\" : \"Read more...\")))));\n};\n\n_s(LimitOrder, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n\n_c = LimitOrder;\nvar BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject());\n_c2 = BoxSection;\nvar WrapContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"])(_templateObject2());\n_c3 = WrapContainer;\nvar WrapImg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c4 = WrapImg;\nvar ImgHalf = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c5 = ImgHalf;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c6 = Content;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject6());\n_c7 = Text;\nvar WrapText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7());\n_c8 = WrapText;\nvar SubText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject8());\n_c9 = SubText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LimitOrder);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"LimitOrder\");\n$RefreshReg$(_c2, \"BoxSection\");\n$RefreshReg$(_c3, \"WrapContainer\");\n$RefreshReg$(_c4, \"WrapImg\");\n$RefreshReg$(_c5, \"ImgHalf\");\n$RefreshReg$(_c6, \"Content\");\n$RefreshReg$(_c7, \"Text\");\n$RefreshReg$(_c8, \"WrapText\");\n$RefreshReg$(_c9, \"SubText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL0xpbWl0T3JkZXIuanN4P2RiNmMiXSwibmFtZXMiOlsiTGltaXRPcmRlciIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJCb3hTZWN0aW9uIiwic3R5bGVkIiwic2VjdGlvbiIsIldyYXBDb250YWluZXIiLCJDb250YWluZXIiLCJXcmFwSW1nIiwiZGl2IiwiSW1nSGFsZiIsIkNvbnRlbnQiLCJUZXh0IiwicCIsIldyYXBUZXh0IiwiU3ViVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDaEJDLElBRGdCO0FBQUEsTUFDVkMsT0FEVTs7QUFFdkIsU0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLCtCQUFUO0FBQXlDLE9BQUcsRUFBQyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyxPQUFEO0FBQVMsYUFBUyxFQUFDLGtDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkYsRUFHRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVJQURGLEVBS0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBTEYsRUFVR0QsSUFBSSxHQUNILG1FQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETiw2ZkFERixFQVlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9hQVpGLENBREcsR0F3Qkgsa0VBbENKLEVBb0NFLE1BQUMsT0FBRDtBQUFTLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxLQUFsQjtBQUF3QyxhQUFTLEVBQUMsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLEdBQUcsTUFBSCxHQUFZLGNBRG5CLENBcENGLENBSEYsQ0FORixDQURGLENBREY7QUF1REQsQ0F6REQ7O0dBQU1GLFU7O0tBQUFBLFU7QUEyRE4sSUFBTUksVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWLG1CQUFoQjtNQUFNRixVO0FBYU4sSUFBTUcsYUFBYSxHQUFHRixpRUFBTSxDQUFDRyxvREFBRCxDQUFULG9CQUFuQjtNQUFNRCxhO0FBWU4sSUFBTUUsT0FBTyxHQUFHSix5REFBTSxDQUFDSyxHQUFWLG9CQUFiO01BQU1ELE87QUFVTixJQUFNRSxPQUFPLEdBQUdOLHlEQUFNLENBQUNLLEdBQVYsb0JBQWI7TUFBTUMsTztBQVFOLElBQU1DLE9BQU8sR0FBR1AseURBQU0sQ0FBQ0ssR0FBVixvQkFBYjtNQUFNRSxPO0FBZU4sSUFBTUMsSUFBSSxHQUFHUix5REFBTSxDQUFDUyxDQUFWLG9CQUFWO01BQU1ELEk7QUFjTixJQUFNRSxRQUFRLEdBQUdWLHlEQUFNLENBQUNLLEdBQVYsb0JBQWQ7TUFBTUssUTtBQUNOLElBQU1DLE9BQU8sR0FBR1gseURBQU0sQ0FBQ1MsQ0FBVixvQkFBYjtNQUFNRSxPO0FBcUJTaEIseUVBQWYiLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Ib21lL2NvbXBvbmVudHMvTGltaXRPcmRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBMaW1pdE9yZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPEJveFNlY3Rpb24+XG4gICAgICA8V3JhcENvbnRhaW5lcj5cbiAgICAgICAgPFdyYXBJbWc+XG4gICAgICAgICAgPEltZ0hhbGY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9ob21lLXBhZ2UvbGltaXQucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L0ltZ0hhbGY+XG4gICAgICAgIDwvV3JhcEltZz5cbiAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwidGl0bGUtYmFubmVyIHRleHQtZGFyayB0ZXh0LXZpc2lcIj5cbiAgICAgICAgICB7LyogPFRpdGxlPmZvcmJpdHNwYWNlPC9UaXRsZT4gKi99XG4gICAgICAgICAgPFRleHQ+TGltaXQgT3JkZXIgUHJvdG9jb2w8L1RleHQ+XG4gICAgICAgICAgPFdyYXBUZXh0PlxuICAgICAgICAgICAgPFN1YlRleHQ+XG4gICAgICAgICAgICAgIEEgbGltaXQgb3JkZXIgcGxhY2VzIGEgc3BlY2lmaWMgcHJpY2UgdGhhdCBhIHRyYWRlciB3YW50cyB0byBidXlcbiAgICAgICAgICAgICAgb3Igc2VsbCBhdCBhbmQgaXMgb25seSBleGVjdXRlZCBpZiB0aGUgbWFya2V0IGhpdHMgdGhhdCBwcmljZS5cbiAgICAgICAgICAgIDwvU3ViVGV4dD5cbiAgICAgICAgICAgIDxTdWJUZXh0PlxuICAgICAgICAgICAgICBXaGVyZWFzIG1hcmtldCBvcmRlcnMgYXJlIGV4ZWN1dGVkIGltbWVkaWF0ZWx5LCBsaW1pdCBvcmRlcnMgYXJlXG4gICAgICAgICAgICAgIGV4ZWN1dGVkIGF0IGEgcHJlZGVmaW5lZCBwcmljZSwgd2hpY2ggaXMgZ2VuZXJhbGx5IGJldHRlciB0aGFuIHRoZVxuICAgICAgICAgICAgICBjdXJyZW50IG1hcmtldCBwcmljZS5cbiAgICAgICAgICAgIDwvU3ViVGV4dD5cbiAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTdWJUZXh0PlxuICAgICAgICAgICAgICAgICAgVGhlIDxzcGFuPmZvcmJpdHNwYWNlPC9zcGFuPiBwbGF0Zm9ybXMgaGVscCB1c2VycyBwbGFjZSB0aGVcbiAgICAgICAgICAgICAgICAgIGxpbWl0IG9yZGVyIHdoaWNoIGlzIGhhbmRsZWQgYnkgdGhlIG9yZGVyLWJvb2sgZmVhdHVyZS4gV2VcbiAgICAgICAgICAgICAgICAgIGxpbWl0IG9yZGVyIHByb3RvY29sIHByb3ZpZGVzIHRoZSBtb3N0IGlubm92YXRpdmUgYW5kIG9wdGltYWwuXG4gICAgICAgICAgICAgICAgICBBIGxpbWl0IG9yZGVyIGlzIGEgdHlwZSBvZiBidXkgb3JkZXIgd2hpY2ggYSB1c2VyIGNhbiBwbGFjZVxuICAgICAgICAgICAgICAgICAgd2l0aCBhIHNwZWNpZmljIGJ1eSBvciBzZWxsIHByaWNlIHdob3NlIGxpbWl0IGlzIGRldGVybWluZWQgYnlcbiAgICAgICAgICAgICAgICAgIHRoZSB1c2VyIGhpbS9oZXJzZWxmLiBUaGUgZW5hYmxlcyB0aGUgdHJhZGUgdG8gYmVcbiAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZWQgd2hlbiB0aGUgbWFya2V0IHByaWNlIHJlYWNoZXMgdGhlXG4gICAgICAgICAgICAgICAgICB1c2Vyc+KAmSB0YXJnZXQgcHJpY2UuIEl0IGFsbG93cyB1c2VycyB0byBidXkgZGlwcyBvciB0YWtlXG4gICAgICAgICAgICAgICAgICBwcm9maXRzIHRvIHRha2UgYmVuZWZpdHMgb2Ygdm9sYXRpbGl0eSBpbiB0aGUgbWFya2V0cGxhY2UuXG4gICAgICAgICAgICAgICAgPC9TdWJUZXh0PlxuICAgICAgICAgICAgICAgIDxTdWJUZXh0PlxuICAgICAgICAgICAgICAgICAgQSBsaW1pdCBvcmRlciB3b3VsZCBhbGxvdyBEZUZpIHRyYWRlcnMgdG8gZ2V0IHRoZWlyIHN3YXBzIGF0XG4gICAgICAgICAgICAgICAgICBkZXNpcmVkIHByaWNlcyBieSBsZWF2aW5nIGluc3RydWN0aW9ucyB0byBmaWxsIGJ1eSBvciBzZWxsXG4gICAgICAgICAgICAgICAgICBvcmRlcnMgYXQgc3BlY2lmaWMgcHJpY2VzIChvciBiZXR0ZXIgcHJpY2VzKS4gRm9yIGluc3RhbmNlLCBpZlxuICAgICAgICAgICAgICAgICAgeW91IHRoaW5rIGFuIGFzc2V0IGlzIHRvbyBleHBlbnNpdmUgYXQgdGhlIG1vbWVudCwgb3IgeW91IGFyZVxuICAgICAgICAgICAgICAgICAgZXhwZWN0aW5nIHByaWNlcyB0byBkcm9wIHRocm91Z2hvdXQgdGhlIGRheSwgdGhlbiB5b3Ugc2ltcGx5XG4gICAgICAgICAgICAgICAgICBzZXQgYSBsaW1pdCBvcmRlciB0byBidXkgYXQgYSBwcmljZSBiZWxvdyB0aGUgY3VycmVudCBtYXJrZXRcbiAgICAgICAgICAgICAgICAgIHByaWNlLiBIb3cgbXVjaCBsb3dlciBpcyB0b3RhbGx5IHVwIHRvIHVzZXJzLlxuICAgICAgICAgICAgICAgIDwvU3ViVGV4dD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxTdWJUZXh0IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfSBjbGFzc05hbWU9XCJ0b2dnbGVfX2J0blwiPlxuICAgICAgICAgICAgICB7b3BlbiA/IFwiSGlkZVwiIDogXCJSZWFkIG1vcmUuLi5cIn1cbiAgICAgICAgICAgIDwvU3ViVGV4dD5cbiAgICAgICAgICA8L1dyYXBUZXh0PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L1dyYXBDb250YWluZXI+XG4gICAgPC9Cb3hTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgQm94U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIG1pbi1oZWlnaHQ6IDg4dmg7ICovXG4gIC8qIHBhZGRpbmc6IDEwdmggMCAwOyAqL1xuICBwYWRkaW5nOiAyNXB4IDBweDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAvKiBtaW4taGVpZ2h0OiA4MHZoOyAqL1xuICB9XG5gO1xuY29uc3QgV3JhcENvbnRhaW5lciA9IHN0eWxlZChDb250YWluZXIpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2NTBweCkge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuYDtcbmNvbnN0IFdyYXBJbWcgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDUlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xuICBAbWVkaWEgKG1heC13aWR0aDogMTMyMHB4KSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcbmNvbnN0IEltZ0hhbGYgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmA7XG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMjBweCkge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcbmNvbnN0IFdyYXBUZXh0ID0gc3R5bGVkLmRpdmBgO1xuY29uc3QgU3ViVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogOTAwO1xuICB9XG4gICYudG9nZ2xlX19idG4ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMaW1pdE9yZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/Home/components/LimitOrder.jsx\n");

/***/ })

})