"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksource"] = self["webpackChunksource"] || []).push([["ts_customer_ts"],{

/***/ "./ts/customer.ts":
/*!************************!*\
  !*** ./ts/customer.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./ts/data.ts\");\n\nconst username = sessionStorage.getItem(\"username\") || \"Customer\";\ndocument.getElementById(\"welcome\").textContent =\n    `Welcome, ${username}`;\nlet items = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getItems)();\nlet cart = {};\nconst menu = document.getElementById(\"menu\");\nconst cartDiv = document.getElementById(\"cart\");\nfunction renderMenu() {\n    menu.innerHTML = \"\";\n    items.forEach(item => {\n        const row = document.createElement(\"div\");\n        row.textContent =\n            `${item.name} $${item.price} Stock: ${item.stock} `;\n        const btn = document.createElement(\"button\");\n        btn.textContent = \"Add to cart\";\n        btn.onclick = () => {\n            if ((cart[item.name] || 0) < item.stock) {\n                cart[item.name] = (cart[item.name] || 0) + 1;\n                renderCart();\n            }\n            else {\n                alert(\"Not enough in stock\");\n            }\n        };\n        row.appendChild(btn);\n        menu.appendChild(row);\n    });\n}\nfunction renderCart() {\n    cartDiv.innerHTML = \"\";\n    let subtotal = 0;\n    const taxRate = Number(sessionStorage.getItem(\"taxRate\"));\n    for (const name in cart) {\n        const item = items.find(i => i.name === name);\n        const qty = cart[name];\n        subtotal += item.price * qty;\n        const row = document.createElement(\"div\");\n        row.textContent =\n            `${name} $${item.price} x ${qty}`;\n        cartDiv.appendChild(row);\n    }\n    const total = subtotal + subtotal * taxRate;\n    const totalDiv = document.createElement(\"div\");\n    totalDiv.textContent = `Total: $${total.toFixed(2)}`;\n    cartDiv.appendChild(totalDiv);\n    const orderBtn = document.createElement(\"button\");\n    orderBtn.textContent = \"Order\";\n    orderBtn.onclick = placeOrder;\n    cartDiv.appendChild(orderBtn);\n}\nfunction placeOrder() {\n    for (const name in cart) {\n        const item = items.find(i => i.name === name);\n        item.stock -= cart[name];\n    }\n    cart = {};\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    renderMenu();\n    renderCart();\n}\nrenderMenu();\n\n\n//# sourceURL=webpack://source/./ts/customer.ts?\n}");

/***/ }),

/***/ "./ts/data.ts":
/*!********************!*\
  !*** ./ts/data.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTaxRate: () => (/* binding */ defaultTaxRate),\n/* harmony export */   getItems: () => (/* binding */ getItems)\n/* harmony export */ });\nconst defaultTaxRate = 0.08;\nfunction getItems() {\n    const data = sessionStorage.getItem(\"items\");\n    if (data) {\n        return JSON.parse(data);\n    }\n    const items = [\n        { name: \"Latte\", price: 5, stock: 20 },\n        { name: \"Espresso\", price: 4, stock: 20 },\n        { name: \"Americano\", price: 3, stock: 20 },\n        { name: \"Frappe\", price: 6, stock: 20 },\n        { name: \"Cold Brew\", price: 3, stock: 20 }\n    ];\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    sessionStorage.setItem(\"taxRate\", defaultTaxRate.toString());\n    return items;\n}\n\n\n//# sourceURL=webpack://source/./ts/data.ts?\n}");

/***/ })

}]);