"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/HomeTAb.js":
/*!************************!*\
  !*** ./src/HomeTAb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");


function HomeTAb(){
const Content = document.querySelector("#content");
const Page = document.createElement("div");
Page.classList.add("Page");
Content.appendChild(Page);
    Page.innerHTML=`${ _config__WEBPACK_IMPORTED_MODULE_0__.homeshow ?'<div class="home">home</div>':''}`
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTAb());

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactshow: () => (/* binding */ contactshow),
/* harmony export */   homeshow: () => (/* binding */ homeshow),
/* harmony export */   menushow: () => (/* binding */ menushow)
/* harmony export */ });
let homeshow = true; 
let menushow = false;
let contactshow = false;



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/HomeTAb.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQVEsb0NBQW9DO0FBQ25FO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R4QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL0hvbWVUQWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZXNob3cgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuZnVuY3Rpb24gSG9tZVRBYigpe1xuY29uc3QgQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuUGFnZS5jbGFzc0xpc3QuYWRkKFwiUGFnZVwiKTtcbkNvbnRlbnQuYXBwZW5kQ2hpbGQoUGFnZSk7XG4gICAgUGFnZS5pbm5lckhUTUw9YCR7IGhvbWVzaG93ID8nPGRpdiBjbGFzcz1cImhvbWVcIj5ob21lPC9kaXY+JzonJ31gXG59XG5leHBvcnQgZGVmYXVsdCBIb21lVEFiKCk7IiwibGV0IGhvbWVzaG93ID0gdHJ1ZTsgXG5sZXQgbWVudXNob3cgPSBmYWxzZTtcbmxldCBjb250YWN0c2hvdyA9IGZhbHNlO1xuXG5leHBvcnQgeyBob21lc2hvdywgbWVudXNob3csIGNvbnRhY3RzaG93IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9