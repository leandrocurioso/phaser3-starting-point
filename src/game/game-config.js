export default class GameConfig {
  static get startScene() {
    return 'boot';
  }

  static get(phaser) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      type: phaser.AUTO,
      title: 'Phaser Game',
      parent: 'game',
      backgroundColor: '#000000',
      pixelArt: true,
      roundPixels: true,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0, x: 0 },
          debug: true
        }
      }
    };
  }
}
