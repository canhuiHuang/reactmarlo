const images = ["sky", "ground"];
const sprites = ["dude"];
const tracks = [];
const soundEffects = [];

const collection = {
  images,
  sprites,
  tracks,
  soundEffects,
};

function load(game) {
  for (let i = 0; i < images.length; i++) {
    game.load.image(images[i], `assets/images/${images[i]}.png`);
  }
  for (let i = 0; i < sprites.length; i++) {
    game.load.spritesheet(sprites[i], `assets/sprites/${sprites[i]}.png`, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }
  for (let i = 0; i < tracks.length; i++) {
    game.load.image(tracks[i], `assets/tracks/${tracks[i]}.wav`);
  }
  for (let i = 0; i < soundEffects.length; i++) {
    game.load.image(
      soundEffects[i],
      `assets/soundEffects/${soundEffects[i]}.wav`
    );
  }
}

const assets = { collection, load };
export default assets;
