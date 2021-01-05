import Player from './../prefabs/Player';
import Enemy from './../prefabs/Enemy';
import Enemies from './../prefabs/Enemies';

export default class GameScene extends Phaser.Scene {

  private player: Player;
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  public bg: Phaser.GameObjects.TileSprite;
  public enemies: Enemies;
  constructor() {
      super('Game');
  }

  public init(): void {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public create(): void {
    this.createBackground();
    this.player = new Player(this);
    this.enemies = new Enemies(this.physics.world, this);
  }

  public update(): void {
    this.player.move();
    this.bg.tilePositionX += 0.5;
  }

  private createBackground(): void {
    this.bg = this.add.tileSprite(0, 0, Number(this.sys.game.config.width), Number(this.sys.game.config.height),'bg').setOrigin(0);
  }
}
