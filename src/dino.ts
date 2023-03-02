import { GameObject } from "./game-object";

export class Dino extends GameObject {
  constructor(x: number, y: number) {
    super(x, y, 20, 20);
  }
  draw() {}
  update() {}
}
