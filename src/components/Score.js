export const createScore = () => {
  const { scene } = window;

  return scene.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
};