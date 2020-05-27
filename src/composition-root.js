import * as Awilix from 'awilix';
import * as bluebird from 'bluebird';
import { Game as PhaserGame } from 'phaser';
import GameConfig from './game/game-config';
import Game from './game';
import BootScene from './scenes/boot.scene';
import MainScene from './scenes/main.scene';

export default class CompositionRoot {
  constructor({ container }) {
    this.container = container;
  }

  static getInstance() {
    const container = Awilix.createContainer({
      injectionMode: Awilix.InjectionMode.PROXY
    });
    const compositionRoot = new CompositionRoot({ container });
    compositionRoot.registerDependency();
    return compositionRoot;
  }

  registerDependency() {
    this.registerThirdParty();
    this.registerGame();
    this.container.register({ container: Awilix.asValue(this.container) });
  }

  registerThirdParty() {
    this.container.register({
      bluebird: Awilix.asValue(bluebird),
      phaser: Awilix.asValue(PhaserGame)
    });
  }

  registerGame() {
    this.container.register({
      gameConfig: Awilix.asValue(GameConfig),
      game: Awilix.asValue(Game)
    });

    this.container.register({
      bootSceneOptions: Awilix.asValue(BootScene.options),
      mainSceneOptions: Awilix.asValue(MainScene.options)
    });

    this.container.register({
      bootScene: Awilix.asClass(BootScene),
      mainScene: Awilix.asClass(MainScene)
    });

    this.container.register({
      scenes: Awilix.asValue([
        this.container.resolve('bootScene'),
        this.container.resolve('mainScene')
      ])
    });
  }
}
