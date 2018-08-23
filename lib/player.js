

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
