export default class StartScene extends Phaser.Scene {

  constructor() {
    super('Start');
  }

  public create(): void {
    this.createBackground();
    this.createText();
    this.setEvents();
  }

  private createBackground(): void {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }

  private createText(): void {
    this.add.text(Number(this.sys.game.config.width )/ 2, 500, 'Tap to start', {
      font: '40px Arial',
      color: '#ffffff'
    }).setOrigin(0.5);
  }

  private setEvents(): void {
    this.input.on('pointerdown', ()=>{
      this.scene.start('Game');
    })
  }
}
