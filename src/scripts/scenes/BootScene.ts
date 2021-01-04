export default class BootScene extends Phaser.Scene {

  constructor() {
    super('Boot');
  }

  public preload (): void {
    this.load.image('bg', '../../../public/assets/background.png');
  }

  public create(): void {
    this.scene.start('Preload');
  }

}
