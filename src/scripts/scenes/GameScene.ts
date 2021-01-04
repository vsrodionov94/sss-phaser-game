import Player from './../prefabs/Player';
import Enemy from './../prefabs/Enemy';
export default class GameScene extends Phaser.Scene {

  private player: Player;
  private enemy: Enemy;
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  public bg: Phaser.GameObjects.TileSprite;
  constructor() {
      super('Game');
  }

  public init(): void {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public create(): void {
    this.createBackground();
    this.player = new Player(this);
    this.enemy = new Enemy(this, 1000, 500, 'enemy', 'enemy1');
  }

  public update(): void {
    this.player.move();
    this.enemy.move();
    this.bg.tilePositionX += 0.5;
  }

  private createBackground(): void {
    this.bg = this.add.tileSprite(0, 0, Number(this.sys.game.config.width), Number(this.sys.game.config.height),'bg').setOrigin(0);
  }
}
