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

/***/ "./TicTacToe/zad3/src/cell.ts":
/*!************************************!*\
  !*** ./TicTacToe/zad3/src/cell.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(numberColumn) {\r\n        this.numberColumn = numberColumn;\r\n        var numberRow = 1;\r\n    }\r\n    Cell.prototype.createTable = function () {\r\n        var table = document.querySelector(\".board\");\r\n        var rows = 0;\r\n        var columns = this.numberColumn;\r\n        for (var i = 0; i < columns; i++) {\r\n            var numberOfColumn = 0;\r\n            var row = document.createElement(\"div\");\r\n            row.className = \"box fas far\";\r\n            var zmienna = rows.toString();\r\n            var zmienna1 = numberOfColumn.toString();\r\n            row.setAttribute(\"data-row\", zmienna);\r\n            row.setAttribute(\"data-column\", zmienna1);\r\n            table.appendChild(row);\r\n            numberOfColumn++;\r\n            for (var j = 1; j < columns; j++) {\r\n                var column = document.createElement(\"div\");\r\n                column.className = \"box fas far\";\r\n                var zmienna_1 = rows.toString();\r\n                var zmienna1_1 = numberOfColumn.toString();\r\n                column.setAttribute(\"data-row\", zmienna_1);\r\n                column.setAttribute(\"data-column\", zmienna1_1);\r\n                table.appendChild(column);\r\n                console.log(\"działam\");\r\n                numberOfColumn++;\r\n            }\r\n            rows++;\r\n            numberOfColumn = 0;\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n// }\r\n\n\n//# sourceURL=webpack:///./TicTacToe/zad3/src/cell.ts?");

/***/ }),

/***/ "./TicTacToe/zad3/src/game.ts":
/*!************************************!*\
  !*** ./TicTacToe/zad3/src/game.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Game = void 0;\r\nvar round = 1;\r\nvar Board1 = [\r\n    [\"0\", \"1\", \"2\"],\r\n    [\"3\", \"4\", \"5\"],\r\n    [\"6\", \"7\", \"8\"],\r\n];\r\nvar combinations = [\r\n    [3, 5, 7],\r\n    [1, 5, 9],\r\n    [3, 6, 9],\r\n    [2, 5, 8],\r\n    [1, 4, 7],\r\n    [7, 8, 9],\r\n    [4, 5, 6],\r\n    [1, 2, 3],\r\n];\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n    }\r\n    Game.prototype.getBox = function () {\r\n        var boxArray = document.querySelectorAll(\".box\");\r\n        return boxArray;\r\n    };\r\n    Game.checkGameStat = function () {\r\n        var _this = this;\r\n        var winner = null;\r\n        var result = Board1.reduce(function (total, row) { return total.concat(row); });\r\n        var moves = {\r\n            \"fa-times\": [],\r\n            \"fa-circle\": [],\r\n        };\r\n        result.forEach(function (field, index) {\r\n            return moves[field] ? moves[field].push(index) : null;\r\n        });\r\n        combinations.forEach(function (combination) {\r\n            if (combination.every(function (index) { return moves[_this.Player1].indexOf(index) > -1; })) {\r\n                winner = \"Winner is P1\";\r\n            }\r\n            if (combination.every(function (index) { return moves[_this.Player2].indexOf(index) > -1; })) {\r\n                winner = \"Winner is P2\";\r\n            }\r\n        });\r\n        return winner;\r\n    };\r\n    Game.prototype.drawShape = function (event) {\r\n        var _a = event.target.dataset, row = _a.row, column = _a.column;\r\n        Game.Player1 = \"fa-times\";\r\n        Game.Player2 = \"fa-circle\";\r\n        var turn = String(round % 2 === 0 ? Game.Player2 : Game.Player1);\r\n        console.log(\"przed\");\r\n        if (Board1[row][column] === \"fa-times\" ||\r\n            Board1[row][column] === \"fa-circle\")\r\n            return;\r\n        console.log(\"po\");\r\n        event.target.classList.add(turn);\r\n        Board1[row][column] = turn;\r\n        console.log(Game.checkGameStat());\r\n        // alert(Game.checkGameStat());\r\n        round++;\r\n    };\r\n    Game.prototype.test = function () {\r\n        var _this = this;\r\n        this.getBox().forEach(function (box) {\r\n            return box.addEventListener(\"click\", _this.drawShape);\r\n        });\r\n    };\r\n    return Game;\r\n}());\r\nexports.Game = Game;\r\n\n\n//# sourceURL=webpack:///./TicTacToe/zad3/src/game.ts?");

/***/ }),

