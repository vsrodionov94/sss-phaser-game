export default class StartScene extends Phaser.Scene {

  private title: Phaser.GameObjects.Text;
  private text: Phaser.GameObjects.Text;

  constructor() {
    super('Start');
  }

  public preload (): void {
    this.load.image('bg', '../../../public/assets/background.png');
  }

  public create(): void {
    this.add
  }
}
