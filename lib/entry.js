
// const Game = require("./game");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  // const canvasEl = document.getElementsByTagName("canvas")[0];
  const canvas = document.getElementById("canvas");

  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;
  canvas.width = 800;
  canvas.height = 600;

  const ctx = canvas.getContext("2d");
  const pic = new Image();
  // pic.src="images/sky-7.jpg";
  pic.addEventListener("load", function(){ctx.drawImage(pic, 0, 0, canvas.width, canvas.height)}, false);
  // ctx.fillStyle = "red";
  ctx.fillRect(375,550,50,50);

  function Circle(x, y, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      // ctx.fill();
    };

    this.update = function() {
      this.y += this.dy;
      this.draw();
    }
  }



  let circleArray = [];
  // if (Math.floor(Math.random() * 12) === 3) {
    // if (circleArray.length < 4) {
    //   // const fish = new Fish(stage);
    //   circleArray.push(new Circle(x, y, dy, radius))
    //   // this.fish = this.fish.concat(fish);
    // }
  // }
  function generateCircle(circleArray) {

    // for (var i = 0; i < 5; i++) {
    let x = Math.random() * innerHeight;
    let y = 0;
    let radius = (Math.random() + 0.5) * 40;
    let dy = Math.random() * 10;
    // while (Math.floor(Math.random() * 12) === 3) {
      while (circleArray.length < 4) {
        circleArray.push(new Circle(x, y, dy, radius))
      }
    // }
  }
  generateCircle(circleArray);

  //  generateCircle(stage) {
  //   if (Math.floor(Math.random() * 12) === 3) {
  //     if (stage.circleArray.length < 4) {
  //       const fish = new Fish(stage);
  //       this.fish = this.fish.concat(fish);
  //     }
  //   }
  // }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  animate();
  // const game = new Game();
  // new GameView(game, ctx).start();
});
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// // ctx.fillStyle = "red";
// // ctx.fillRect(375,550,50,50);
// // window.ctx = ctx;
//
// const Player = require('./peter.js');
// window.Player = new Player();
