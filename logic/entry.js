const Circle = require('./circle');
const Game = require('./game');
const Player = require('./player');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 506;
  
  const audio = document.getElementById("audio");
  const song = document.getElementById("song");
  song.play();
  const game = new Game(ctx, audio, song);
  // console.log("Its working");
  // const eatSound;
  // function preload() {
  //   eatSound = loadSound("../sounds/backgroundSound.mp3");
  //   console.log("inside preload function", eatSound);
  // }
  window.addEventListener('keydown', restartGame);
  function restartGame(e) {
    let code = e.keyCode;
    if (code === 32) {
      game.restart();
    }
  }
  game.pressSpaceToStart();
  window.addEventListener('keydown', keyPressed);
  window.addEventListener('keyup', keyUp);

  function keyPressed(e) {
    let code = e.keyCode;
    if (code === 37) {
      game.player.direction(-10);
      console.log("inside keyPressed");
    } else if (code === 39) {
      game.player.direction(10);
    }
  }

  function keyUp(e) {
    game.player.direction(0);
  }
});
