export const setCursors = (cursors, element) => {
  if (cursors.left.isDown)
  {
      element.setVelocityX(-160);

      element.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
      element.setVelocityX(160);

      element.anims.play('right', true);
  }
  else
  {
      element.setVelocityX(0);

      element.anims.play('turn');
  }

  if (cursors.up.isDown && element.body.touching.down)
  {
      element.setVelocityY(-470);
  }
};