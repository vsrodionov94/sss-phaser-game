export default class PreloadScene extends Phaser.Scene {

  constructor() {
    super('Preload');
  }

  public preload (): void {
    this.load.atlas('dragon', '../../../public/assets/dragon.png', '../../../public/assets/dragon.json');
    this.load.atlas('enemy', '../../../public/assets/enemy.png', '../../../public/assets/enemy.json');
    this.load.image('fire', '../../../public/assets/fire.png');
  }

  public create(): void {
    this.scene.start('Start')
  }

}
