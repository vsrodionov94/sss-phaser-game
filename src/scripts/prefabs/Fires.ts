import Fire from './Fire';

export default class Fires extends Phaser.Physics.Arcade.Group {


  constructor(scene: Phaser.Scene){
    super(scene.physics.world, scene);

  }

  public createFire(source: Phaser.Physics.Arcade.Sprite): void {
    let fire = this.getFirstDead();

    if (!fire) {
      fire = Fire.generate(this.scene, source);
      this.add(fire);
    } else {
      fire.reset(source.x + source.width / 2, source.y);
    }
    fire.move();
  }
}
