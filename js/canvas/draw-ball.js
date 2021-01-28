//setInterval для того, чтобы искать канвас после его рендеринга
export const drawBall = function(){setInterval(() => {
    if (document.getElementById("canvas") != null) {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const ball = {
        posX: canvas.width / 2,
        posY: canvas.height / 2,
        radius: 10,
        speedX: 4,
        speedY: -4,
    }
        
    ctx.beginPath();
    ctx.arc(ball.posX, ball.posY, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#444444';
    ctx.fill();
    ctx.closePath();
    
    clearInterval(drawBall)
    }

}, 500);}
