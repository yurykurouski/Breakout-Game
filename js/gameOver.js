import game from "./game.js";

import ball from "./canvas/objects/ball.js";
import bricks from "./canvas/objects/brick.js";
import paddle from "./canvas/objects/paddle.js";

import { gameOverSound } from "./audio/audio.js";
import storageService from "./storage-service.js";
import { renderScore, toogleGameHandlers } from "./utils.js";

//работает когда мяч падает мимо платформы и когда нажимаем на кнопку рестарт
export function gameOver() {
    gameOverSound();
    toogleGameHandlers();
    
    game.endGame();
    game.resetScore();

    storageService.set('game', JSON.stringify(game))
    storageService.set('ball', JSON.stringify(ball))

    renderScore();

    bricks.showAllBricks();
    paddle.setInitialPaddlePos();
    ball.setInitialPos();
}