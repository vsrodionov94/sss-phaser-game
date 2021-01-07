import GameScene from './../scenes/GameScene';
import Enemy from './Enemy';

export default class Player extends Enemy {
  public body: Phaser.Physics.Arcade.Body;
  public scene: GameScene;
  public velocity: number;
  public timer: Phaser.Time.TimerEvent;


  constructor(scene: Phaser.Scene) {

    super({
      scene,
      x: 250,
      y: Number(scene.game.config.height) / 2,
      texture: 'dragon',
      frame: 'dragon1',
      velocity: 500,
      bullet: {
        delay: 500,
        texture: 'fire',
        velocity: 750,
      },
      origin: {x: 1, y: 0.5}
    });

    const frames = this.scene.anims.generateFrameNames('dragon', {
      prefix: 'dragon',
      start: 1,
      end: 6
    })

    this.scene.anims.create({
      key: 'fly',
      frames,
      frameRate: 10,
      repeat: -1
    })

    this.play('fly');
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
