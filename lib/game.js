const Circle = require('./circle');
const Player = require('./player');

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

          if (this.missedCircles >= 1) {
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
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = Game;
