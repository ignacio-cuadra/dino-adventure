import "./style.css";
import config from "./config";

const setupCanvas = (config: any) => {
  const canvas = document.createElement("canvas");
  canvas.width = config.gameWidth;
  canvas.height = config.gameHeight;
  canvas.style.transform = `scale(${config.gameScale})`;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.fillStyle = "#e3e3e3";
  context.fillRect(0, 0, 300, 80);
  return canvas;
};

(() => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  console.log(app);
  const canvas = setupCanvas(config)!;
  app.appendChild(canvas);
})();
