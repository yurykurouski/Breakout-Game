import game from "../../game.js";
import ball from "../objects/ball.js";
import { toogleGameHandlers } from "../../utils.js";
import storageService from "../../storage-service.js";
import paddle from "../objects/paddle.js";


function startGame(event) {
    const factContainer = document.querySelector('.fact-container');

    if (factContainer) {
        factContainer.classList.remove('show');
    }


    console.log(game.started, game.paused)
    if (
        !game.paused &&
        !game.started &&
        event.key === "Enter" ||
        event.type === "click"
    ) {
        toogleGameHandlers();
        game.startGame();
        storageService.set('game', JSON.stringify(game))
    }
    
}

export default startGame;