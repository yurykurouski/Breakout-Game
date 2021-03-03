import game from "./game.js";

import ball from "./canvas/objects/ball.js";
import bricks from "./canvas/objects/brick.js";
import paddle from "./canvas/objects/paddle.js";

import sounds from "./audio/audio-sounds.js";
import storageService from "./storage-service.js";
import { renderScore, toogleGameHandlers } from "./utils.js";
import recordsList from "./records/records.js";
import { records } from "./records/records-history.js";
import writeRecord from "./records/write-record.js";
import renderFact from "./render/render-fact.js";

//работает когда мяч падает мимо платформы и когда нажимаем на кнопку рестарт
export function gameOver(event) {
    const pauseBtn = document.getElementById('pause-game-btn');
    pauseBtn.innerHTML = 'Pause'

    if (game.started) {
        if (event.key === "Escape" || event.type === "click") {

            sounds.gameOverSound();
            toogleGameHandlers();


            renderFact();
            
            writeRecord();
            
            game.endGame();
            game.resetScore();

            storageService.set('game', JSON.stringify(game))
            storageService.set('ball', JSON.stringify(ball))

            renderScore();

            bricks.showAllBricks();
            paddle.setInitialPaddlePos();
            ball.setInitialPos();
            // ball.setSpeed(ball.dX);
            ball.setSpeed(ball.dX || ball.tempDX)
        }
    }
    
    


}



