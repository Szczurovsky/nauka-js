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

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(numberColumn) {\r\n        this.numberColumn = numberColumn;\r\n        var numberRow = 1;\r\n    }\r\n    Cell.prototype.createTable = function () {\r\n        var table = document.querySelector(\".board\");\r\n        var rows = 0;\r\n        var columns = this.numberColumn;\r\n        for (var i = 0; i < columns; i++) {\r\n            var numberOfColumn = 0;\r\n            var row = document.createElement(\"div\");\r\n            row.className = \"box fa\";\r\n            var zmienna = rows.toString();\r\n            var zmienna1 = i.toString();\r\n            row.setAttribute(\"data-row\", zmienna);\r\n            row.setAttribute(\"data-column\", zmienna1);\r\n            table.appendChild(row);\r\n            // const column = document.createElement(\"div\");\r\n            // column.className = \"box fa\";\r\n            // const zmienna = rows.toString();\r\n            // const zmienna1 = i.toString();\r\n            // column.setAttribute(\"data-row\", zmienna);\r\n            // column.setAttribute(\"data-column\", zmienna1);\r\n            // table.appendChild(column);\r\n            // console.log(\"działam\");\r\n            for (var j = 1; j < columns; j++) {\r\n                // const row = document.createElement(\"div\");\r\n                // row.className = \"box fa\";\r\n                // const zmienna = rows.toString();\r\n                // const zmienna1 = i.toString();\r\n                // row.setAttribute(\"data-row\", zmienna);\r\n                // row.setAttribute(\"data-column\", 5);\r\n                // table.appendChild(row);\r\n                var column = document.createElement(\"div\");\r\n                column.className = \"box fa\";\r\n                var zmienna_1 = rows.toString();\r\n                var zmienna1_1 = numberOfColumn.toString();\r\n                column.setAttribute(\"data-row\", zmienna_1);\r\n                column.setAttribute(\"data-column\", zmienna1_1);\r\n                table.appendChild(column);\r\n                console.log(\"działam\");\r\n                numberOfColumn++;\r\n            }\r\n            rows++;\r\n            numberOfColumn = 0;\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n// }\r\nvar c1 = new Cell(3);\r\nc1.createTable();\r\n\n\n//# sourceURL=webpack:///./src/Cell.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Cell.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;