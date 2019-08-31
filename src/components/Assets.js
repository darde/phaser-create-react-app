
export const loadAssets = () => {
  const { scene } = window;

  scene.load.image('sky', '../assets/sky.png');
  scene.load.image('ground', '../assets/platform.png');
  scene.load.image('star', '../assets/star.png');
  scene.load.image('bomb', '../assets/bomb.png');
  scene.load.spritesheet('dude',
    '../assets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
  );
};

export const addAssetsToScene = () => {
  const { scene } = window;

  scene.add.image(400, 300, 'sky');
  scene.add.image(400, 300, 'star');
}

export const setupPlayer = () => {
  const { scene } = window;

  const player = scene.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300)

  return player;
};

export const setupPlatforms = () => {
  const { scene } = window;

  const platforms = scene.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
  
  return platforms;
};

export const setupStars = () => {
  const { scene, Phaser } = window;

  const stars = scene.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

  return stars;
};

export const setupBombs = () => {
  const { scene } = window;

  return scene.physics.add.group();
};