import game from "../../game.js";
import ball from "../objects/ball.js";
import { toogleGameHandlers } from "../../utils.js";
import storageService from "../../storage-service.js";
import paddle from "../objects/paddle.js";


function startGame() {
    
    toogleGameHandlers();

    game.startGame();

    storageService.set('game', JSON.stringify(game))
}

export default startGame;