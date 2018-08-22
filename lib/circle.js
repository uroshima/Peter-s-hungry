

class Circle {
constructor(ctx, x, y, dy, radius) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
}

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    this.ctx.fill();
  };

  update() {
    this.y += this.dy;
    this.draw();
  }
}

module.exports = Circle;
