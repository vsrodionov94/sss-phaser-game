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
    this.enemies = new Enemies(this);
    this.addOverlap();
  }

  public addOverlap(): void {
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
    this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
    this.physics.add.overlap(this.enemies, this.player, this.onOverlap, undefined, this);
  }

  public onOverlap(source, target):void {
    source.setAlive(false);
    target.setAlive(false);
  }

  public update(): void {
    this.player.move();
    this.bg.tilePositionX += 0.5;
  }

  private createBackground(): void {
    this.bg = this.add.tileSprite(0, 0, Number(this.sys.game.config.width), Number(this.sys.game.config.height),'bg').setOrigin(0);
  }

}
