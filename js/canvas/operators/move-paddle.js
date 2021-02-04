import paddle from "../objects/paddle.js";

export function movePaddle() {
    paddle.posX += paddle.dX;

    const canvas = document.querySelector('canvas');

    //wall right
    if (paddle.posX + paddle.width > canvas.width) {
        paddle.posX = canvas.width - paddle.width;
    }

    //wall left
    if (paddle.posX < 0) {
        paddle.posX = 0;
    }
}


//keyDown event
export function startMovingPaddle(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        paddle.dX = paddle.speed;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dX = -paddle.speed;
    }
}

    //keyUp event
export function stopMovingPaddle(e) {
    if (
        e.key === 'Right' ||
        e.key === 'ArrowRight' ||
        e.key === 'Left' ||
        e.key === 'ArrowLeft') {
        paddle.dX = 0;
    }
}