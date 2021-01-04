import GameScene from './../scenes/GameScene';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  public body: Phaser.Physics.Arcade.Body;
  public scene: GameScene;
  public velocity: number;

  constructor(scene: Phaser.Scene, x:number, y:number, texture:string, frame:string) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  public init(): void {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = 250;
  }

  public move():void {
    this.body.setVelocityX(-this.velocity);
  }
}
