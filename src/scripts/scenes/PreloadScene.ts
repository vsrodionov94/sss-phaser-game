import LoadingBar from "../classes/LoadingBar";

export default class PreloadScene extends Phaser.Scene {

  constructor() {
    super('Preload');
  }

  public preload (): void {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
    const loadingBar = new LoadingBar(this);
    this.preloadAssets();
  }

  public preloadAssets(): void {
    this.load.atlas('dragon', '../../../public/assets/dragon.png', '../../../public/assets/dragon.json');
    this.load.atlas('enemy', '../../../public/assets/enemy.png', '../../../public/assets/enemy.json');
    this.load.image('fire', '../../../public/assets/fire.png');
    this.load.image('bullet', '../../../public/assets/bullet.png');
    this.load.atlas('boom', '../../../public/assets/boom.png', '../../../public/assets/boom.json');
    this.load.audio('boom', '../../../public/sounds/boom.mp3');
    this.load.audio('theme', '../../../public/sounds/theme.mp3');
  }
  public create(): void {
    this.scene.start('Start')
  }

}
