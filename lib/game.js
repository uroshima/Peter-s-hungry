const Circle = require('./circle');
const Player = require('./player');

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
