"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksource"] = self["webpackChunksource"] || []).push([["ts_login_ts"],{

/***/ "./ts/login.ts":
/*!*********************!*\
  !*** ./ts/login.ts ***!
  \*********************/
/***/ (() => {

eval("{\nconst form = document.getElementById(\"loginForm\");\nconst usernameInput = document.getElementById(\"username\");\nform.addEventListener(\"submit\", event => {\n    event.preventDefault();\n    sessionStorage.setItem(\"username\", usernameInput.value);\n    window.location.href = \"customer.html\";\n});\n\n\n//# sourceURL=webpack://source/./ts/login.ts?\n}");

/***/ })

}]);