/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/circle.js":
/*!***********************!*\
  !*** ./lib/circle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Circle {\nconstructor(ctx, x, y, dy, radius) {\n  this.ctx = ctx;\n  this.x = x;\n  this.y = y;\n  this.dy = dy;\n  this.radius = radius;\n}\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    this.ctx.strokeStyle = \"blue\";\n    this.ctx.stroke();\n    this.ctx.fill();\n  };\n\n  update() {\n    this.y += this.dy;\n    this.draw();\n  }\n}\n\nmodule.exports = Circle;\n\n\n//# sourceURL=webpack:///./lib/circle.js?");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Circle = __webpack_require__(/*! ./circle */ \"./lib/circle.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const img = document.getElementById(\"img1\");\n  const ctx = canvas.getContext(\"2d\");\n\n  canvas.width = 800;\n  canvas.height = 600;\n  const game = new Game(ctx);\n  game.start();\n\n  window.addEventListener('keydown', keyPressed);\n  window.addEventListener('keyup', keyUp);\n\n  function keyPressed(e) {\n    let code = e.keyCode;\n    if (code === 37) {\n      game.player.direction(-10);\n    } else if (code === 39) {\n      game.player.direction(10);\n    }\n  }\n\n  function keyUp(e) {\n    game.player.direction(0);\n  }\n\n});\n\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Circle = __webpack_require__(/*! ./circle */ \"./lib/circle.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n\nclass Game {\n  constructor(ctx, player) {\n    this.ctx = ctx;\n    this.circleArray = [];\n    this.player = new Player(this.ctx);\n    this.y = 0;\n    this.generateCircle(this.circleArray);\n  }\n\n  start() {\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  generateCircle(circleArray) {\n     let x,  dy, radius, circle;\n      while (circleArray.length < 4) {\n        x = Math.random() * innerHeight;\n        radius = (Math.random() + 0.5) * 40;\n        dy = Math.random() * 10;\n        if (dy < 2) {\n          dy *= 3;\n        }\n        circle = new Circle(this.ctx, x, this.y, dy, radius);\n        circleArray.push(circle);\n      }\n  }\n\n   animate() {\n     this.ctx.clearRect(0, 0, innerWidth, innerHeight);\n     for (var i = 0; i < this.circleArray.length; i++) {\n        if (this.circleArray[i].y - this.circleArray[i].radius >= 600) {\n          this.circleArray.splice(i, 1);\n          this.generateCircle(this.circleArray)\n        }\n      this.circleArray[i].update();\n    }\n    this.player.playUpdate();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Player {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.xPos = 375;\n    this.yPos = 500;\n    this.xspeed = 0;\n    this.height = 100;\n    this.width = 100;\n    this.bulbImg = new Image();\n    this.bulbImg.src = \"./images/peter-griffin.png\";\n    this.draw = this.draw.bind(this);\n  }\n\n  direction(x) {\n    this.xspeed = x;\n    console.log(this.xspeed);\n  }\n\n  playUpdate() {\n    this.xPos = this.xPos + this.xspeed;\n    this.draw();\n  }\n\n  draw() {\n    this.ctx.drawImage(this.bulbImg, this.xPos, this.yPos, this.width, this.height)\n  }\n}\n\nmodule.exports = Player\n\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ })

/******/ });