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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n/* harmony import */ var _PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotoLibrary */ \"./src/components/common/PhotoLibrary.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [grapPhoto, setGrapPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPhotoLibrary, setShowPhotoLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (grapPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrapPhoto(false);\n                }, 1000);\n            };\n        }\n    }, [\n        grapPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{\n                setShowPhotoLibrary(true);\n            }\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrapPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            console.log(data.src);\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 3\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 3\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \\n      \".concat(hover ? \"visible\" : \"hidden\", \"\\n      \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 32\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 71,\n                columnNumber: 3\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                ContextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            showPhotoLibrary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setImage: setImage,\n                hidePhotoLibrary: setShowPhotoLibrary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 116,\n                columnNumber: 23\n            }, this),\n            grapPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 120,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"S4a8dqURvLsvRFS6WR4i1L8uV+0=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ2pCO0FBQ1M7QUFDQztBQUNBO0FBQ0U7QUFFMUMsU0FBU1EsT0FBTyxLQUF5QixFQUFFO1FBQTNCLEVBQUNDLEtBQUksRUFBR0MsTUFBSyxFQUFHQyxTQUFRLEVBQUMsR0FBekI7O0lBQ2QsTUFBSyxDQUFDQyxPQUFRQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEMsTUFBTSxDQUFDYSxzQkFBdUJDLHdCQUF3QixHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3ZFLE1BQU0sQ0FBQ2UsdUJBQXVCQyx5QkFBeUIsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ2pFaUIsR0FBRTtRQUNGQyxHQUFFO0lBQ0o7SUFFRixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDcUIsa0JBQWtCQyxvQkFBb0IsR0FBR3RCLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUQsTUFBTXVCLGtCQUFrQixDQUFDQyxJQUFJO1FBQzNCQSxFQUFFQyxjQUFjO1FBQ2hCWCx3QkFBd0IsSUFBSTtRQUM1QkUseUJBQXlCO1lBQUVDLEdBQUlPLEVBQUVFLEtBQUs7WUFBR1IsR0FBSU0sRUFBRUcsS0FBSztRQUFDO0lBRXZEO0lBRUYxQixnREFBU0EsQ0FBQyxJQUFJO1FBQ2QsSUFBR2tCLFdBQVU7WUFDWCxNQUFNUyxPQUFPQyxTQUFTQyxjQUFjLENBQUM7WUFDckNGLEtBQUtHLEtBQUs7WUFDVkYsU0FBU0csSUFBSSxDQUFDQyxPQUFPLEdBQUksQ0FBQ1QsSUFBSTtnQkFDNUJVLFdBQVcsSUFBSTtvQkFDYmQsYUFBYSxLQUFLO2dCQUNwQixHQUFFO1lBRUo7UUFDRixDQUFDO0lBQ0QsR0FBRTtRQUFDRDtLQUFVO0lBRWIsTUFBTWdCLHFCQUFxQjtRQUN6QjtZQUFDQyxNQUFPO1lBQWVDLFVBQVcsSUFBSSxDQUFDO1FBQUM7UUFDeEM7WUFBQ0QsTUFBTztZQUF3QkMsVUFBVyxJQUFJO2dCQUM3Q2Ysb0JBQW9CLElBQUk7WUFDMUI7UUFBQztRQUNEO1lBQUNjLE1BQU87WUFBaUJDLFVBQVcsSUFBSTtnQkFDdENqQixhQUFhLElBQUk7WUFDbkI7UUFBQztRQUNEO1lBQUNnQixNQUFPO1lBQWlCQyxVQUFXLElBQUk7Z0JBQ3RDM0IsU0FBUztZQUNYO1FBQ0Y7S0FDQztJQUVELE1BQU00QixvQkFBb0IsT0FBTWQsSUFBSztRQUNyQyxNQUFNZSxPQUFPZixFQUFFZ0IsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUM5QixNQUFNQyxTQUFTLElBQUlDO1FBQ25CLE1BQU1mLE9BQU9DLFNBQVNlLGFBQWEsQ0FBQztRQUVwQ0YsT0FBT0csTUFBTSxHQUFHLFNBQVNDLEtBQUssRUFBQztZQUM3QmxCLEtBQUttQixHQUFHLEdBQUdELE1BQU1OLE1BQU0sQ0FBQ1EsTUFBTTtZQUM5QnBCLEtBQUtxQixZQUFZLENBQUMsWUFBWUgsTUFBTU4sTUFBTSxDQUFDUSxNQUFNO1FBQ25EO1FBRUFOLE9BQU9RLGFBQWEsQ0FBQ1g7UUFDckJMLFdBQVcsSUFBSTtZQUNiaUIsUUFBUUMsR0FBRyxDQUFDeEIsS0FBS21CLEdBQUc7WUFDdEJyQyxTQUFTa0IsS0FBS21CLEdBQUc7UUFDakIsR0FBRTtJQUVGO0lBRUUscUJBQU87OzBCQUNQLDhEQUFDTTtnQkFBSUMsV0FBVTs7b0JBRWQ5QyxTQUFTLHNCQUNWLDhEQUFDNkM7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNwRCxtREFBS0E7NEJBQUM2QyxLQUFLdEM7NEJBQU84QyxLQUFJOzRCQUFTRCxXQUFVOzRCQUFlRSxJQUFJOzs7Ozs7Ozs7OztvQkFJNURoRCxTQUFTLHNCQUNSLDhEQUFDNkM7d0JBQUlDLFdBQVU7d0JBQ2ZHLGNBQWMsSUFBSTdDLFNBQVMsSUFBSTt3QkFDL0I4QyxjQUFjLElBQUk5QyxTQUFTLEtBQUs7OzBDQUU5Qiw4REFBQ3lDO2dDQUFJQyxXQUFXLDJKQUNlLE9BQTdCM0MsUUFBUSxZQUFZLFFBQVEsRUFBQztnQ0FFL0JnRCxTQUFTbkMsQ0FBQUEsSUFBR0QsZ0JBQWdCQztnQ0FDNUJvQyxJQUFJOztrREFFRiw4REFBQ3pELG9EQUFRQTt3Q0FBQ21ELFdBQVU7d0NBQ3BCTSxJQUFHO3dDQUNIRCxTQUFTbkMsQ0FBQUEsSUFBR0QsZ0JBQWdCQzs7Ozs7O2tEQUc1Qiw4REFBQ3FDO3dDQUFLRixTQUFTbkMsQ0FBQUEsSUFBR0QsZ0JBQWdCQzt3Q0FDbENvQyxJQUFHOzs0Q0FDRjswREFBTyw4REFBQ0U7Ozs7OzRDQUFLOzBEQUFTLDhEQUFDQTs7Ozs7NENBQUs7Ozs7Ozs7Ozs7Ozs7MENBRW5DLDhEQUFDVDtnQ0FBSUMsV0FBVTswQ0FDZiw0RUFBQ3BELG1EQUFLQTtvQ0FBQzZDLEtBQUt0QztvQ0FBTzhDLEtBQUk7b0NBQVNELFdBQVU7b0NBQWVFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTzNEM0Msc0NBQ0UsOERBQUNULG9EQUFXQTtnQkFDWjJELFNBQVM1QjtnQkFDVDZCLFlBQVlqRDtnQkFDWlgsYUFBYVM7Z0JBQ2JvRCxnQkFBZ0JuRDs7Ozs7O1lBSXBCTyxrQ0FBb0IsOERBQUNmLHFEQUFZQTtnQkFDbENJLFVBQVVBO2dCQUNWd0Qsa0JBQWtCNUM7Ozs7OztZQUVqQkgsMkJBQWEsOERBQUNkLG9EQUFXQTtnQkFBQzhELFVBQVU3Qjs7Ozs7Ozs7QUFFdEM7R0FsSFMvQjtLQUFBQTtBQW9IVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQge0ZhQ2FtZXJhfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5pbXBvcnQgUGhvdG9QaWNrZXIgZnJvbSBcIi4vUGhvdG9QaWNrZXJcIjtcbmltcG9ydCBQaG90b0xpYnJhcnkgZnJvbSBcIi4vUGhvdG9MaWJyYXJ5XCI7XG5cbmZ1bmN0aW9uIEF2YXRhcih7dHlwZSAsIGltYWdlICwgc2V0SW1hZ2V9KSB7XG4gIGNvbnN0W2hvdmVyICwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb250ZXh0TWVudVZpc2libGUgLCBzZXRJc0NvbnRleHRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250ZXh0TWVudUNvcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29yZGluYXRlc10gPSB1c2VTdGF0ZSh7XG4gICAgeDowLFxuICAgIHk6MCxcbiAgfSk7XG5cbmNvbnN0IFtncmFwUGhvdG8sIHNldEdyYXBQaG90b10gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCBbc2hvd1Bob3RvTGlicmFyeSwgc2V0U2hvd1Bob3RvTGlicmFyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0NvbnRleHRNZW51VmlzaWJsZSh0cnVlKTtcbiAgICBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMoeyB4IDogZS5wYWdlWCAsIHkgOiBlLnBhZ2VZIH1cbiAgICApO1xuICB9XG5cbnVzZUVmZmVjdCgoKT0+e1xuaWYoZ3JhcFBob3RvKXtcbiAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tcGlja2VyXCIpO1xuICBkYXRhLmNsaWNrKCk7XG4gIGRvY3VtZW50LmJvZHkub25mb2N1cyAgPSAoZSk9PntcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBzZXRHcmFwUGhvdG8oZmFsc2UpO1xuICAgIH0sMTAwMCk7XG4gICAgXG4gIH1cbn1cbn0sW2dyYXBQaG90b10pXG5cbmNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9IFtcbiAge25hbWUgOiBcIlRha2UgUGhvdG9cIiAsIGNhbGxiYWNrIDogKCk9Pnt9fSxcbiAge25hbWUgOiBcIkNob29zZSBGcm9tIExpYnJhcnlcIiAsIGNhbGxiYWNrIDogKCk9PntcbiAgICBzZXRTaG93UGhvdG9MaWJyYXJ5KHRydWUpO1xuICB9fSxcbiAge25hbWUgOiBcIlVwbG9hZCBQaG90b1wiICwgY2FsbGJhY2sgOiAoKT0+e1xuICAgIHNldEdyYXBQaG90byh0cnVlKTtcbiAgfX0sXG4gIHtuYW1lIDogXCJSZW1vdmUgUGhvdG9cIiAsIGNhbGxiYWNrIDogKCk9PntcbiAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIilcbiAgfVxufSxcbl07XG5cbmNvbnN0IHBob3RvUGlja2VyQ2hhbmdlID0gYXN5bmMoZSkgPT57XG5jb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG5jb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbnJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCl7XG4gIGRhdGEuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgZGF0YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBldmVudC50YXJnZXQucmVzdWx0KTtcbn07XG5cbnJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuc2V0VGltZW91dCgoKT0+e1xuICBjb25zb2xlLmxvZyhkYXRhLnNyYyk7XG5zZXRJbWFnZShkYXRhLnNyYyk7XG59LDEwMClcblxufVxuXG4gIHJldHVybiA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gIFxuICB7dHlwZSA9PT0gXCJsZ1wiICYmIChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE0IHctMTRcIj5cbiAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwvPlxuICA8L2Rpdj5cbiAgKX1cbiAgXG4gIHt0eXBlID09PSBcInhsXCIgJiYgKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgei0wXCJcbiAgICBvbk1vdXNlRW50ZXI9eygpPT5zZXRIb3Zlcih0cnVlKX1cbiAgICBvbk1vdXNlTGVhdmU9eygpPT5zZXRIb3ZlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTEwIGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMiBcbiAgICAgICR7aG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XG4gICAgICBgfVxuICAgICAgb25DbGljaz17ZT0+c2hvd0NvbnRleHRNZW51KGUpfVxuICAgICAgaWQgPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgPlxuICAgICAgICA8RmFDYW1lcmEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIiBcbiAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXG4gICAgICAgIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKVxuICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKX1cbiAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXG4gICAgICAgID5DaGFuZ2UgPGJyIC8+IFByb2ZpbGUgPGJyIC8+IFBob3RvPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwIFwiPlxuICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbC8+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgKX1cbiAgXG4gIDwvZGl2PlxuICB7XG4gICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgKFxuICAgICAgPENvbnRleHRNZW51IFxuICAgICAgb3B0aW9ucz17Y29udGV4dE1lbnVPcHRpb25zfVxuICAgICAgY29yZGluYXRlcz17Y29udGV4dE1lbnVDb3JkaW5hdGVzfVxuICAgICAgQ29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfVxuICAgICAgc2V0Q29udGV4dE1lbnU9e3NldElzQ29udGV4dE1lbnVWaXNpYmxlfVxuICAgICAgLz5cbiAgICBcbiApfVxuIHtzaG93UGhvdG9MaWJyYXJ5ICYmIDxQaG90b0xpYnJhcnkgXG4gc2V0SW1hZ2U9e3NldEltYWdlfSBcbiBoaWRlUGhvdG9MaWJyYXJ5PXtzZXRTaG93UGhvdG9MaWJyYXJ5fVxuIC8+fVxuIHtncmFwUGhvdG8gJiYgPFBob3RvUGlja2VyIG9uQ2hhbmdlPXtwaG90b1BpY2tlckNoYW5nZX0vPn1cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiRmFDYW1lcmEiLCJDb250ZXh0TWVudSIsIlBob3RvUGlja2VyIiwiUGhvdG9MaWJyYXJ5IiwiQXZhdGFyIiwidHlwZSIsImltYWdlIiwic2V0SW1hZ2UiLCJob3ZlciIsInNldEhvdmVyIiwiaXNDb250ZXh0TWVudVZpc2libGUiLCJzZXRJc0NvbnRleHRNZW51VmlzaWJsZSIsImNvbnRleHRNZW51Q29yZGluYXRlcyIsInNldENvbnRleHRNZW51Q29yZGluYXRlcyIsIngiLCJ5IiwiZ3JhcFBob3RvIiwic2V0R3JhcFBob3RvIiwic2hvd1Bob3RvTGlicmFyeSIsInNldFNob3dQaG90b0xpYnJhcnkiLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImJvZHkiLCJvbmZvY3VzIiwic2V0VGltZW91dCIsImNvbnRleHRNZW51T3B0aW9ucyIsIm5hbWUiLCJjYWxsYmFjayIsInBob3RvUGlja2VyQ2hhbmdlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbmxvYWQiLCJldmVudCIsInNyYyIsInJlc3VsdCIsInNldEF0dHJpYnV0ZSIsInJlYWRBc0RhdGFVUkwiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0IiwiZmlsbCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJpZCIsInNwYW4iLCJiciIsIm9wdGlvbnMiLCJjb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnUiLCJoaWRlUGhvdG9MaWJyYXJ5Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});