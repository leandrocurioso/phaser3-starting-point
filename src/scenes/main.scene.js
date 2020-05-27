import ResponsiveScene from './base/responsive-scene';

export default class MainScene extends ResponsiveScene {
  static get options() {
    return {
      key: 'main'
    };
  }

  constructor({ phaser, mainSceneOptions }) {
    super({ phaser, options: mainSceneOptions });
  }

  init() {
    super.init();
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();
    this.text = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Hello World!', {
      fill: '#ffffff',
      fontSize: '64px'
    });
    this.text.setOrigin(0.5, 0.5);
  }

  update() {
    super.update();
  }
}
