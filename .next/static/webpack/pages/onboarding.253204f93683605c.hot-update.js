"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: [\n                type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-14 w-14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 3\n                }, this),\n                type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative cursor-pointer z-0\",\n                    onMouseEnter: ()=>setHover(true),\n                    onMouseLeave: ()=>setHover(false),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \\n      \".concat(hover ? \"visible\" : \"hidden\", \"\\n      \"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCamera, {\n                                    className: \"text-2xl\",\n                                    id: \"context-opener\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Change \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 22\n                                        }, this),\n                                        \" Profile \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 37\n                                        }, this),\n                                        \" Photo\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center h-60 w-60 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: image,\n                                alt: \"avatar\",\n                                className: \"rounded-full\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 3\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 3\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n            lineNumber: 19,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Avatar, \"cQiy8MDdbmqRJK16b1LoBOktIs0=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFDO0FBQ1A7QUFDUztBQUV2QyxTQUFTSSxPQUFPLEtBQXlCLEVBQUU7UUFBM0IsRUFBQ0MsS0FBSSxFQUFHQyxNQUFLLEVBQUdDLFNBQVEsRUFBQyxHQUF6Qjs7SUFDZCxNQUFLLENBQUNDLE9BQVFDLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNTLHNCQUF1QkMsd0JBQXdCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDdkUsTUFBTSxDQUFDVyx1QkFBdUJDLHlCQUF5QixHQUFHWiwrQ0FBUUEsQ0FBQztRQUNqRWEsR0FBRTtRQUNGQyxHQUFFO0lBQ0o7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0MsSUFBSTtRQUMzQkEsRUFBRUMsY0FBYztRQUNoQlAsd0JBQXdCLElBQUk7SUFDOUI7SUFFQSxxQkFBTztrQkFDUCw0RUFBQ1E7WUFBSUMsV0FBVTs7Z0JBRWRmLFNBQVMsc0JBQ1YsOERBQUNjO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDbEIsbURBQUtBO3dCQUFDbUIsS0FBS2Y7d0JBQU9nQixLQUFJO3dCQUFTRixXQUFVO3dCQUFlRyxJQUFJOzs7Ozs7Ozs7OztnQkFJNURsQixTQUFTLHNCQUNSLDhEQUFDYztvQkFBSUMsV0FBVTtvQkFDZkksY0FBYyxJQUFJZixTQUFTLElBQUk7b0JBQy9CZ0IsY0FBYyxJQUFJaEIsU0FBUyxLQUFLOztzQ0FFOUIsOERBQUNVOzRCQUFJQyxXQUFXLDJKQUNlLE9BQTdCWixRQUFRLFlBQVksUUFBUSxFQUFDOzs4Q0FFN0IsOERBQUNMLG9EQUFRQTtvQ0FBQ2lCLFdBQVU7b0NBQVdNLElBQUc7Ozs7Ozs4Q0FDbEMsOERBQUNDOzt3Q0FBSztzREFBTyw4REFBQ0M7Ozs7O3dDQUFLO3NEQUFTLDhEQUFDQTs7Ozs7d0NBQUs7Ozs7Ozs7Ozs7Ozs7c0NBRXhDLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDZiw0RUFBQ2xCLG1EQUFLQTtnQ0FBQ21CLEtBQUtmO2dDQUFPZ0IsS0FBSTtnQ0FBU0YsV0FBVTtnQ0FBZUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9EO0dBekNTbkI7S0FBQUE7QUEyQ1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhci5qc3g/MDE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQge0ZhQ2FtZXJhfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxuXG5mdW5jdGlvbiBBdmF0YXIoe3R5cGUgLCBpbWFnZSAsIHNldEltYWdlfSkge1xuICBjb25zdFtob3ZlciAsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlICwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGV4dE1lbnVDb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXNdID0gdXNlU3RhdGUoe1xuICAgIHg6MCxcbiAgICB5OjAsXG4gIH0pXG5cbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIDw+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgXG4gIHt0eXBlID09PSBcImxnXCIgJiYgKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbC8+XG4gIDwvZGl2PlxuICApfVxuICBcbiAge3R5cGUgPT09IFwieGxcIiAmJiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB6LTBcIlxuICAgIG9uTW91c2VFbnRlcj17KCk9PnNldEhvdmVyKHRydWUpfVxuICAgIG9uTW91c2VMZWF2ZT17KCk9PnNldEhvdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHotMTAgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGgtNjAgdy02MCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIHRleHQtY2VudGVyIGdhcC0yIFxuICAgICAgJHtob3ZlciA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cbiAgICAgIGB9PlxuICAgICAgICA8RmFDYW1lcmEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIiBpZD1cImNvbnRleHQtb3BlbmVyXCIvPlxuICAgICAgICA8c3Bhbj5DaGFuZ2UgPGJyIC8+IFByb2ZpbGUgPGJyIC8+IFBob3RvPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwIFwiPlxuICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbC8+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgKX1cbiAgXG4gIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJGYUNhbWVyYSIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpZCIsInNwYW4iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});