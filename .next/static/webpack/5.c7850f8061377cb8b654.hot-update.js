webpackHotUpdate_N_E(5,{

/***/ "./client/components/Order/components/Feature.jsx":
/*!********************************************************!*\
  !*** ./client/components/Order/components/Feature.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./client/components/Order/constants/index.js\");\n\n\nvar _jsxFileName = \"/Users/quocnguyen/Documents/Projects/Forbitspace/forbitspace/client/components/Order/components/Feature.jsx\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 1.2rem;\\n    font-weight: 300;\\n    @media (max-width: 576px) {\\n        font-size: 14px;\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 2rem;\\n    font-weight: 600;\\n    margin-bottom: 30px;\\n\\n    @media (max-width: 768px){\\n        min-height: 100px\\n        display: flex;\\n        align-items: flex-end;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 33%;\\n    margin: 10px calc(1% / 6);\\n    padding: 10px 42px 10px 10px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: flex-start;\\n\\n    text-align: left;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 4rem;\\n    line-height: 1.2;\\n    font-weight: 600;\\n    @media (max-width: 576px) {\\n      font-size: 45px;\\n      letter-spacing: 2px;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    position: relative;\\n\\n    @media (max-width: 1024px){\\n        padding: 50px 0;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Feature = function Feature() {\n  var RenderContent = function RenderContent(_ref) {\n    var data = _ref.data;\n    return __jsx(BoxContent, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 13\n      }\n    }, data.map(function (item) {\n      return __jsx(Content, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 21\n        }\n      }, __jsx(SubTitle, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 25\n        }\n      }, item.title), __jsx(Text, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 25\n        }\n      }, item.content));\n    }));\n  };\n\n  return __jsx(WrapperFeature, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Features\"), __jsx(RenderContent, {\n    data: _constants__WEBPACK_IMPORTED_MODULE_3__[\"FeatureData\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c = Feature;\nvar WrapperFeature = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject());\n_c2 = WrapperFeature;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2(_templateObject2());\n_c3 = Title;\nvar BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = BoxContent;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c5 = Content;\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = SubTitle;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p(_templateObject6());\n_c7 = Text;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feature);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Feature\");\n$RefreshReg$(_c2, \"WrapperFeature\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"BoxContent\");\n$RefreshReg$(_c5, \"Content\");\n$RefreshReg$(_c6, \"SubTitle\");\n$RefreshReg$(_c7, \"Text\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvT3JkZXIvY29tcG9uZW50cy9GZWF0dXJlLmpzeD9iMzNmIl0sIm5hbWVzIjpbIkZlYXR1cmUiLCJSZW5kZXJDb250ZW50IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJGZWF0dXJlRGF0YSIsIldyYXBwZXJGZWF0dXJlIiwic3R5bGVkIiwic2VjdGlvbiIsIlRpdGxlIiwiaDIiLCJCb3hDb250ZW50IiwiZGl2IiwiQ29udGVudCIsIlN1YlRpdGxlIiwiVGV4dCIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBRWxCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYztBQUFBLFFBQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoQyxXQUNJLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLElBQUk7QUFBQSxhQUNWLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBV0EsSUFBSSxDQUFDQyxLQUFoQixDQURKLEVBRUksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0QsSUFBSSxDQUFDRSxPQURWLENBRkosQ0FEVTtBQUFBLEtBQWIsQ0FETCxDQURKO0FBWUgsR0FiRDs7QUFjQSxTQUNJLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSSxNQUFDLGFBQUQ7QUFBZSxRQUFJLEVBQUVDLHNEQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU1ILENBdEJEOztLQUFNUCxPO0FBd0JOLElBQU1RLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVixtQkFBcEI7TUFBTUYsYztBQVFOLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csRUFBVixvQkFBWDtNQUFNRCxLO0FBU04sSUFBTUUsVUFBVSxHQUFHSix5REFBTSxDQUFDSyxHQUFWLG9CQUFoQjtNQUFNRCxVO0FBT04sSUFBTUUsT0FBTyxHQUFHTix5REFBTSxDQUFDSyxHQUFWLG9CQUFiO01BQU1DLE87QUFNTixJQUFNQyxRQUFRLEdBQUdQLHlEQUFNLENBQUNLLEdBQVYsb0JBQWQ7TUFBTUUsUTtBQVdOLElBQU1DLElBQUksR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVixvQkFBVjtNQUFNRCxJO0FBT1NqQixzRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL09yZGVyL2NvbXBvbmVudHMvRmVhdHVyZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmVhdHVyZURhdGEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZlYXR1cmUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBSZW5kZXJDb250ZW50ID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94Q29udGVudD5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPntpdGVtLnRpdGxlfTwvU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveENvbnRlbnQ+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyRmVhdHVyZT5cbiAgICAgICAgICAgIDxUaXRsZT5GZWF0dXJlczwvVGl0bGU+XG4gICAgICAgICAgICA8UmVuZGVyQ29udGVudCBkYXRhPXtGZWF0dXJlRGF0YX0gLz5cbiAgICAgICAgPC9XcmFwcGVyRmVhdHVyZT5cbiAgICApO1xufVxuXG5jb25zdCBXcmFwcGVyRmVhdHVyZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgIH1cbmBcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cbmBcbmNvbnN0IEJveENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5gXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbjogMTBweCBjYWxjKDElIC8gNik7XG4gICAgcGFkZGluZzogMTBweCA0MnB4IDEwcHggMTBweDtcbmBcblxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5gXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/Order/components/Feature.jsx\n");

/***/ })

})