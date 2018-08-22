const Circle = require('./circle');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.circleArray = [];
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
        circle = new Circle(this.ctx, x, this.y, dy, radius);
        // debugger;
        circleArray.push(circle);
      }
      // console.log(circleArray);
  }

  // remove(object) {
  //   if (object instanceof Bullet) {
  //     this.bullets.splice(this.bullets.indexOf(object), 1);
  //   } else if (object instanceof Asteroid) {
  //     this.asteroids.splice(this.asteroids.indexOf(object), 1);
  //   } else if (object instanceof Ship) {
  //     this.ships.splice(this.ships.indexOf(object), 1);
  //   } else {
  //     throw new Error("unknown type of object");
  //   }
  // }
  //
   animate() {

     // console.log(this.ctx);
     this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < this.circleArray.length; i++) {
      if (this.circleArray[i].y - this.circleArray[i].radius >= 600) {
        this.circleArray.splice(i, 1);
        this.generateCircle(this.circleArray)
        continue;
      }
      this.circleArray[i].update();

      console.log(this.circleArray);
    }
    requestAnimationFrame(this.animate.bind(this));
  }

}

module.exports = Game;
