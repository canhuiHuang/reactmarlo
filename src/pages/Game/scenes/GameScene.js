import Phaser from "phaser";
import assets from "../assets/assets";
import definitions from "../util/definitions";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  init() {
    this.cameras.main.setBackgroundColor("#24252A");
  }

  preload() {
    assets.load(this);
  }

  create() {
    // Load some Assets
    this.add.image(800, 600, "sky").setScale(2);

    // Plataforms
    this.platforms = this.physics.add.staticGroup();

    this.platforms
      .create(400, 720 - 32, "ground")
      .setScale(5, 2)
      .refreshBody();

    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");

    // Player
    this.player = definitions.loadCharacters(this);

    // Physics
    this.physics.add.collider(this.player, this.platforms);

    // Keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    let speedX = 160;
    const speedBoost = 80;
    const jumpHeight = -500;

    if (this.cursors.shift.isDown) {
      speedX += speedBoost;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speedX);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speedX);

      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play("turn");
    }

    if (this.cursors.space.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(jumpHeight);
    }
  }
}
