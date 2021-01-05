import MovableObjects from './MovableObject';
export default class Enemy extends MovableObjects {

  static generateAttributes(scene:Phaser.Scene) {
    const x: number = Number(scene.game.config.width) + 200;
    const y: number =  Phaser.Math.Between(100, Number(scene.game.config.height) - 100) ;
    const id: number = Phaser.Math.Between(1, 4);
    return {x, y, frame: `enemy${id}`};
  }

  static generate(scene: Phaser.Scene) {

    const data = Enemy.generateAttributes(scene);

    return new Enemy({
      scene,
      x: data.x,
      y: data. y,
      texture: 'enemy',
      frame: data.frame,
      velocity: -500
    });
  }

  public isDead(): boolean {
    return this.x < -this.width
  }

  public reset() {
    const data = Enemy.generateAttributes(this.scene);
    super.reset(data.x, data.y);
    this.setFrame(data.frame);
  }
}
