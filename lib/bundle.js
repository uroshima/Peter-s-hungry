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

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// const Game = require(\"./game\");\n// const GameView = require(\"./game_view\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  const canvas = document.getElementById(\"canvas\");\n\n  // canvasEl.width = Game.DIM_X;\n  // canvasEl.height = Game.DIM_Y;\n  canvas.width = 800;\n  canvas.height = 600;\n\n  const ctx = canvas.getContext(\"2d\");\n  const pic = new Image();\n  // pic.src=\"images/sky-7.jpg\";\n  pic.addEventListener(\"load\", function(){ctx.drawImage(pic, 0, 0, canvas.width, canvas.height)}, false);\n  // ctx.fillStyle = \"red\";\n  ctx.fillRect(375,550,50,50);\n\n  function Circle(x, y, dy, radius) {\n    this.x = x;\n    this.y = y;\n    this.dy = dy;\n    this.radius = radius;\n\n    this.draw = function() {\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n      ctx.strokeStyle = \"blue\";\n      ctx.stroke();\n      // ctx.fill();\n    };\n\n    this.update = function() {\n      this.y += this.dy;\n      this.draw();\n    }\n  }\n\n\n\n  let circleArray = [];\n  // if (Math.floor(Math.random() * 12) === 3) {\n    // if (circleArray.length < 4) {\n    //   // const fish = new Fish(stage);\n    //   circleArray.push(new Circle(x, y, dy, radius))\n    //   // this.fish = this.fish.concat(fish);\n    // }\n  // }\n  function generateCircle(circleArray) {\n\n    // for (var i = 0; i < 5; i++) {\n    let x = Math.random() * innerHeight;\n    let y = 0;\n    let radius = (Math.random() + 0.5) * 40;\n    let dy = Math.random() * 10;\n    // while (Math.floor(Math.random() * 12) === 3) {\n      while (circleArray.length < 4) {\n        circleArray.push(new Circle(x, y, dy, radius))\n      }\n    // }\n  }\n  generateCircle(circleArray);\n\n  //  generateCircle(stage) {\n  //   if (Math.floor(Math.random() * 12) === 3) {\n  //     if (stage.circleArray.length < 4) {\n  //       const fish = new Fish(stage);\n  //       this.fish = this.fish.concat(fish);\n  //     }\n  //   }\n  // }\n\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, innerWidth, innerHeight);\n    for (var i = 0; i < circleArray.length; i++) {\n      circleArray[i].update();\n    }\n  }\n  animate();\n  // const game = new Game();\n  // new GameView(game, ctx).start();\n});\n// const canvas = document.getElementById(\"canvas\");\n// const ctx = canvas.getContext(\"2d\");\n// // ctx.fillStyle = \"red\";\n// // ctx.fillRect(375,550,50,50);\n// // window.ctx = ctx;\n//\n// const Player = require('./peter.js');\n// window.Player = new Player();\n\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ })

/******/ });