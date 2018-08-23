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



class Circle {
constructor(ctx, x, y, dy, radius) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
}

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    this.ctx.fill();
  };

  update() {
    this.y += this.dy;
    this.draw();
  }
}

module.exports = Circle;


/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Circle = __webpack_require__(/*! ./circle */ "./lib/circle.js");
const Game = __webpack_require__(/*! ./game */ "./lib/game.js");
const Player = __webpack_require__(/*! ./player */ "./lib/player.js");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const img = document.getElementById("img1");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 600;
  const game = new Game(ctx);
  game.start();

  window.addEventListener('keydown', keyPressed);
  window.addEventListener('keyup', keyUp);

  function keyPressed(e) {
    let code = e.keyCode;
    if (code === 37) {
      game.player.direction(-10);
    } else if (code === 39) {
      game.player.direction(10);
    }
  }

  function keyUp(e) {
    game.player.direction(0);
  }

});


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Circle = __webpack_require__(/*! ./circle */ "./lib/circle.js");
const Player = __webpack_require__(/*! ./player */ "./lib/player.js");

class Game {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.circleArray = [];
    this.player = new Player(this.ctx);
    this.y = 0;
    this.generateCircle(this.circleArray);
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  generateCircle(circleArray) {
     let x,  dy, radius, circle;
      while (circleArray.length < 4) {
        x = Math.random() * innerHeight;
        radius = (Math.random() + 0.5) * 40;
        dy = Math.random() * 10;
        if (dy < 2) {
          dy *= 3;
        }
        circle = new Circle(this.ctx, x, this.y, dy, radius);
        circleArray.push(circle);
      }
  }

   animate() {
     this.ctx.clearRect(0, 0, innerWidth, innerHeight);
     for (var i = 0; i < this.circleArray.length; i++) {
        if (this.circleArray[i].y - this.circleArray[i].radius >= 600) {
          this.circleArray.splice(i, 1);
          this.generateCircle(this.circleArray)
        }
      this.circleArray[i].update();
    }
    this.player.playUpdate();
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = Game;


/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.xPos = 375;
    this.yPos = 500;
    this.xspeed = 0;
    this.height = 100;
    this.width = 100;
    this.bulbImg = new Image();
    this.bulbImg.src = "./images/peter-griffin.png";
    this.draw = this.draw.bind(this);
  }

  direction(x) {
    this.xspeed = x;
    console.log(this.xspeed);
  }

  playUpdate() {
    this.xPos = this.xPos + this.xspeed;
    this.draw();
  }

  draw() {
    this.ctx.drawImage(this.bulbImg, this.xPos, this.yPos, this.width, this.height)
  }
}

module.exports = Player


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map