import game from "../../game.js";
import ball from "../objects/ball.js";
import storageService from "../../storage-service.js";

function toogleBallSpeed(event) {

    if (game.started) {
        if (event.type === "click" || event.key === " ") {

            const pauseBtn = document.getElementById('pause-game-btn');

            if (ball.dX && ball.dY && game.started) {
                ball.stopBall();
                game.pauseGame();

                event.target.blur();

                storageService.set('game', JSON.stringify(game))

                pauseBtn.innerHTML = 'Resume';

                return
                
            } else {
                ball.resumeBallSpeed();
                game.resumeGame();

                event.target.blur();

                storageService.set('game', JSON.stringify(game))

                pauseBtn.innerHTML = 'Pause'
                return
            }
        }
    }
    
    return
}

export default toogleBallSpeed;