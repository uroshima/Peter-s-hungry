const Circle = require('./circle');
const Game = require('./game');
const Player = require('./player');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 506;
  const game = new Game(ctx);

  // const audio = document.getElementById("audio").autoplay;

  window.addEventListener('keydown', restartGame);

  function restartGame(e) {
    let code = e.keyCode;
    if (code === 32) {
      game.restart();
    }
  }
  // function titleImageOn() {
  //   document.getElementById("overlay").style.display = "block";
  // }
  game.pressSpaceToStart();

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
// sprite code
  // const canWidth = 800;
  // const canHeight = 506;
  //
  // let x = 375;
  // let y = 406;
  //
  // let left = false;
  //
  // let trackLeft = 1;
  // let trackRight = 0;
  // // position fro the sprite from the sprite sheet
  // let srcX;
  // let srcY;
  //
  // const sheetWidth = 790;
  // const sheetHeight = 199;
  //
  // const cols = 7;
  // const rows = 2;
  // let width = sheetWidth / cols;
  // let height = sheetHeight / rows;
  //
  // let currentFrame = 0;
  // let character = new Image();
  // character.src = "./images/peter-sprite.png";
  //
  // let canvas = document.getElementById("canvas");
  // canvas.width = canWidth;
  // canvas.height = canHeight;
  // const ctx = canvas.getContext('2d');
  //
  // function moveRight() {
  //   left = false;
  // }
  //
  // function moveLeft() {
  //   left = true;
  // }
  //
  // function updateFrame() {
  //   ctx.clearRect(x, y, width, height);
  //   currentFrame = ++currentFrame % cols;
  //   srcX = currentFrame * width;
  //   if (left)
  //     srcY = trackLeft * height;
  //   else
  //     x += 5;
  //     srcY = trackRight * height;
  //
  // }
  //
  // function drawImage() {
  //   updateFrame();
  //   ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
  // }
  //
  // setInterval(function() {
  //   drawImage();
  // }, 100);
  //

});
