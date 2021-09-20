function loadCharacters(game) {
  const player = game.physics.add.sprite(100, 450, "dude");

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(1000);

  // Animations
  game.anims.create({
    key: "left",
    frames: game.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 8,
    repeat: -1,
  });

  game.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  game.anims.create({
    key: "right",
    frames: game.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 8,
    repeat: -1,
  });

  return player;
}

const definitions = {
  loadCharacters,
};

export default definitions;
