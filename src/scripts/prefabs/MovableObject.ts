export default class MovableObjects extends Phaser.Physics.Arcade.Sprite {

  public body: Phaser.Physics.Arcade.Body;
  public velocity: number;

  constructor(data: {
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string,
    velocity?: number,

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

  public setAlive(state): void {
    this.body.enable = state;
    this.setVisible(state);
    this.setActive(state);
  }

  public move():void {
    this.body.setVelocityX(this.velocity);
  }

}
