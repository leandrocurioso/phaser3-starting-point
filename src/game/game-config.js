import Phaser from "phaser";
import { MainScene } from "../scene/main.scene";

export default {
    width: 640,
    height: 360,
    type: Phaser.AUTO,
    parent: "game",
    scene: [
        MainScene
    ],
    pixelArt: false
};;
