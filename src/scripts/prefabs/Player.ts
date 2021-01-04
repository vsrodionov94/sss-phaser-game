import GameScene from './../scenes/GameScene';
import Enemy from './Enemy';

export default class Player extends Enemy {
  public body: Phaser.Physics.Arcade.Body;
  public scene: GameScene;
  public velocity: number;

  constructor(scene: Phaser.Scene) {
    super(scene, 150, 500, 'dragon', 'dragon1');
  }

  public init(): void {
    super.init();
    this.velocity = 500;
  }

  public move():void {
    this.body.setVelocity(0);

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
    };

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
    };
  }
}
