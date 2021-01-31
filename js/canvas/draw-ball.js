import ball from "./objects/ball.js";

import storageService from "../storage-service.js";

//setInterval для того, чтобы искать канвас после его рендеринга
export const drawBall = function () {
    const thisInterval = setInterval(() => {
    if (document.getElementById("canvas") != null) {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // const ball = JSON.parse(storageService.get('ball'));
        
    ctx.beginPath();
    ctx.arc(ball.posX, ball.posY, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#444444';
    ctx.fill();
    ctx.closePath();
    
    clearInterval(thisInterval)
    }

    }, 400);
}
