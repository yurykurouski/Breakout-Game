import ball from "./canvas/objects/ball.js";
import game from "./game.js";
import renderRecords from "./records/render-records.js";
import { navigateToUrl } from "./routing.js";

function goToRecords(intId) {
    clearInterval(intId);


    navigateToUrl('/records');

    renderRecords();

    // ball.setInitialBallSpeed();
    // ball.setInitialPos();

    // game.resetScore();

    return

}



export default goToRecords;