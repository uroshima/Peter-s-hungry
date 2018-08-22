

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.xPos = 375;
    this.yPos = 500;
    this.height = 100;
    this.width = 70;
    // this.size = 50;
    // this.color = "green";
  }

  draw() {
    // this.ctx.rect(this.xPos, this.yPos, 50, 50);
    // this.ctx.strokeStyle = "red";
    // this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.drawImage(bulbImg, this.xPos, this.yPos, this.width, this.height)
  }

  move(e) {
    if (e.keyCode == 39) {
      this.xPos += 10;
    }
    if (e.keyCode == 37) {
      this.xPos += 10;
    }
    this.draw();
  }
}

module.exports = Player
