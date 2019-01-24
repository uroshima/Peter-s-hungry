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
