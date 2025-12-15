"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksource"] = self["webpackChunksource"] || []).push([["ts_shop_ts"],{

/***/ "./ts/data.ts":
/*!********************!*\
  !*** ./ts/data.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTaxRate: () => (/* binding */ defaultTaxRate),\n/* harmony export */   getItems: () => (/* binding */ getItems)\n/* harmony export */ });\nconst defaultTaxRate = 0.08;\nfunction getItems() {\n    const data = sessionStorage.getItem(\"items\");\n    if (data) {\n        return JSON.parse(data);\n    }\n    const items = [\n        { name: \"Latte\", price: 5, stock: 20 },\n        { name: \"Espresso\", price: 4, stock: 20 },\n        { name: \"Americano\", price: 3, stock: 20 },\n        { name: \"Frappe\", price: 6, stock: 20 },\n        { name: \"Cold Brew\", price: 3, stock: 20 }\n    ];\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    sessionStorage.setItem(\"taxRate\", defaultTaxRate.toString());\n    return items;\n}\n\n\n//# sourceURL=webpack://source/./ts/data.ts?\n}");

/***/ }),

/***/ "./ts/shop.ts":
/*!********************!*\
  !*** ./ts/shop.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./ts/data.ts\");\n\nlet items = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getItems)();\nconst container = document.getElementById(\"shop\");\nconst taxInput = document.getElementById(\"tax\");\ntaxInput.value = sessionStorage.getItem(\"taxRate\") || \"0.08\";\nfunction render() {\n    container.innerHTML = \"\";\n    items.forEach(item => {\n        const row = document.createElement(\"div\");\n        row.innerHTML =\n            `${item.name}\n      Price: <input value=\"${item.price}\">\n      Stock: <input value=\"${item.stock}\">`;\n        const inputs = row.querySelectorAll(\"input\");\n        inputs[0].onchange = () => item.price = Number(inputs[0].value);\n        inputs[1].onchange = () => item.stock = Number(inputs[1].value);\n        container.appendChild(row);\n    });\n}\ndocument.getElementById(\"confirm\")\n    .onclick = () => {\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    sessionStorage.setItem(\"taxRate\", taxInput.value);\n    alert(\"Updates completed\");\n};\nrender();\n\n\n//# sourceURL=webpack://source/./ts/shop.ts?\n}");

/***/ })

}]);