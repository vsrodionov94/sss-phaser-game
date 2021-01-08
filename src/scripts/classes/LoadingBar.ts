export default class LoadingBar {
  public scene: Phaser.Scene;
  public progressBox: Phaser.GameObjects.Graphics;
  public progressBar: Phaser.GameObjects.Graphics;
  public style: any;
  constructor(scene) {
    this.scene = scene;

    this.style = {
      boxColor: 0xD3D3D3,
      barColor: 0xFFF8DC,
      x: Number(this.scene.game.config.width) / 2 - 450,
      y: Number(this.scene.game.config.height) / 2 + 250,
      width: 900,
      height: 25,

    }
    this.progressBox = this.scene.add.graphics();
    this.progressBar = this.scene.add.graphics();

    this.showProgressBox();
    this.setEvents();
  }

  public setEvents(): void {
    this.scene.load.on('progress', this.showProgressBar, this);
    this.scene.load.on('fileprogress', this.onFileProgress, this);
    this.scene.load.on('complete', this.onLoadComplete, this);
  }

  public showProgressBox(): void {
    this.progressBox
      .fillStyle(this.style.boxColor)
      .fillRect(this.style.x, this.style.y, this.style.width, this.style.height);
  }

  public showProgressBar(value): void {
    this.progressBar
      .clear()
      .fillStyle(this.style.barColor)
      .fillRect(this.style.x, this.style.y, this.style.width * value, this.style.height);
  }

  public onFileProgress(file): void {

  }

  public onLoadComplete(): void {
    this.progressBar.destroy();
    this.progressBox.destroy();
  }

}
