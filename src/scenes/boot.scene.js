import Scene from './base/scene';

export default class BootScene extends Scene {
  static get options() {
    return {
      key: 'boot'
    };
  }

  constructor({ phaser, bootSceneOptions }) {
    super({ phaser, options: bootSceneOptions });
  }

  init() {
    super.init();
  }

  preload() {
    super.init();
  }

  create() {
    super.init();
    this.scene.start('main');
  }

  update() {
    super.update();
  }
}
