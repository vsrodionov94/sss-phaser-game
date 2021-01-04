import Player from './../prefabs/Player';
export default class GameScene extends Phaser.Scene {

  private player: Player;
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
      super('Game');
  }

  public create(): void {
    this.createBackground();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = new Player(this);
  }

  public update(): void {
    this.player.move();
  }

  private createBackground(): void {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }
}
