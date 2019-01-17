import { Scene } from "./scene";

export class MainScene extends Scene {

  constructor(options = { key: "MainScene" }) {
    super(options);
    this.message = null;
  }

  init() {
    super.init();
  }

  preload() {}

  create() {
    this.message = this.add.text(this.gameWidthMiddle, this.gameHeightMiddle, "Hello World!", {
      font: "bold 60px Arial",
      fill: "#FFFFFF"
    });
    this.message.x = this.gameWidthMiddle - (this.message.width / 2);
    this.message.y = this.gameHeightMiddle - (this.message.height / 2);
  }

  update() {}

}
