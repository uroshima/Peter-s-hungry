const Circle = require('./circle');
const Game = require('./game');
const Player = require('./player');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const img = document.getElementById("img1");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 506;
  const game = new Game(ctx);
  game.start();

  window.addEventListener('keydown', keyPressed);
  window.addEventListener('keyup', keyUp);

  function keyPressed(e) {
    let code = e.keyCode;
    if (code === 37) {
      game.player.direction(-10);
    } else if (code === 39) {
      game.player.direction(10);
    }
  }

  function keyUp(e) {
    game.player.direction(0);
  }

});
