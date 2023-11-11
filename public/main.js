/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\nconst submit = document.getElementById('submit');\nsubmit.addEventListener('submit', function (e) {\n    e.preventDefault();\n    console.log(form_1.getFormData);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQWtDO0FBQ2xDLE1BQU0sTUFBTSxHQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFxQixDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBUyxDQUFhO0lBQ2hELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFXLENBQUMsQ0FBQztBQUVqQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvbmZpZ3VyYXRpb25zLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0Rm9ybURhdGF9IGZyb20gJy4vZm9ybSdcclxuY29uc3Qgc3VibWl0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGU6U3VibWl0RXZlbnQpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRGb3JtRGF0YSk7XHJcblxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getFormData = void 0;\nconst getFormData = (html) => {\n    const inputs = html.querySelectorAll('input');\n    const values = {};\n    inputs.forEach((inputs) => {\n        if (inputs.type != 'submit') {\n            values[inputs.name] = inputs.value;\n        }\n    });\n    return values;\n};\nexports.getFormData = getFormData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsTUFBTSxNQUFNLEdBQTRCLEVBQUU7SUFFMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQXVCLEVBQUMsRUFBRTtRQUN0QyxJQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN0QztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDdEIsQ0FBQztBQVhZLG1CQUFXLGVBV3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb25maWd1cmF0aW9ucy8uL3NyYy9mb3JtLnRzPzdlMTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEZvcm1EYXRhID0gKGh0bWw6IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCB2YWx1ZXM6ICB7W2tleTogc3RyaW5nXTpzdHJpbmd9ID0ge31cclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0czpIVE1MSW5wdXRFbGVtZW50KT0+e1xyXG4gICAgICAgICAgICBpZihpbnB1dHMudHlwZSAhPSAnc3VibWl0Jyl7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5wdXRzLm5hbWVdID0gaW5wdXRzLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/form.ts\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;