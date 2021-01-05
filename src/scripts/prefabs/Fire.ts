import MovableObjects from './MovableObject';

export default class Fire extends MovableObjects {

  public velocity: number;

  constructor(data) {
    super(data);
    this.init(data);
  }

  static generate(scene: Phaser.Scene, source:Phaser.Physics.Arcade.Sprite): Fire {
    const data = {
      scene,
      x: source.x + source.width / 2,
      y: source.y,
      texture: 'fire',
      velocity: 750
    }
    return new Fire(data);
  }

  public isDead(): boolean {
    return this.x < -this.width || this.x > Number(this.scene.game.config.width) + this.width;
  }


}
