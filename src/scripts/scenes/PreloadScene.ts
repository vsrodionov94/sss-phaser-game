export default class PreloadScene extends Phaser.Scene {

  constructor() {
    super('Preload');
  }

  public preload (): void {
    this.load.atlas('dragon', '../../../public/assets/dragon.png', '../../../public/assets/dragon.json');
    this.load.atlas('enemy', '../../../public/assets/enemy.png', '../../../public/assets/enemy.json');
    this.load.image('fire', '../../../public/assets/fire.png');
    this.load.image('bullet', '../../../public/assets/bullet.png');
    this.load.atlas('boom', '../../../public/assets/boom.png', '../../../public/assets/boom.json');
  }

  public create(): void {
    this.scene.start('Start')
  }

}
