import Enemy from './Enemy';
export default class Enemies extends Phaser.Physics.Arcade.Group {
  public timer: Phaser.Time.TimerEvent;
  public count: number;
  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene);
    this.scene = scene;
    this.count = 10;
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.tick,
      callbackScope: this
    })
  }

  private tick(): void {
    if (this.getLength() < this.count) {
      this.createEnemy();
    } else {
      this.timer.remove();
    }

  }

  public createEnemy(): void {
    let enemy = Enemy.generate(this.scene);
    this.add(enemy);
    enemy.move();
  }


}
