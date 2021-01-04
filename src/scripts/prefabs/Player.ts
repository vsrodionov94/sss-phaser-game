import GameScene from './../scenes/GameScene';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  public body: Phaser.Physics.Arcade.Body;
  public scene: GameScene;
  public velocity: number;

  constructor(scene) {
    super(scene, 150, 500, 'dragon', 'dragon1');
    this.init();
  }

  private init(): void {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
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
