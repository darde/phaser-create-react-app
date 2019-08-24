export const collide = (elementOne, elementTwo) => {
  const { scene } = window;
  scene.physics.add.collider(elementOne, elementTwo);
};

export const createCursors = () => {
  const { scene } = window;
  return scene.input.keyboard.createCursorKeys();
}

export const overlap = (player, stars, callback) => {
  const { scene } = window;

  scene.physics.add.overlap(player, stars, callback, null, scene);
}