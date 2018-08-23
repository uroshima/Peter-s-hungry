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

  this.bananasImg = new Image();
  this.bananasImg.src = "./images/bananas.png";
  this.sundaeImg = new Image();
  this.sundaeImg.src = "./images/sundae.png";
  this.croissantImg = new Image();
  this.croissantImg.src = "./images/croissant.png";

  this.doughnutImg = new Image();
  this.doughnutImg.src = "./images/doughnut.png";
  this.grapefruitImg = new Image();
  this.grapefruitImg.src = "./images/grapefruit.png";
  this.hotdogImg = new Image();
  this.hotdogImg.src = "./images/hot-dog.png";

  this.broccoliImg = new Image();
  this.broccoliImg.src = "./images/broccoli.png";
  this.watermelonImg = new Image();
  this.watermelonImg.src = "./images/watermelon.png";
  this.burgerImg = new Image();
  this.burgerImg.src = "./images/burger.png";
  this.draw = this.draw.bind(this);
}

  draw() {

    if (this.radius < 25) {
      this.ctx.drawImage(this.bananasImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 25 && this.radius < 28) {
      this.ctx.drawImage(this.sundaeImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 28 && this.radius < 32) {
      this.ctx.drawImage(this.croissantImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 32 && this.radius < 36) {
      this.ctx.drawImage(this.doughnutImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 36 && this.radius < 40) {
      this.ctx.drawImage(this.grapefruitImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 40 && this.radius < 44) {
      this.ctx.drawImage(this.hotdogImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 44 && this.radius < 48) {
      this.ctx.drawImage(this.broccoliImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else if (this.radius >= 48 && this.radius < 53) {
      this.ctx.drawImage(this.watermelonImg, this.x, this.y, this.radius * 2, this.radius * 2)
    } else {
      this.ctx.drawImage(this.burgerImg, this.x, this.y, this.radius * 2, this.radius * 2)
    }
  }

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
  canvas.height = 506;
  const game = new Game(ctx);

  window.addEventListener('keydown', restartGame);

  function restartGame(e) {
    let code = e.keyCode;
    if (code === 32) {
      game.restart();
    }
  }

  // let gameOverImg = new Image();
  // gameOverImg.src = "./images/game-over.jpg";

  game.pressSpaceToStart();

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
    this.score = 0;
    this.missedCircles = 0;
    this.gameOverImg = new Image();
    this.gameOverImg.src = "./images/game-over.jpg";
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  restart() {
    this.circleArray = [];
    this.player = new Player(this.ctx);
    this.generateCircle(this.circleArray);
    this.score = 0;
    this.missedCircles = 0;
    this.start();
  }

  generateCircle(circleArray) {
     let x,  dy, radius, circle;

      while (circleArray.length < 6) {
        x = Math.random() * innerHeight;
        radius = (Math.random() + 0.5) * 40;
        dy = Math.random() * 3;

        if (dy < 0.6) {
          dy = 1.5;
        }

        circle = new Circle(this.ctx, x, this.y, dy, radius);
        circleArray.push(circle);
      }
  }

  drawGameOver() {
    this.ctx.drawImage(this.gameOverImg, 0, 0, 800, 506);
    this.ctx.font = "70px Comic Sans MS";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Game Over", 250, 280);
    this.drawScore();
    this.pressSpaceToRestart();
  }

  pressSpaceToRestart() {
    this.ctx.font = "26px Comic Sans MS";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Press Space to Restart the Game", 350, 30);
  }

  pressSpaceToStart() {
    // this.ctx.drawImage(this.gameOverImg, 0, 0, 800, 506);
    this.ctx.font = "70px Comic Sans MS";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Press Space to Start", 70, 280);
  }

   gameOver() {
     this.drawGameOver();
    cancelAnimationFrame();
  }
  //
   drawScore() {
    this.ctx.font = "26px Comic Sans MS";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: "+ this.score, 15, 30);
  }

  drawMissedFoodItems() {
    this.ctx.font = "26px Comic Sans MS";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Missed: "+ this.missedCircles, 600, 30);
  }

   animate() {
     this.ctx.clearRect(0, 0, innerWidth, innerHeight);
     for (var i = 0; i < this.circleArray.length; i++) {
       // variables for defining the circle edges
       let circleStart = this.circleArray[i].x - this.circleArray[i].radius;
       let circleEnd = this.circleArray[i].x + this.circleArray[i].radius;
       let bottomEdgeOfCircle = this.circleArray[i].y + this.circleArray[i].radius;
       // variables for defining peters edges
       let playerStart = this.player.xPos - 31;
       let playerEnd = this.player.xPos + 69;
       let petersMouth = this.player.yPos + 20;

       // if the food fails on the ground
        if (bottomEdgeOfCircle > 506) {
          this.circleArray.splice(i, 1);
          this.missedCircles += 1;

          if (this.missedCircles >= 10) {
            this.gameOver();
          }

          this.generateCircle(this.circleArray);
        }
        // if peter catches the food
        if (bottomEdgeOfCircle > petersMouth && ((circleStart > playerStart && circleStart < playerEnd) ||  (circleEnd < playerEnd && circleEnd > playerStart))) {
          this.circleArray.splice(i, 1);
          this.score += 100;
          this.generateCircle(this.circleArray);
        }

      this.circleArray[i].update();
    }
    // console.log(this.player.xpseed)

    this.player.playUpdate();
    this.drawScore();
    this.drawMissedFoodItems();
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
    this.yPos = 406;
    this.xspeed = 0;
    this.height = 100;
    this.width = 100;
    this.bulbImg = new Image();
    this.bulbImg.src = "./images/peter-griffin.png";
    this.draw = this.draw.bind(this);
  }

  direction(x) {
    this.xspeed = x;
  }

  playUpdate() {

    if ((this.xPos + this.xspeed + this.width/2 <= 800) && (this.xPos + this.xspeed + this.width/2 >= 0)) {
      this.xPos = this.xPos + this.xspeed;
    }
    
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