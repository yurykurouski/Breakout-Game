import game from "../../game.js";
import paddle from "../objects/paddle.js";
import { paddleMove } from "../../audio/audio-sounds.js";
import storageService from "../../storage-service.js";



export function movePaddle() {
    paddle.posX += paddle.dX;

    const canvas = document.querySelector('canvas');

    if (!canvas) {
        return
    }

    //wall right
    if (paddle.posX + paddle.width > canvas.width) {
        paddle.posX = canvas.width - paddle.width;
    }

    //wall left
    if (paddle.posX < 0) {
        paddle.posX = 0;
    }

    storageService.set('paddle', JSON.stringify(paddle));
}


//keyDown event
export function startMovingPaddle(e) {
    if (game.started && !game.paused) {
        if (e.key === 'Right' ||
            e.key === 'ArrowRight')
        {
            paddle.dX = paddle.speed;
            paddleMove();//sound

        } else if (
            e.key === 'Left' ||
            e.key === 'ArrowLeft')
        {
            paddle.dX = -paddle.speed;
            paddleMove();//sound
        }
    }
}

    //keyUp event
export function stopMovingPaddle(e) {
    if (
        e.key === 'Right' ||
        e.key === 'ArrowRight' ||
        e.key === 'Left' ||
        e.key === 'ArrowLeft')
    {
        paddle.dX = 0;
    }
}