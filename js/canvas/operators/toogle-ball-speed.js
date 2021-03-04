import game from "../../game.js";
import ball from "../objects/ball.js";
import storageService from "../../storage-service.js";

function toogleBallSpeed(event) {

    if (!game.started) { return }
   
    if (event.key === " " || event.type === "click") {

        const pauseBtn = document.getElementById('pause-game-btn');

        if (ball.dX && ball.dY && game.started) {
            
            console.log(event.key);

            ball.stopBall();
            game.pauseGame();

            console.log(pauseBtn);

            pauseBtn.innerHTML = 'Resume';
            // pauseBtn.style.display = 'none'

            storageService.set('game', JSON.stringify(game))
            event.target.blur();

            return
            
        } else {
            ball.resumeBallSpeed();
            game.resumeGame();

            console.log(pauseBtn.innerHTML);
            
            pauseBtn.innerHTML = 'Pause'

            storageService.set('game', JSON.stringify(game))
            event.target.blur();
            
            return
        }

        
    }

    

}

export default toogleBallSpeed;