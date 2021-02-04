import {drawBall} from "./draw-ball.js";
import { drawBricks } from "./draw-bricks.js";
import { drawPaddle } from "./draw-paddle.js";
import { drawScore } from "./draw-score.js";
import ball from "./objects/ball.js";
import paddle from "./objects/paddle.js";
import bricks from "./objects/brick.js"

function drawFieldsObjects() {
    ball.drawBall();
    paddle.drawPaddle();
    bricks.drawBricks();
    drawScore();
}


export default drawFieldsObjects;