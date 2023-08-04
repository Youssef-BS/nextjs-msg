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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage;\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 3\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 3\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \\n      \".concat(hover ? \"visible\" : \"hidden\", \"\\n      \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 32\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                ContextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"cQiy8MDdbmqRJK16b1LoBOktIs0=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUNQO0FBQ1M7QUFDQztBQUV4QyxTQUFTSyxPQUFPLEtBQXlCLEVBQUU7UUFBM0IsRUFBQ0MsS0FBSSxFQUFHQyxNQUFLLEVBQUdDLFNBQVEsRUFBQyxHQUF6Qjs7SUFDZCxNQUFLLENBQUNDLE9BQVFDLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNVLHNCQUF1QkMsd0JBQXdCLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDdkUsTUFBTSxDQUFDWSx1QkFBdUJDLHlCQUF5QixHQUFHYiwrQ0FBUUEsQ0FBQztRQUNqRWMsR0FBRTtRQUNGQyxHQUFFO0lBQ0o7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0MsSUFBSTtRQUMzQkEsRUFBRUMsY0FBYztRQUNoQlAsd0JBQXdCLElBQUk7UUFDNUJFLHlCQUF5QjtZQUFFQyxHQUFJRyxFQUFFRSxLQUFLO1lBQUdKLEdBQUlFLEVBQUVHLEtBQUs7UUFBQztJQUV2RDtJQUNGLE1BQU1DLHFCQUFxQjtRQUN6QjtZQUFDQyxNQUFPO1lBQWVDLFVBQVcsSUFBSSxDQUFDO1FBQUM7UUFDeEM7WUFBQ0QsTUFBTztZQUF3QkMsVUFBVyxJQUFJLENBQUM7UUFBQztRQUNqRDtZQUFDRCxNQUFPO1lBQWlCQyxVQUFXLElBQUksQ0FBQztRQUFDO1FBQzFDO1lBQUNELE1BQU87WUFBaUJDLFVBQVcsSUFBSTtnQkFDdENoQjtZQUNGO1FBQUM7S0FDRjtJQUNDLHFCQUFPOzswQkFDUCw4REFBQ2lCO2dCQUFJQyxXQUFVOztvQkFFZHBCLFNBQVMsc0JBQ1YsOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ3hCLG1EQUFLQTs0QkFBQ3lCLEtBQUtwQjs0QkFBT3FCLEtBQUk7NEJBQVNGLFdBQVU7NEJBQWVHLElBQUk7Ozs7Ozs7Ozs7O29CQUk1RHZCLFNBQVMsc0JBQ1IsOERBQUNtQjt3QkFBSUMsV0FBVTt3QkFDZkksY0FBYyxJQUFJcEIsU0FBUyxJQUFJO3dCQUMvQnFCLGNBQWMsSUFBSXJCLFNBQVMsS0FBSzs7MENBRTlCLDhEQUFDZTtnQ0FBSUMsV0FBVywySkFDZSxPQUE3QmpCLFFBQVEsWUFBWSxRQUFRLEVBQUM7Z0NBRS9CdUIsU0FBU2QsQ0FBQUEsSUFBR0QsZ0JBQWdCQztnQ0FDNUJlLElBQUk7O2tEQUVGLDhEQUFDOUIsb0RBQVFBO3dDQUFDdUIsV0FBVTt3Q0FDcEJPLElBQUc7d0NBQ0hELFNBQVNkLENBQUFBLElBQUdELGdCQUFnQkM7Ozs7OztrREFHNUIsOERBQUNnQjt3Q0FBS0YsU0FBU2QsQ0FBQUEsSUFBR0QsZ0JBQWdCQzt3Q0FDbENlLElBQUc7OzRDQUNGOzBEQUFPLDhEQUFDRTs7Ozs7NENBQUs7MERBQVMsOERBQUNBOzs7Ozs0Q0FBSzs7Ozs7Ozs7Ozs7OzswQ0FFbkMsOERBQUNWO2dDQUFJQyxXQUFVOzBDQUNmLDRFQUFDeEIsbURBQUtBO29DQUFDeUIsS0FBS3BCO29DQUFPcUIsS0FBSTtvQ0FBU0YsV0FBVTtvQ0FBZUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPM0RsQixzQ0FDRSw4REFBQ1Asb0RBQVdBO2dCQUNaZ0MsU0FBU2Q7Z0JBQ1RlLFlBQVl4QjtnQkFDWlQsYUFBYU87Z0JBQ2IyQixnQkFBZ0IxQjs7Ozs7Ozs7QUFLdEI7R0FyRVNQO0tBQUFBO0FBdUVULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHtGYUNhbWVyYX0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCJcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuXG5mdW5jdGlvbiBBdmF0YXIoe3R5cGUgLCBpbWFnZSAsIHNldEltYWdlfSkge1xuICBjb25zdFtob3ZlciAsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlICwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGV4dE1lbnVDb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXNdID0gdXNlU3RhdGUoe1xuICAgIHg6MCxcbiAgICB5OjAsXG4gIH0pO1xuXG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0NvbnRleHRNZW51VmlzaWJsZSh0cnVlKTtcbiAgICBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMoeyB4IDogZS5wYWdlWCAsIHkgOiBlLnBhZ2VZIH1cbiAgICApO1xuICB9XG5jb25zdCBjb250ZXh0TWVudU9wdGlvbnMgPSBbXG4gIHtuYW1lIDogXCJUYWtlIFBob3RvXCIgLCBjYWxsYmFjayA6ICgpPT57fX0sXG4gIHtuYW1lIDogXCJDaG9vc2UgRnJvbSBMaWJyYXJ5XCIgLCBjYWxsYmFjayA6ICgpPT57fX0sXG4gIHtuYW1lIDogXCJVcGxvYWQgUGhvdG9cIiAsIGNhbGxiYWNrIDogKCk9Pnt9fSxcbiAge25hbWUgOiBcIlJlbW92ZSBQaG90b1wiICwgY2FsbGJhY2sgOiAoKT0+e1xuICAgIHNldEltYWdlXG4gIH19LFxuXVxuICByZXR1cm4gPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICBcbiAge3R5cGUgPT09IFwibGdcIiAmJiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XG4gIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsLz5cbiAgPC9kaXY+XG4gICl9XG4gIFxuICB7dHlwZSA9PT0gXCJ4bFwiICYmIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgb25Nb3VzZUVudGVyPXsoKT0+c2V0SG92ZXIodHJ1ZSl9XG4gICAgb25Nb3VzZUxlYXZlPXsoKT0+c2V0SG92ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgei0xMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgdGV4dC1jZW50ZXIgZ2FwLTIgXG4gICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgYH1cbiAgICAgIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKX1cbiAgICAgIGlkID1cImNvbnRleHQtb3BlbmVyXCJcbiAgICAgID5cbiAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgXG4gICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSlcbiAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICA+Q2hhbmdlIDxiciAvPiBQcm9maWxlIDxiciAvPiBQaG90bzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNjAgdy02MCBcIj5cbiAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwvPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gICl9XG4gIFxuICA8L2Rpdj5cbiAge1xuICAgIGlzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcbiAgICAgIDxDb250ZXh0TWVudSBcbiAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cbiAgICAgIGNvcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29yZGluYXRlc31cbiAgICAgIENvbnRleHRNZW51PXtpc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgIHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgIC8+XG4gICAgXG4gKX1cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRmFDYW1lcmEiLCJDb250ZXh0TWVudSIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsImlkIiwic3BhbiIsImJyIiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});