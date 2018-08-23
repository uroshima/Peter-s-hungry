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

   gameOver() {
    cancelAnimationFrame();
  }
  //
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

        if (bottomEdgeOfCircle > 506) {
          this.circleArray.splice(i, 1);
          this.missedCircles += 1;
          if (this.missedCircles >= 10) {
            this.gameOver();
          }
          this.generateCircle(this.circleArray);
        }
        if (bottomEdgeOfCircle > petersMouth && ((circleStart > playerStart && circleStart < playerEnd) ||  (circleEnd < playerEnd && circleEnd > playerStart))) {
          this.circleArray.splice(i, 1);
          this.score += 100;
          this.generateCircle(this.circleArray);
        }
      this.circleArray[i].update();
    }
    this.player.playUpdate();
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = Game;
