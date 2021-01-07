export default class StartScene extends Phaser.Scene {

  constructor() {
    super('Start');
  }

  public create(data): void {
    this.createBackground();
    if (data.score) {
      this.createStats(data);
    }
    this.createText();
    this.setEvents();
  }

  private createStats(data: {
    completed: boolean,
    score: number
  }){
    this.add.graphics()
      .fillStyle(0x000000, 0.5)
      .fillRoundedRect(Number(this.game.config.width) / 2 - 200, Number(this.game.config.height) / 2 - 200, 400, 400);

    const textTitle = data.completed ? 'Level completed' : 'Game Over';
    const textScore = `Score: ${data.score}`
    const textStyle = {
      font: '40px Arial',
      color: '#ffffff'
    };
    this.add.text(Number(this.game.config.width) / 2, 250, textTitle,textStyle).setOrigin(0.5);
    this.add.text(Number(this.game.config.width) / 2, 350, textScore,textStyle).setOrigin(0.5);
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
