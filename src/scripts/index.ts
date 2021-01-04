import * as Phaser from "phaser";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [StartScene, GameScene],
};

export default new Phaser.Game(config);