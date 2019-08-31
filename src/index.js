import React from "react";
import ReactDOM from "react-dom";
import Phaser from "phaser";
import { setupGameConfiguration } from "./gameConfig";
import {
  loadAssets,
  addAssetsToScene,
  setupPlayer,
  setupPlatforms,
  setupStars,
  setupBombs
} from "./components/Assets";
import { setupAnimations } from "./components/Animations";
import { setCursors } from "./components/Cursors";
import { collide, createCursors, overlap } from "./helpers";
import { createScore } from "./components/Score";
import "./index.css";

window.scene = {};
window.Phaser = Phaser;
const baseURL = "http://localhost:3000/";

let score = 0;
let scoreText;
let gameOver = false;
let bombs;
let player;
let stars;

function spawnBombs(stars, bombs) {
  if (stars.countActive(true) === 0) {
    stars.children.iterate(function(child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, "bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  }
}

function collectStar(player, star) {
  star.disableBody(true, true);
  score += 5;
  scoreText.setText("Score: " + score);
  spawnBombs(stars, bombs);
}

function hitBomb(player, bomb) {
  const { scene } = window;
  scene.physics.pause();
  player.setTint(0xff0000);
  player.anims.play("turn");
  gameOver = true;
}

const App = () => {
  let platforms, cursors;
  setupGameConfiguration(preload, create, update);

  function preload() {
    window.scene = this;
    this.load.setBaseURL(baseURL);
    loadAssets();
  }

  function create() {
    addAssetsToScene();
    setupAnimations();
    platforms = setupPlatforms();
    player = setupPlayer();
    stars = setupStars();
    bombs = setupBombs();

    collide(player, platforms);
    collide(stars, platforms);
    collide(bombs, platforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    overlap(player, stars, collectStar);

    scoreText = createScore();
  }

  function update() {
    cursors = createCursors();

    setCursors(cursors, player);
  }

  return <div />;
};

ReactDOM.render(<App />, document.getElementById("root"));
