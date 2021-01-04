export default class GameScene extends Phaser.Scene {


    constructor() {
        super('Game');
    }

    public create (): void {
      this.createBackground();

      this.add.sprite(150, Number(this.sys.game.config.height) / 2, 'dragon', 'dragon1' )
    }

    private createBackground(): void {
      this.add.sprite(0, 0, 'bg').setOrigin(0);
    }

}
