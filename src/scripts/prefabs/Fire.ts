import MovableObjects from './MovableObject';

export default class Fire extends MovableObjects {

  constructor(data) {
    super(data);
    this.init(data);
  }

  static generate(scene: Phaser.Scene, source): Fire {
    const data = {
      scene,
      x: source.x,
      y: source.y,
      texture: source.bullet.texture,
      velocity: source.bullet.velocity,
    }
    return new Fire(data);
  }

  public isDead(): boolean {
    return this.x < -this.width || this.x > Number(this.scene.game.config.width) + this.width;
  }


}
