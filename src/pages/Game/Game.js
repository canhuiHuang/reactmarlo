import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import assets from './assetsCollection/assets';

class App extends Component {
  state = {
    initialize: true,
    game: {
      width: '100%',
      height: '100%',
      type: Phaser.AUTO,
      scene: {
        init: function () {
          this.cameras.main.setBackgroundColor('#24252A');
        },

        preload: function () {
          assets.images.forEach((image) => {
            console.log(image);
            this.load.image(image, `assets/images/${image}.png`);
          });
        },

        create: function () {
          // Preloaded Assets
          assets.images.forEach((image) => {
            this.add.image(300, 100, image);
            console.log(this.cache.image('sky').width);
          });

          // this.add.image(300, 100, key);
        },

        update: function () {},
      },
    },
  };

  render() {
    const { initialize, game } = this.state;
    return <IonPhaser game={game} initialize={initialize} />;
  }
}

export default App;
