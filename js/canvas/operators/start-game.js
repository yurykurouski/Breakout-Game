import game from "../../game.js";
import ball from "../objects/ball.js";
import { toogleGameHandlers } from "../../utils.js";
import storageService from "../../storage-service.js";


function startGame() {
    toogleGameHandlers();

    ball.setInitialBallSpeed();
    game.startGame();

    storageService.set('game', JSON.stringify(game))
}

export default startGame;