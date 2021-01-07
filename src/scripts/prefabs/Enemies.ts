import Enemy from './Enemy';
import Fires from './Fires';

export default class Enemies extends Phaser.Physics.Arcade.Group {

  public timer: Phaser.Time.TimerEvent;
  public countMax: number;
  public countCreative: number;
  public fires: Fires;
  constructor(scene: Phaser.Scene){
    super(scene.physics.world, scene);
    this.scene = scene;
    this.fires = new Fires(this.scene);
    this.countMax = 10;
    this.countCreative = 0;
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.tick,
      callbackScope: this
    })
  }

  private tick(): void {
    if (this.countCreative < this.countMax) {
      this.createEnemy();
    } else {
      this.timer.remove();
    }
  }

  public createEnemy(): void {
    let enemy = this.getFirstDead();

    if (!enemy) {
      enemy = Enemy.generate(this.scene, this.fires);
      this.add(enemy);
    } else {
      enemy.reset();
    }

    enemy.move();
    ++this.countCreative;
  }

}
