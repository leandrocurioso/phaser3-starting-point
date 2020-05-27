import CompositionRoot from './composition-root';

window.onload = () => {
  const { container } = CompositionRoot.getInstance();
  const phaser = container.resolve('phaser');
  const Game = container.resolve('game');
  const gameConfig = container.resolve('gameConfig');
  const scenes = container.resolve('scenes');
  window.game = new Game({ phaser, gameConfig, scenes });
  window.addEventListener('resize', () => {
    window.game.scale.resize(window.innerWidth, window.innerHeight);
  });
};
