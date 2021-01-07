import Fires from './Fires';

export default class MovableObjects extends Phaser.Physics.Arcade.Sprite {


  public body: Phaser.Physics.Arcade.Body;
  public velocity: number;
  public timer: Phaser.Time.TimerEvent;
  public bullet: {
    delay: number,
    velocity: number,
    texture: string
  }

  constructor(data: {
    scene: Phaser.Scene,
    fires?: Fires,
    x: number,
    y: number,
    texture: string,
    frame?: string,
    velocity,
    bullet?: {
      delay: number,
      velocity: number,
      texture: string
    },
    origin?: {x: number, y: number}
  }) {
    super(data.scene, data.x, data.y, data.texture, data.frame);
    this.init(data);

  }

  public init(data): void {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = data.velocity;
    this.scene.events.on('update', this.update, this);
  }
  public reset(x, y): void {
    this.x = x;
    this.y = y;
    this.setAlive(true);
  }

  public isDead(): boolean {
    return false;
  }

  public update(): void {
    if (this.active && this.isDead()) {
      this.setAlive(false);
    }
  }

  public setAlive(state:boolean): void {
    this.body.enable = state;
    this.setVisible(state);
    this.setActive(state);

    if (this.timer) {
        this.timer.paused = !state;
    }
    if (!status){
      this.emit('killed');
    }

  }

  public move():void {
    this.body.setVelocityX(this.velocity);
  }

}
