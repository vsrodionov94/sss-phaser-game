import GameScene from './../scenes/GameScene';
import Enemy from './Enemy';
import Fires from './Fires';

export default class Player extends Enemy {
  public body: Phaser.Physics.Arcade.Body;
  public scene: GameScene;
  public velocity: number;
  public fires: Fires;
  public timer: Phaser.Time.TimerEvent;


  constructor(scene: Phaser.Scene) {
    super({
      scene,
      x: 250,
      y: Number(scene.game.config.height) / 2,
      texture: 'dragon',
      frame: 'dragon1',
      velocity: 500
    });
  }

  public init(data): void {
    super.init(data);
    this.fires = new Fires(this.scene);

    this.timer = this.scene.time.addEvent({
      delay: 500,
      loop: true,
      callback: this.fire,
      callbackScope: this
    })
  }

  private fire(){
    this.fires.createFire(this);
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
