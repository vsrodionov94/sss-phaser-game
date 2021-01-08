import Player from './../prefabs/Player';
import Enemies from './../prefabs/Enemies';
import MovableObjects from './../prefabs/MovableObject';
import Boom from './../prefabs/Boom';

export default class GameScene extends Phaser.Scene {

  public player: Player;
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  public bg: Phaser.GameObjects.TileSprite;
  public enemies: Enemies;
  public score: number;
  public scoreText: Phaser.GameObjects.Text;
  public sounds: {
    theme: Phaser.Sound.BaseSound,
    boom: Phaser.Sound.BaseSound
  }
  constructor() {
      super('Game');
  }

  public init(): void {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.score = 0;
  }

  public create(): void {
    this.createBackground();
    if (!this.sounds) {
      this.createSound();
    }
    this.player = new Player(this);
    this.enemies = new Enemies(this);
    this.createCompleteEvents();
    this.addOverlap();
    this.createText();

  }

  public createText(): void {
    this.scoreText = this.add.text(50, 50, 'Score: 0', {
      font: '40px Arial',
      color: '#ffffff'
    });
  }

  public createSound(): void {
    this.sounds = {
        theme: this.sound.add('theme', { volume: 0.1, loop: true }),
        boom: this.sound.add('boom', { volume: 0.3 }),
    };
    this.sounds.theme.play();
  }

  public addOverlap(): void {
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
    this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
    this.physics.add.overlap(this.enemies, this.player, this.onOverlap, undefined, this);
  }

  public onOverlap(source: MovableObjects, target: MovableObjects): void {
    const enemy = [source, target].find(item => item.texture.key === 'enemy');

    if (enemy) {
      ++this.score;
      this.scoreText.setText(`Score ${this.score}`);
      Boom.generate(this, target.x, target.y);
      this.sounds.boom.play()
    }

    source.setAlive(false);
    target.setAlive(false);

  }

  public createCompleteEvents(): void {
    this.player.once('killed', this.onComplete, this);
    this.events.once('enemies-killed', this.onComplete, this);
  }

  public onComplete(): void {
    this.scene.start('Start' , {
      score: this.score,
      completed: this.player.active
    });
  }

  public update(): void {
    this.player.move();
    this.bg.tilePositionX += 0.5;
  }

  public createBackground(): void {
    this.bg = this.add.tileSprite(0, 0, Number(this.sys.game.config.width), Number(this.sys.game.config.height),'bg').setOrigin(0);
  }

}
