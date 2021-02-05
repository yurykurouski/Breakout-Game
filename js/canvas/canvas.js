import ball from "./objects/ball.js";
import paddle from "./objects/paddle.js";
import bricks from "./objects/brick.js"
import clearCanvas from "./clear-canvas.js";

function drawFieldsObjects() {
    clearCanvas();

    ball.drawBall();
    paddle.drawPaddle();
    bricks.drawBricks();
}


export default drawFieldsObjects;