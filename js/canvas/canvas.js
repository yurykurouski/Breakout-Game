console.log('hell')
const canvas = document.getElementById('111');
console.log(canvas)
const ctx = canvas.getContext('2d');

const ball = {
    posX: canvas.width / 2,
    posY: canvas.width / 2,
    radius: 10,
    speedX: 4,
    speedY: -4,
}

export function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.posX, ball.posY, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill;
    ctx.closePath();
}