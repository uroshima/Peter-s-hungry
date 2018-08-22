

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
