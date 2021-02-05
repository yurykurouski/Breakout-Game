import game from "./game.js";

import ball from "./canvas/objects/ball.js";
import bricks from "./canvas/objects/brick.js";
import paddle from "./canvas/objects/paddle.js";

import storageService from "./storage-service.js";
import { renderScore, toogleGameHandlers } from "./utils.js";


//работает когда мяч падает мимо платформы и когда нажимаем на кнопку рестарт
export function gameOver() {
    toogleGameHandlers();

    game.resetScore();
    game.endGame();
    game.resumeGame();

    paddle.setInitialPaddlePos();

    storageService.set('ball', JSON.stringify(ball))
    storageService.set('game', JSON.stringify(game))

    renderScore();

    bricks.showAllBricks();

    ball.setInitialPos();
}