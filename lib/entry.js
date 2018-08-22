const Circle = require('./circle');
const Game = require('./game');
const Player = require('./player');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const img = document.getElementById("img1");
  const ctx = canvas.getContext("2d");
  const bulbImg = document.getElementById("bulbImg");
  // const player = new Player();
  canvas.width = 800;
  canvas.height = 600;
  const game = new Game(ctx);
  game.start();
});
