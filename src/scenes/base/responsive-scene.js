import Scene from './scene';

export default class ResponsiveScene extends Scene {
  constructor({ phaser, options }) {
    super({ phaser, options });
  }

  resize(width, height) {
    this.cameras.resize(
      ((width === undefined) ? this.screen.gameWidth : width),
      ((height === undefined) ? this.screen.gameHeight : height),
    );
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();
    this.events.on('resize', this.resize, this);
  }

  update() {
    super.update();
  }
}
