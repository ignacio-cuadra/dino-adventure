export class GameState {
  context: CanvasRenderingContext2D;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }
  processInputs = () => {};
  update = () => {};
  render = () => {};
}
