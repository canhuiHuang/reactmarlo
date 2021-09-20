import React, { Component } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
// import assets from "./assets/assets";
// import definitions from "./util/definitions";
import GameScene from "./scenes/GameScene";

class Game extends Component {
  state = {
    initialize: true,
    game: {
      type: Phaser.AUTO,
      width: 1280,
      height: 720,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
      scene: GameScene,
    },
  };

  render() {
    const { initialize, game } = this.state;
    return <IonPhaser game={game} initialize={initialize} />;
  }
}

export default Game;
