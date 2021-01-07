import Enemy from './Enemy';
import Fires from './Fires';

export default class Enemies extends Phaser.Physics.Arcade.Group {

  public timer: Phaser.Time.TimerEvent;
  public countMax: number;
  public countCreative: number;
  public countKilled: number;
  public fires: Fires;
  constructor(scene: Phaser.Scene){
    super(scene.physics.world, scene);
    this.scene = scene;
    this.fires = new Fires(this.scene);
    this.countMax = 10;
    this.countCreative = 0;
    this.countKilled = 0;
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

  public onEnemyKilled(): void {
    ++this.countKilled;
    console.log(this.countKilled)
    if (this.countKilled >= this.countMax) {
      this.scene.events.emit('enemies-killed');
    };
  }

  public createEnemy(): void {
    let enemy: Enemy = this.getFirstDead();

    if (!enemy) {
      enemy = Enemy.generate(this.scene, this.fires);
      enemy.on('killed', this.onEnemyKilled, this);
      this.add(enemy);
    } else {
      enemy.reset();
    }

    enemy.move();
    ++this.countCreative;
  }

}