/***/ "./TicTacToe/zad3/tictactoe.ts":
/*!*************************************!*\
  !*** ./TicTacToe/zad3/tictactoe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.TicTacToe = void 0;\r\nvar cell_1 = __webpack_require__(/*! ./src/cell */ \"./TicTacToe/zad3/src/cell.ts\");\r\nvar game_1 = __webpack_require__(/*! ./src/game */ \"./TicTacToe/zad3/src/game.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var div = document.createElement(\"div\");\r\n        div.className = \"board\";\r\n        document.body.appendChild(div);\r\n        var c1 = new cell_1.Cell(3);\r\n        var g1 = new game_1.Game();\r\n        c1.createTable();\r\n        g1.test();\r\n        return div;\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./TicTacToe/zad3/tictactoe.ts?");

/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/games.enum.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar tictactoe_1 = __webpack_require__(/*! ../TicTacToe/zad3/tictactoe */ \"./TicTacToe/zad3/tictactoe.ts\");\r\n// import \"../dist/style.css\";\r\n// import { BattleShips } from \"./battleships/battleships\";\r\n// import \"./styles/styles.scss\";\r\nvar App = /** @class */ (function () {\r\n    function App(gamesFactory) {\r\n        this.gamesFactory = gamesFactory;\r\n        this.initMenu();\r\n    }\r\n    App.prototype.init = function () {\r\n        var menuContainer = document.createElement(\"div\"); // kontener menu dostępnych gier\r\n        menuContainer.className = \"menu-container\";\r\n        var gameContainer = document.createElement(\"div\"); // kontener główny ekranu z grą\r\n        gameContainer.className = \"game-container\";\r\n        var list = document.createElement(\"ul\"); // lista pozycji w menu dostępnych gier\r\n        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n    };\r\n    App.prototype.initMenu = function () {\r\n        var menuContainer = document.createElement(\"div\"); // kontener menu dostępnych gier\r\n        menuContainer.className = \"menu-container\";\r\n        var gameContainer = document.createElement(\"div\"); // kontener główny ekranu z grą\r\n        gameContainer.className = \"game-container\";\r\n        var list = document.createElement(\"ul\"); // lista pozycji w menu dostępnych gier\r\n        var _loop_1 = function (games) {\r\n            if (isNaN(Number(games))) {\r\n                return \"continue\";\r\n            }\r\n            var game = gameFactory.getGame(Number(games));\r\n            var item = document.createElement(\"li\");\r\n            item.appendChild(document.createTextNode(game.name));\r\n            item.addEventListener(\"click\", function () {\r\n                gameContainer.innerHTML = \"\";\r\n                gameContainer.appendChild(game.getGameElement());\r\n            });\r\n            list.appendChild(item);\r\n            console.log(\"snp\");\r\n        };\r\n        for (var _i = 0, _a = Object.keys(games_enum_1.Games); _i < _a.length; _i++) {\r\n            var games = _a[_i];\r\n            _loop_1(games);\r\n        }\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n    };\r\n    return App;\r\n}());\r\nvar GameFactory = /** @class */ (function () {\r\n    function GameFactory() {\r\n    }\r\n    GameFactory.prototype.getGame = function (game) {\r\n        switch (game) {\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new tictactoe_1.TicTacToe();\r\n            default:\r\n                throw new Error(\"invalid game\");\r\n        }\r\n    };\r\n    return GameFactory;\r\n}());\r\nvar gameFactory = new GameFactory();\r\nvar app = new App(gameFactory);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;