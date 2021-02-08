import game from "../../game.js";
import ball from "../objects/ball.js";
import storageService from "../../storage-service.js";

function toogleBallSpeed() {

    const pauseBtn = document.getElementById('pause-game-btn');

    if (ball.dX && ball.dY ) {
        ball.stopBall();
        game.pauseGame();
        storageService.set('game', JSON.stringify(game))

        pauseBtn.innerHTML = 'Resume';
        
    } else {
        ball.resumeBallSpeed();
        game.resumeGame();
        storageService.set('game', JSON.stringify(game))

        pauseBtn.innerHTML = 'Pause'
    }
    
}

export default toogleBallSpeed;