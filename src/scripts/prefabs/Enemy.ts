import MovableObjects from './MovableObject';
import Fires from './Fires';
export default class Enemy extends MovableObjects {

  public fires: Fires;
  public timer: Phaser.Time.TimerEvent;
  public bullet: any;

  static generateAttributes(scene:Phaser.Scene) {
    const x: number = Number(scene.game.config.width) + 200;
    const y: number =  Phaser.Math.Between(100, Number(scene.game.config.height) - 100) ;
    const id: number = Phaser.Math.Between(1, 4);
    return {x, y, frame: `enemy${id}`};
  }

  static generate(scene: Phaser.Scene, fires) {

    const data = Enemy.generateAttributes(scene);

    return new Enemy({
      scene,
      fires,
      x: data.x,
      y: data. y,
      texture: 'enemy',
      frame: data.frame,
      velocity: -250,
      bullet: {
        delay: 1000,
        texture: 'bullet',
        velocity: -500
      },
      origin: {x: 0, y: 0.5}
    });
  }

  public init(data: {
    scene: Phaser.Scene,
    fires: Fires,
    x: number,
    y: number,
    texture: string,
    frame?: string,
    velocity,
    bullet?,
    origin
  }): void {
    super.init(data);
    this.setOrigin(data.origin.x, data.origin.y);
    this.fires = data.fires || new Fires(this.scene);

    this.timer = this.scene.time.addEvent({
      delay: data.bullet.delay,
      loop: true,
      callback: this.fire,
      callbackScope: this
    });
    this.bullet = data.bullet;
  }

  public isDead(): boolean {
    return this.x < -this.width
  }

  public reset() {
    const data = Enemy.generateAttributes(this.scene);
    super.reset(data.x, data.y);
    this.setFrame(data.frame);
  }

  public fire(){
    this.fires.createFire(this);
  }
}
