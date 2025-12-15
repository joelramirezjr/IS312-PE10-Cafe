/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/customer.ts":
/*!************************!*\
  !*** ./ts/customer.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./ts/data.ts\");\n\nconst username = sessionStorage.getItem(\"username\") || \"Customer\";\nconst welcome = document.getElementById(\"welcome\");\nif (welcome) {\n    welcome.textContent = `Welcome, ${username}`;\n}\nlet items = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getItems)();\nlet cart = {};\nconst menu = document.getElementById(\"menu\");\nconst cartDiv = document.getElementById(\"cart\");\nfunction renderMenu() {\n    if (!menu)\n        return;\n    menu.innerHTML = \"\";\n    items.forEach(item => {\n        const row = document.createElement(\"div\");\n        row.textContent =\n            `${item.name} $${item.price} Stock: ${item.stock} `;\n        const btn = document.createElement(\"button\");\n        btn.textContent = \"Add to cart\";\n        btn.onclick = () => {\n            if ((cart[item.name] || 0) < item.stock) {\n                cart[item.name] = (cart[item.name] || 0) + 1;\n                renderCart();\n            }\n            else {\n                alert(\"Not enough in stock\");\n            }\n        };\n        row.appendChild(btn);\n        menu.appendChild(row);\n    });\n}\nfunction renderCart() {\n    if (!cartDiv)\n        return;\n    cartDiv.innerHTML = \"\";\n    let subtotal = 0;\n    const taxRate = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTaxRate)();\n    for (const name in cart) {\n        const item = items.find(i => i.name === name);\n        const qty = cart[name];\n        subtotal += item.price * qty;\n        const row = document.createElement(\"div\");\n        row.textContent =\n            `${name} $${item.price} x ${qty}`;\n        cartDiv.appendChild(row);\n    }\n    const total = subtotal + subtotal * taxRate;\n    const totalDiv = document.createElement(\"div\");\n    totalDiv.textContent = `Total: $${total.toFixed(2)}`;\n    cartDiv.appendChild(totalDiv);\n    const orderBtn = document.createElement(\"button\");\n    orderBtn.textContent = \"Order\";\n    orderBtn.onclick = placeOrder;\n    cartDiv.appendChild(orderBtn);\n}\nfunction placeOrder() {\n    for (const name in cart) {\n        const item = items.find(i => i.name === name);\n        item.stock -= cart[name];\n    }\n    cart = {};\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    renderMenu();\n    renderCart();\n}\nrenderMenu();\nrenderCart();\n\n\n//# sourceURL=webpack://source/./ts/customer.ts?\n}");

/***/ }),

/***/ "./ts/data.ts":
/*!********************!*\
  !*** ./ts/data.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTaxRate: () => (/* binding */ defaultTaxRate),\n/* harmony export */   getItems: () => (/* binding */ getItems),\n/* harmony export */   getTaxRate: () => (/* binding */ getTaxRate),\n/* harmony export */   setTaxRate: () => (/* binding */ setTaxRate)\n/* harmony export */ });\nconst defaultTaxRate = 0.08;\nfunction getItems() {\n    const data = sessionStorage.getItem(\"items\");\n    if (data) {\n        return JSON.parse(data);\n    }\n    const items = [\n        { name: \"Latte\", price: 5, stock: 20 },\n        { name: \"Espresso\", price: 4, stock: 20 },\n        { name: \"Americano\", price: 3, stock: 20 },\n        { name: \"Frappe\", price: 6, stock: 20 },\n        { name: \"Cold Brew\", price: 3, stock: 20 }\n    ];\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    sessionStorage.setItem(\"taxRate\", defaultTaxRate.toString());\n    return items;\n}\nfunction getTaxRate() {\n    const rate = sessionStorage.getItem(\"taxRate\");\n    return rate ? Number(rate) : defaultTaxRate;\n}\nfunction setTaxRate(rate) {\n    sessionStorage.setItem(\"taxRate\", rate.toString());\n}\n\n\n//# sourceURL=webpack://source/./ts/data.ts?\n}");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ \"./ts/login.ts\");\n/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer */ \"./ts/customer.ts\");\n/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ \"./ts/shop.ts\");\nvar _a, _b, _c, _d, _e;\n\n\n\nconst page = document.body.getAttribute(\"data-page\");\nif (page !== \"login\") {\n    (_a = document.getElementById(\"loginForm\")) === null || _a === void 0 ? void 0 : _a.remove();\n}\nif (page !== \"customer\") {\n    (_b = document.getElementById(\"menu\")) === null || _b === void 0 ? void 0 : _b.remove();\n    (_c = document.getElementById(\"cart\")) === null || _c === void 0 ? void 0 : _c.remove();\n}\nif (page !== \"shop\") {\n    (_d = document.getElementById(\"shop\")) === null || _d === void 0 ? void 0 : _d.remove();\n    (_e = document.getElementById(\"confirm\")) === null || _e === void 0 ? void 0 : _e.remove();\n}\n\n\n//# sourceURL=webpack://source/./ts/index.ts?\n}");

/***/ }),

/***/ "./ts/login.ts":
/*!*********************!*\
  !*** ./ts/login.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// login.ts\nfunction initLogin() {\n    const page = document.body.dataset.page;\n    // Only run this code on the login page\n    if (page !== \"login\") {\n        return;\n    }\n    const form = document.getElementById(\"loginForm\");\n    const usernameInput = document.getElementById(\"username\");\n    if (!form || !usernameInput) {\n        return;\n    }\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        sessionStorage.setItem(\"username\", usernameInput.value);\n        // Go to customer view\n        window.location.href = \"customer.html\";\n    });\n}\ninitLogin();\n\n\n\n//# sourceURL=webpack://source/./ts/login.ts?\n}");

/***/ }),

/***/ "./ts/shop.ts":
/*!********************!*\
  !*** ./ts/shop.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./ts/data.ts\");\n// shop.ts\n\nfunction initShop() {\n    const page = document.body.dataset.page;\n    if (page !== \"shop\") {\n        return;\n    }\n    const shopDiv = document.getElementById(\"shop\");\n    const confirmBtn = document.getElementById(\"confirm\");\n    const taxInput = document.getElementById(\"tax\");\n    if (!shopDiv || !confirmBtn || !taxInput) {\n        return;\n    }\n    let items = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getItems)();\n    function renderShop() {\n        shopDiv.innerHTML = \"\";\n        items.forEach(item => {\n            const row = document.createElement(\"div\");\n            row.innerHTML = `\n        <strong>${item.name}</strong><br>\n        Price: <input type=\"number\" value=\"${item.price}\" step=\"0.01\"><br>\n        Stock: <input type=\"number\" value=\"${item.stock}\">\n        <hr>\n      `;\n            const inputs = row.querySelectorAll(\"input\");\n            const priceInput = inputs[0];\n            const stockInput = inputs[1];\n            priceInput.onchange = () => {\n                item.price = Number(priceInput.value);\n            };\n            stockInput.onchange = () => {\n                item.stock = Number(stockInput.value);\n            };\n            shopDiv.appendChild(row);\n        });\n        taxInput.value = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTaxRate)().toString();\n    }\n    confirmBtn.addEventListener(\"click\", () => {\n        sessionStorage.setItem(\"items\", JSON.stringify(items));\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.setTaxRate)(Number(taxInput.value));\n        alert(\"Updates completed\");\n    });\n    renderShop();\n}\ninitShop();\n\n\n//# sourceURL=webpack://source/./ts/shop.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/index.ts");
/******/ 	
/******/ })()
;