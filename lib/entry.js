const Circle = require('./circle');
const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const img = document.getElementById("img1");
  const ctx = canvas.getContext("2d");
  // ctx.drawImage(img, 0, 0);
  canvas.width = 800;
  canvas.height = 600;

  const pic = new Image();
  // pic.src="images/sky-7.jpg";
  // img.addEventListener("load", function(){ctx.drawImage(img, 0, 0, canvas.width, canvas.height)}, false);
  // ctx.fillRect(375,550,50,50);
  const game = new Game(ctx);
  game.start();
});
