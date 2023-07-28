"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [{}, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_7__.useStateProvider)();\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoUrl: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firebaseAuth, provider);\n        try {\n            if (email) {\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_5__.CHECK_USER_ROUTE, {\n                    email\n                });\n                if (!data.status) {\n                    dispatch({\n                        type: _context_constants__WEBPACK_IMPORTED_MODULE_8__.reducerCases.SET_NEW_USER,\n                        newUser: true\n                    });\n                    dispatch({\n                        type: _context_constants__WEBPACK_IMPORTED_MODULE_8__.reducerCases.SET_USER_INFO,\n                        userInfo: {\n                            name,\n                            email,\n                            profileImage,\n                            status: \"\"\n                        }\n                    });\n                    router.push(\"/onboarding\");\n                }\n            }\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center gap-7 bg-search-input-container-background p-5 rounded-lg\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_10__.FcGoogle, {\n                        className: \"text-4xl text-white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"Login With Google\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"b60Ju5bo/3+Ke5E8NFT8MnTC3Sc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_7__.useStateProvider\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ1c7QUFDeUI7QUFDYjtBQUM1QjtBQUMyQjtBQUNiO0FBQ2tCO0FBQ1A7QUFFbkQsU0FBU1csUUFBUTs7SUFDZixNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTSxDQUFDLEVBQUUsRUFBR0ssU0FBUyxHQUFHSix1RUFBZ0JBO0lBRXhDLE1BQU1LLGNBQWMsVUFBVztRQUM3QixNQUFNQyxXQUFXLElBQUlaLDZEQUFrQkE7UUFDdkMsTUFBTSxFQUNKYSxNQUFPLEVBQ1BDLGFBQWNDLEtBQUksRUFBR0MsTUFBSyxFQUFHQyxVQUFXQyxhQUFZLEVBQ3JELEdBQ0EsR0FBRyxNQUFNakIsOERBQWVBLENBQUNDLCtEQUFZQSxFQUFHVTtRQUN6QyxJQUFJO1lBQ0osSUFBR0ksT0FBTTtnQkFDUCxNQUFNLEVBQUNHLEtBQUksRUFBQyxHQUFHLE1BQU1oQixrREFBVSxDQUFDQyw4REFBZ0JBLEVBQUc7b0JBQUNZO2dCQUFLO2dCQUV6RCxJQUFHLENBQUNHLEtBQUtFLE1BQU0sRUFBQztvQkFDZFgsU0FBUzt3QkFDUFksTUFBT2YseUVBQXlCO3dCQUNoQ2lCLFNBQVMsSUFBSTtvQkFDZjtvQkFDQWQsU0FBUzt3QkFDUFksTUFBT2YsMEVBQTBCO3dCQUNqQ21CLFVBQVM7NEJBQ1BYOzRCQUNBQzs0QkFDQUU7NEJBQ0FHLFFBQVE7d0JBQ1Y7b0JBQ0Y7b0JBQ0FaLE9BQU9rQixJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUVILENBQUM7UUFDRCxFQUFDLE9BQU1DLEtBQUk7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNiO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2xDLG1EQUFLQTt3QkFBQ21DLEtBQUk7d0JBQWdCQyxLQUFJO3dCQUFXQyxPQUFPO3dCQUFLQyxRQUFROzs7Ozs7a0NBQzlELDhEQUFDQzt3QkFBS0wsV0FBVTtrQ0FBVzs7Ozs7Ozs7Ozs7OzBCQUU3Qiw4REFBQ007Z0JBQU9OLFdBQVU7Z0JBQThFTyxTQUFTNUI7O2tDQUN2Ryw4REFBQ1oscURBQVFBO3dCQUFDaUMsV0FBVTs7Ozs7O2tDQUNwQiw4REFBQ0s7d0JBQUtMLFdBQVU7a0NBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0FuRFN4Qjs7UUFDUUgsa0RBQVNBO1FBRUFDLG1FQUFnQkE7OztLQUhqQ0U7QUFxRFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzeD9jOTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIjtcbmltcG9ydCB7R29vZ2xlQXV0aFByb3ZpZGVyICwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbe30gLCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKT0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyIDoge1xuICAgICAgZGlzcGxheU5hbWUgOiBuYW1lICwgZW1haWwgLCBwaG90b1VybCA6IHByb2ZpbGVJbWFnZSBcbiAgICB9LFxuICAgIH0gPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoZmlyZWJhc2VBdXRoICwgcHJvdmlkZXIpO1xuICAgIHRyeSB7XG4gICAgaWYoZW1haWwpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFICwge2VtYWlsfSk7XG5cbiAgICAgIGlmKCFkYXRhLnN0YXR1cyl7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlIDogcmVkdWNlckNhc2VzLlNFVF9ORVdfVVNFUiAsIFxuICAgICAgICAgIG5ld1VzZXI6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGUgOiByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgICB1c2VySW5mbzp7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsIFxuICAgICAgICAgICAgcHJvZmlsZUltYWdlLCBcbiAgICAgICAgICAgIHN0YXR1cyA6XCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcm91dGVyLnB1c2goXCIvb25ib2FyZGluZ1wiKTtcbiAgICAgIH1cbiAgICAgICAgIFxuICAgIH1cbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgY29uc29sZS5sb2coZXJyKSBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgZ2FwLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3doYXRzYXBwLmdpZlwiIGFsdD1cIndoYXRzYXBwXCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsXCI+V2hhdHNhcHA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTcgYmctc2VhcmNoLWlucHV0LWNvbnRhaW5lci1iYWNrZ3JvdW5kIHAtNSByb3VuZGVkLWxnXCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgICA8RmNHb29nbGUgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5Mb2dpbiBXaXRoIEdvb2dsZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiRmNHb29nbGUiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiTG9naW4iLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImhhbmRsZUxvZ2luIiwicHJvdmlkZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiZW1haWwiLCJwaG90b1VybCIsInByb2ZpbGVJbWFnZSIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwidHlwZSIsIlNFVF9ORVdfVVNFUiIsIm5ld1VzZXIiLCJTRVRfVVNFUl9JTkZPIiwidXNlckluZm8iLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});