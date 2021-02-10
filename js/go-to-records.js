import ball from "./canvas/objects/ball.js";
import game from "./game.js";
import { navigateToUrl } from "./routing.js";

function goToRecords(intId) {
    clearInterval(intId);

    navigateToUrl('/records');

    ball.setInitialBallSpeed();
    ball.setInitialPos();

    game.resetScore();

    return

}



export default goToRecords;