webpackHotUpdate_N_E(2,{

/***/ "./client/components/Home/components/Routing.jsx":
/*!*******************************************************!*\
  !*** ./client/components/Home/components/Routing.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/Home/components/Routing.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: inline-block;\\n    height: auto;\\n    width: 100%;\\n    border-radius: 24px;\\n    /* background-color: yellow; */\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    white-space: nowrap;\\n    /* transition: ease 1s; */\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 0 auto;\\n    overflow: hidden;\\n    max-width: 750px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar images = [{\n  icon: 'eth'\n}, {\n  icon: 'bsc'\n}, {\n  icon: 'polygon'\n}, {\n  icon: 'ava'\n}, {\n  icon: 'eth'\n}]; // const delay = 2500;\n\nvar Routing = function Routing() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var delay = index === 0 ? 1500 : 3000;\n  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resetTimeout = function resetTimeout() {\n    if (timeoutRef.current) {\n      clearTimeout(timeoutRef.current);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    resetTimeout();\n    console.log('index --->', index);\n    timeoutRef.current = setTimeout(function () {\n      return setIndex(function (prevIndex) {\n        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;\n      });\n    }, delay);\n    return function () {\n      resetTimeout();\n    };\n  }, [index]);\n  return __jsx(SlideShow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(Slider, {\n    style: {\n      transform: \"translate3d(\".concat(-index * 100, \"%, 0, 0)\"),\n      transition: index === 0 ? \"0s\" : \"ease 1s\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, images.map(function (item, index) {\n    return __jsx(Slide, {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: \"../images/home-page/\".concat(item.icon, \".png\"),\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 29\n      }\n    }));\n  })));\n};\n\n_s(Routing, \"bhtDMAuiTWjY/oCsgWcgDfz/cnA=\");\n\n_c = Routing;\nvar SlideShow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = SlideShow;\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Slider;\nvar Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routing);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Routing\");\n$RefreshReg$(_c2, \"SlideShow\");\n$RefreshReg$(_c3, \"Slider\");\n$RefreshReg$(_c4, \"Slide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4PzI1ZWEiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaWNvbiIsIlJvdXRpbmciLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJkZWxheSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJyZXNldFRpbWVvdXQiLCJjdXJyZW50IiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwibWFwIiwiaXRlbSIsIlNsaWRlU2hvdyIsInN0eWxlZCIsImRpdiIsIlNsaWRlciIsIlNsaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNYO0FBQUNDLE1BQUksRUFBQztBQUFOLENBRFcsRUFDRztBQUFDQSxNQUFJLEVBQUU7QUFBUCxDQURILEVBQ2tCO0FBQUNBLE1BQUksRUFBRTtBQUFQLENBRGxCLEVBQ3FDO0FBQUNBLE1BQUksRUFBRTtBQUFQLENBRHJDLEVBQ29EO0FBQUNBLE1BQUksRUFBRTtBQUFQLENBRHBELENBQWYsQyxDQUdBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFDWEMsS0FEVztBQUFBLE1BQ0pDLFFBREk7O0FBRWxCLE1BQU1DLEtBQUssR0FBR0YsS0FBSyxLQUFLLENBQVYsR0FBYyxJQUFkLEdBQXFCLElBQW5DO0FBQ0EsTUFBTUcsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBekI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFHRixVQUFVLENBQUNHLE9BQWQsRUFBc0I7QUFDbEJDLGtCQUFZLENBQUNKLFVBQVUsQ0FBQ0csT0FBWixDQUFaO0FBQ0g7QUFDSixHQUpEOztBQU1BRSx5REFBUyxDQUFDLFlBQU07QUFDWkgsZ0JBQVk7QUFDWkksV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QlYsS0FBekI7QUFDQUcsY0FBVSxDQUFDRyxPQUFYLEdBQXFCSyxVQUFVLENBQzNCO0FBQUEsYUFBTVYsUUFBUSxDQUFDLFVBQUNXLFNBQUQ7QUFBQSxlQUNYQSxTQUFTLEtBQUtoQixNQUFNLENBQUNpQixNQUFQLEdBQWdCLENBQTlCLEdBQWtDLENBQWxDLEdBQXNDRCxTQUFTLEdBQUcsQ0FEdkM7QUFBQSxPQUFELENBQWQ7QUFBQSxLQUQyQixFQUkvQlYsS0FKK0IsQ0FBL0I7QUFNQSxXQUFPLFlBQU07QUFDVEcsa0JBQVk7QUFDZixLQUZEO0FBR0gsR0FaUSxFQVlOLENBQUNMLEtBQUQsQ0FaTSxDQUFUO0FBZUEsU0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFDYyxlQUFTLHdCQUFpQixDQUFDZCxLQUFELEdBQVMsR0FBMUIsYUFBVjtBQUFtRGUsZ0JBQVUsRUFBRWYsS0FBSyxLQUFLLENBQVYsR0FBYyxJQUFkLEdBQW9CO0FBQW5GLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRSixNQUFNLENBQUNvQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPakIsS0FBUDtBQUFBLFdBQ1AsTUFBQyxLQUFEO0FBQU8sU0FBRyxFQUFFQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsZ0NBQXlCaUIsSUFBSSxDQUFDcEIsSUFBOUIsU0FBUjtBQUFrRCxTQUFHLEVBQUMsRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRE87QUFBQSxHQUFYLENBRlIsQ0FESixDQURKO0FBYUgsQ0F2Q0Q7O0dBQU1DLE87O0tBQUFBLE87QUF5Q04sSUFBTW9CLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtNQUFNRixTO0FBS04sSUFBTUcsTUFBTSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFaO01BQU1DLE07QUFJTixJQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQVg7TUFBTUUsSztBQVFTeEIsc0VBQWYiLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Ib21lL2NvbXBvbmVudHMvUm91dGluZy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gICAge2ljb246J2V0aCd9LCB7aWNvbjogJ2JzYyd9LCB7aWNvbjogJ3BvbHlnb24nfSwge2ljb246ICdhdmEnfSwge2ljb246ICdldGgnfVxuXVxuLy8gY29uc3QgZGVsYXkgPSAyNTAwO1xuY29uc3QgUm91dGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGRlbGF5ID0gaW5kZXggPT09IDAgPyAxNTAwIDogMzAwMDtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgcmVzZXRUaW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICBpZih0aW1lb3V0UmVmLmN1cnJlbnQpe1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXNldFRpbWVvdXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luZGV4IC0tLT4nLGluZGV4KTtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHNldEluZGV4KChwcmV2SW5kZXgpID0+IFxuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgZGVsYXkpO1xuXG4gICAgICAgIHJldHVybigoKSA9PiB7XG4gICAgICAgICAgICByZXNldFRpbWVvdXQoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbaW5kZXhdKTtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8U2xpZGVTaG93PlxuICAgICAgICAgICAgPFNsaWRlciBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7LWluZGV4ICogMTAwfSUsIDAsIDApYCwgdHJhbnNpdGlvbjogaW5kZXggPT09IDAgPyBcIjBzXCIgOlwiZWFzZSAxc1wifX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgLi4vaW1hZ2VzL2hvbWUtcGFnZS8ke2l0ZW0uaWNvbn0ucG5nYH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvU2xpZGVTaG93PlxuICAgIClcbn1cblxuY29uc3QgU2xpZGVTaG93ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogNzUwcHg7XG5gXG5jb25zdCBTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLyogdHJhbnNpdGlvbjogZWFzZSAxczsgKi9cbmBcbmNvbnN0IFNsaWRlID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuYFxuXG5leHBvcnQgZGVmYXVsdCBSb3V0aW5nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/Home/components/Routing.jsx\n");

/***/ })

})