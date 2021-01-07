export default class Boom extends Phaser.GameObjects.Sprite {
  constructor(data){
    super(data.scene, data.x, data.y, 'boom', 'boom1');
    this.scene.add.existing(this);

    const frames = this.scene.anims.generateFrameNames('boom', {
      prefix: 'boom',
      start: 1,
      end: 4
    })

    this.scene.anims.create({
      key: 'boom',
      frames,
      frameRate: 10,
      repeat: 0
    })

    this.play('boom');

    this.once(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, ()=>{
      this.destroy();
    })
  }

  static generate(scene, x, y) {
    return new Boom({ scene, x, y })
  }
}
