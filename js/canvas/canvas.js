import {drawBall} from "./draw-ball.js";
import { drawBricks } from "./draw-bricks.js";
import { drawPaddle } from "./draw-paddle.js";
import { drawScore } from "./draw-score.js";

function drawFieldsObjects() {
    drawBall();
    drawPaddle();
    // drawScore();
    drawBricks();
}


export default drawFieldsObjects;