export default class StartScene extends Phaser.Scene {

  constructor() {
    super('Start');
  }

  public preload (): void {
    this.load.image('bg', '../../../public/assets/background.png');
  }

  public create(): void {
    this.createBackground();
  }

  private createBackground(): void {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }
}
