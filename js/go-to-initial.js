import ball from "./canvas/objects/ball.js";
import paddle from "./canvas/objects/paddle.js";
import game from "./game.js";
import { navigateToUrl } from "./routing.js";

function goToInitial(intId) {
    clearInterval(intId);
    navigateToUrl('/');

    ball.setInitialBallSpeed();
    ball.setInitialPos();

    paddle.setInitialPaddleWidth();

    game.resetScore();

    return

}



export default goToInitial;