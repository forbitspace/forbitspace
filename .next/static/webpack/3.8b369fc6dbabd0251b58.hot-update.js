webpackHotUpdate_N_E(3,{

/***/ "./client/components/Home/components/Banner.jsx":
/*!******************************************************!*\
  !*** ./client/components/Home/components/Banner.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacefintechbe02/Desktop/document/forbitspace-home/forbitspace/client/components/Home/components/Banner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 2rem;\\n  font-weight: 500;\\n  line-height: 40px;\\n  letter-spacing: 1px;\\n  font-style: italic;\\n  @media (max-width: 576px) {\\n    font-size: 20px;\\n    letter-spacing: 1px;\\n    font-weight: 200;\\n    line-height: 25px;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 1.2rem;\\n  font-weight: 300;\\n  font-family: sans-serif;\\n  span {\\n    font-style: italic;\\n    font-weight: 900;\\n  }\\n  @media (max-width: 576px) {\\n    font-size: 14px;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 4rem;\\n  font-weight: 600;\\n  line-height: 1;\\n  img {\\n    max-width: 400px;\\n  }\\n  @media (max-width: 576px) {\\n    font-size: 45px;\\n    letter-spacing: 2px;\\n    img {\\n      max-width: 200px;\\n    }\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-left: 80px;\\n  width: 100%;\\n  @media (max-width: 768px) {\\n    width: 100%;\\n    margin-left: 0;\\n    margin-top: 20px;\\n  }\\n  @media (max-width: 576px) {\\n    text-align: center;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100vw;\\n  height: auto;\\n  max-width: 100%;\\n  img {\\n    width: 100%;\\n    height: auto;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  /* min-height: 88vh; */\\n  padding: 2vh 0 0;\\n  transition: min-height 0.3s;\\n  margin-top: -60px;\\n\\n  @media (max-width: 770px) {\\n    margin-top: 0px;\\n    padding-top: 50px;\\n    min-height: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import Title from \"../../Title\";\n// import DecentralizedText from \"./DecentralizedText\";\n// import ButtonApp from \"../../Header/components/AppLink\";\n\nvar Banner = function Banner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      scroll = _useState[0],\n      setScroll = _useState[1];\n\n  window.addEventListener(\"scroll\", function () {\n    window.scrollY > 80 ? setScroll(true) : setScroll(false);\n  });\n  return __jsx(BoxSection, {\n    height: scroll ? \"10vh\" : \"100vh\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(WrapImgBanner, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/home-page/banner.png\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(Content, {\n    className: \"title-banner text-dark text-visi\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/home-page/forbitspace-word.png\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  })), __jsx(Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"The Decentralized Exchange Super Aggregator\"), __jsx(SubText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"forbitspace\"), \" is an interoperability aggregator protocol that unites decentralized applications across disparate blockchains. allows crypto traders to tap deep liquidity and receive better pricing one single interface.\"))));\n};\n\n_s(Banner, \"Jm46eEAbUqiI1aUltfhUZqD8Eds=\");\n\n_c = Banner;\nvar BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject(), function (_ref) {\n  var height = _ref.height;\n  return height;\n});\n_c2 = BoxSection;\nvar WrapImgBanner = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c3 = WrapImgBanner;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c4 = Content;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h2(_templateObject4());\n_c5 = Title;\nvar SubText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject5());\n_c6 = SubText;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject6());\n_c7 = Text;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Banner\");\n$RefreshReg$(_c2, \"BoxSection\");\n$RefreshReg$(_c3, \"WrapImgBanner\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"SubText\");\n$RefreshReg$(_c7, \"Text\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL0Jhbm5lci5qc3g/ZDk1OSJdLCJuYW1lcyI6WyJCYW5uZXIiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiQm94U2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJoZWlnaHQiLCJXcmFwSW1nQmFubmVyIiwiZGl2IiwiQ29udGVudCIsIlRpdGxlIiwiaDIiLCJTdWJUZXh0IiwicCIsIlRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsSUFBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUVuQkMsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzVDRCxVQUFNLENBQUNFLE9BQVAsR0FBaUIsRUFBakIsR0FBc0JILFNBQVMsQ0FBQyxJQUFELENBQS9CLEdBQXdDQSxTQUFTLENBQUMsS0FBRCxDQUFqRDtBQUNELEdBRkQ7QUFHQSxTQUNFLE1BQUMsVUFBRDtBQUFZLFVBQU0sRUFBRUQsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxnQ0FBVDtBQUEwQyxPQUFHLEVBQUMsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUMsa0NBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDBDQUFUO0FBQW9ELE9BQUcsRUFBQyxFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUpGLEVBS0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGtOQUxGLENBREYsQ0FKRixDQURGO0FBcUJELENBMUJEOztHQUFNRixNOztLQUFBQSxNO0FBNEJOLElBQU1PLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVixvQkFVRTtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWdCQSxNQUFoQjtBQUFBLENBVkYsQ0FBaEI7TUFBTUgsVTtBQWFOLElBQU1JLGFBQWEsR0FBR0gseURBQU0sQ0FBQ0ksR0FBVixvQkFBbkI7TUFBTUQsYTtBQVNOLElBQU1FLE9BQU8sR0FBR0wseURBQU0sQ0FBQ0ksR0FBVixvQkFBYjtNQUFNQyxPO0FBWU4sSUFBTUMsS0FBSyxHQUFHTix5REFBTSxDQUFDTyxFQUFWLG9CQUFYO01BQU1ELEs7QUFlTixJQUFNRSxPQUFPLEdBQUdSLHlEQUFNLENBQUNTLENBQVYsb0JBQWI7TUFBTUQsTztBQWFOLElBQU1FLElBQUksR0FBR1YseURBQU0sQ0FBQ1MsQ0FBVixvQkFBVjtNQUFNQyxJO0FBY1NsQixxRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50cy9CYW5uZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8gaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9UaXRsZVwiO1xuLy8gaW1wb3J0IERlY2VudHJhbGl6ZWRUZXh0IGZyb20gXCIuL0RlY2VudHJhbGl6ZWRUZXh0XCI7XG4vLyBpbXBvcnQgQnV0dG9uQXBwIGZyb20gXCIuLi8uLi9IZWFkZXIvY29tcG9uZW50cy9BcHBMaW5rXCI7XG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKHRydWUpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnNjcm9sbFkgPiA4MCA/IHNldFNjcm9sbCh0cnVlKSA6IHNldFNjcm9sbChmYWxzZSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCb3hTZWN0aW9uIGhlaWdodD17c2Nyb2xsID8gXCIxMHZoXCIgOiBcIjEwMHZoXCJ9PlxuICAgICAgPFdyYXBJbWdCYW5uZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2hvbWUtcGFnZS9iYW5uZXIucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvV3JhcEltZ0Jhbm5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT1cInRpdGxlLWJhbm5lciB0ZXh0LWRhcmsgdGV4dC12aXNpXCI+XG4gICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvaG9tZS1wYWdlL2ZvcmJpdHNwYWNlLXdvcmQucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIDxUZXh0PlRoZSBEZWNlbnRyYWxpemVkIEV4Y2hhbmdlIFN1cGVyIEFnZ3JlZ2F0b3I8L1RleHQ+XG4gICAgICAgICAgPFN1YlRleHQ+XG4gICAgICAgICAgICA8c3Bhbj5mb3JiaXRzcGFjZTwvc3Bhbj4gaXMgYW4gaW50ZXJvcGVyYWJpbGl0eSBhZ2dyZWdhdG9yIHByb3RvY29sXG4gICAgICAgICAgICB0aGF0IHVuaXRlcyBkZWNlbnRyYWxpemVkIGFwcGxpY2F0aW9ucyBhY3Jvc3MgZGlzcGFyYXRlIGJsb2NrY2hhaW5zLlxuICAgICAgICAgICAgYWxsb3dzIGNyeXB0byB0cmFkZXJzIHRvIHRhcCBkZWVwIGxpcXVpZGl0eSBhbmQgcmVjZWl2ZSBiZXR0ZXJcbiAgICAgICAgICAgIHByaWNpbmcgb25lIHNpbmdsZSBpbnRlcmZhY2UuXG4gICAgICAgICAgPC9TdWJUZXh0PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveFNlY3Rpb24+XG4gICk7XG59O1xuXG5jb25zdCBCb3hTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbWluLWhlaWdodDogODh2aDsgKi9cbiAgcGFkZGluZzogMnZoIDAgMDtcbiAgdHJhbnNpdGlvbjogbWluLWhlaWdodCAwLjNzO1xuICBtYXJnaW4tdG9wOiAtNjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgbWluLWhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fTtcbiAgfVxuYDtcbmNvbnN0IFdyYXBJbWdCYW5uZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuYDtcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBTdWJUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgc3BhbiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/Home/components/Banner.jsx\n");

/***/ })

})