import * as Phaser from "phaser";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/GameScene";
import BootScene from './scenes/BootScene';
import PreloadScene from './scenes/PreloadScene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
};

export default new Phaser.Game(config);
