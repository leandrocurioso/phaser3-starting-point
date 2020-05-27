import { Scene as PhaserScene } from 'phaser';

export default class Scene extends PhaserScene {
  constructor({ phaser, options }) {
    super(options);
    this.phaser = phaser;
  }

  init() {}

  preload() {}

  create() {}

  update() {}
}
