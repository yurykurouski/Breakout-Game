import { playAudio } from "../audio/audio.js";

//setInterval для того, чтобы искать канвас после его рендеринга
export const drawPaddle = function () {
    setInterval(() => {
        if (document.getElementById("canvas") != null) {

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            const paddleWidth = 80;
            const paddleHeigth = 10;
    
            const paddle = {
                posX: canvas.width / 2 - paddleWidth / 2,
                posY: canvas.height - 2 * paddleHeigth,
                width: paddleWidth,
                height: paddleHeigth,
                speedY: 8,
                speedX: 0,
            }
        
            ctx.beginPath();
            ctx.rect(paddle.posX, paddle.posY, paddle.width, paddle.height);
            ctx.fillStyle = '#444444';
            ctx.fill();
            ctx.closePath();
        
            playAudio();
    
            clearInterval(drawPaddle)
        }

    }, 500);
}