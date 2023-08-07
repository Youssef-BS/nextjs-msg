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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [grapPhoto, setGrapPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (grapPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrapPhoto(false);\n                });\n            };\n        }\n    }, [\n        grapPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrapPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default__avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            console.log(data.src);\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 3\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 3\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \\n      \".concat(hover ? \"visible\" : \"hidden\", \"\\n      \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 32\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 66,\n                columnNumber: 3\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                ContextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            grapPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 111,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"r1Wi6BPcOvpCrBdAWEbCZcxWyx0=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBUUE7d0NBQUNnRCxXQUFVO3dDQUNwQk0sSUFBRzt3Q0FDSEQsU0FBU25DLENBQUFBLElBQUdELGdCQUFnQkM7Ozs7OztrREFHNUIsOERBQUNxQzt3Q0FBS0YsU0FBU25DLENBQUFBLElBQUdELGdCQUFnQkM7d0NBQ2xDb0MsSUFBRzs7NENBQ0Y7MERBQU8sOERBQUNFOzs7Ozs0Q0FBSzswREFBUyw4REFBQ0E7Ozs7OzRDQUFLOzs7Ozs7Ozs7Ozs7OzBDQUVuQyw4REFBQ1Q7Z0NBQUlDLFdBQVU7MENBQ2YsNEVBQUNqRCxtREFBS0E7b0NBQUMwQyxLQUFLcEM7b0NBQU80QyxLQUFJO29DQUFTRCxXQUFVO29DQUFlRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU8zRHpDLHNDQUNFLDhEQUFDUixvREFBV0E7Z0JBQ1p3RCxTQUFTNUI7Z0JBQ1Q2QixZQUFZL0M7Z0JBQ1pWLGFBQWFRO2dCQUNia0QsZ0JBQWdCakQ7Ozs7OztZQUlwQkssMkJBQWEsOERBQUNiLG9EQUFXQTtnQkFBQzBELFVBQVU1Qjs7Ozs7Ozs7QUFFdEM7R0ExR1M3QjtLQUFBQTtBQTRHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQge0ZhQ2FtZXJhfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5pbXBvcnQgUGhvdG9QaWNrZXIgZnJvbSBcIi4vUGhvdG9QaWNrZXJcIjtcblxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlICwgaW1hZ2UgLCBzZXRJbWFnZX0pIHtcbiAgY29uc3RbaG92ZXIgLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvbnRleHRNZW51VmlzaWJsZSAsIHNldElzQ29udGV4dE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRleHRNZW51Q29yZGluYXRlcywgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzXSA9IHVzZVN0YXRlKHtcbiAgICB4OjAsXG4gICAgeTowLFxuICB9KTtcblxuY29uc3QgW2dyYXBQaG90bywgc2V0R3JhcFBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpO1xuICAgIHNldENvbnRleHRNZW51Q29yZGluYXRlcyh7IHggOiBlLnBhZ2VYICwgeSA6IGUucGFnZVkgfVxuICAgICk7XG4gIH1cblxudXNlRWZmZWN0KCgpPT57XG5pZihncmFwUGhvdG8pe1xuICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1waWNrZXJcIik7XG4gIGRhdGEuY2xpY2soKTtcbiAgZG9jdW1lbnQuYm9keS5vbmZvY3VzICA9IChlKT0+e1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHNldEdyYXBQaG90byhmYWxzZSk7XG4gICAgfSlcbiAgICBcbiAgfVxufVxufSxbZ3JhcFBob3RvXSlcblxuY29uc3QgY29udGV4dE1lbnVPcHRpb25zID0gW1xuICB7bmFtZSA6IFwiVGFrZSBQaG90b1wiICwgY2FsbGJhY2sgOiAoKT0+e319LFxuICB7bmFtZSA6IFwiQ2hvb3NlIEZyb20gTGlicmFyeVwiICwgY2FsbGJhY2sgOiAoKT0+e319LFxuICB7bmFtZSA6IFwiVXBsb2FkIFBob3RvXCIgLCBjYWxsYmFjayA6ICgpPT57XG4gICAgc2V0R3JhcFBob3RvKHRydWUpO1xuICB9fSxcbiAge25hbWUgOiBcIlJlbW92ZSBQaG90b1wiICwgY2FsbGJhY2sgOiAoKT0+e1xuICAgIHNldEltYWdlKFwiL2RlZmF1bHRfX2F2YXRhci5wbmdcIilcbiAgfX0sXG5dO1xuXG5jb25zdCBwaG90b1BpY2tlckNoYW5nZSA9IGFzeW5jKGUpID0+e1xuY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbmNvbnN0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG5yZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpe1xuICBkYXRhLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gIGRhdGEuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG59O1xuXG5yZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbnNldFRpbWVvdXQoKCk9PntcbiAgY29uc29sZS5sb2coZGF0YS5zcmMpO1xuc2V0SW1hZ2UoZGF0YS5zcmMpO1xufSwxMDApXG5cbn1cblxuICByZXR1cm4gPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICBcbiAge3R5cGUgPT09IFwibGdcIiAmJiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XG4gIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsLz5cbiAgPC9kaXY+XG4gICl9XG4gIFxuICB7dHlwZSA9PT0gXCJ4bFwiICYmIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgb25Nb3VzZUVudGVyPXsoKT0+c2V0SG92ZXIodHJ1ZSl9XG4gICAgb25Nb3VzZUxlYXZlPXsoKT0+c2V0SG92ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgei0xMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgdGV4dC1jZW50ZXIgZ2FwLTIgXG4gICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgYH1cbiAgICAgIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKX1cbiAgICAgIGlkID1cImNvbnRleHQtb3BlbmVyXCJcbiAgICAgID5cbiAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgXG4gICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSlcbiAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICA+Q2hhbmdlIDxiciAvPiBQcm9maWxlIDxiciAvPiBQaG90bzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNjAgdy02MCBcIj5cbiAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwvPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gICl9XG4gIFxuICA8L2Rpdj5cbiAge1xuICAgIGlzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcbiAgICAgIDxDb250ZXh0TWVudSBcbiAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cbiAgICAgIGNvcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29yZGluYXRlc31cbiAgICAgIENvbnRleHRNZW51PXtpc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgIHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgIC8+XG4gICAgXG4gKX1cbiB7Z3JhcFBob3RvICYmIDxQaG90b1BpY2tlciBvbkNoYW5nZT17cGhvdG9QaWNrZXJDaGFuZ2V9Lz59XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsImdyYXBQaG90byIsInNldEdyYXBQaG90byIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiYm9keSIsIm9uZm9jdXMiLCJzZXRUaW1lb3V0IiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwicGhvdG9QaWNrZXJDaGFuZ2UiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsImV2ZW50Iiwic3JjIiwicmVzdWx0Iiwic2V0QXR0cmlidXRlIiwicmVhZEFzRGF0YVVSTCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsImlkIiwic3BhbiIsImJyIiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});