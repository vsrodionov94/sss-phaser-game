export default class PreloadScene extends Phaser.Scene {

  constructor() {
    super('Preload');
  }

  public preload (): void {
    this.load.atlas('dragon', '../../../public/assets/dragon.png', '../../../public/assets/dragon.json')
  }

  public create(): void {
    this.scene.start('Start')
  }

}
