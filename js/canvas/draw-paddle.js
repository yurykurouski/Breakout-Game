import storageService from "../storage-service.js";
import paddle from './objects/paddle.js';

//setInterval для того, чтобы искать канвас после его рендеринга
export const drawPaddle = function () {
    const thisInterval = setInterval(() => {
        if (document.getElementById("canvas") != null) {

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            // const paddle = JSON.parse(storageService.get('paddle'))
            ctx.beginPath();
            ctx.rect(paddle.posX, paddle.posY, paddle.width, paddle.height);
            ctx.fillStyle = '#444444';
            ctx.fill();
            ctx.closePath();
        
            clearInterval(thisInterval)
        }

    }, 300);
}