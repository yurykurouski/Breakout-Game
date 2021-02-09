import ball from "./canvas/objects/ball.js";
import game from "./game.js";
import { gameOver } from "./gameOver.js";
import { navigateToUrl } from "./routing.js";
import storageService from "./storage-service.js";

function backToMain() {
    
    navigateToUrl('/main');
    return

}

export default backToMain;