import React from 'react';
import ReactDOM from 'react-dom';
import Phaser from 'phaser';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };

  const game = new Phaser.Game(config);

  function preload() {
    this.load.setBaseURL('http://localhost:3000/');
    this.load.image('sky', './assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude',
      'assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    );
  }

  function create() {
    this.add.image(400, 300, 'sky');
  }

  function update() {
  }

  return (
    <div />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
