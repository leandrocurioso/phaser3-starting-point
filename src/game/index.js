import { Game as PhaserGame } from 'phaser';

export default class Game extends PhaserGame {
  constructor({ phaser, gameConfig, scenes = [] }) {
    super(gameConfig.get(phaser));
    this.loadScenes(gameConfig, scenes);
  }

  loadScenes(gameConfig, scenes) {
    scenes.forEach(scene => this.scene.add(scene.sys.config.key, scene));
    this.scene.start(gameConfig.startScene);
  }
}
