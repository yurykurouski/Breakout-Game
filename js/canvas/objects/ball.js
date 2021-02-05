import storageService from '../../storage-service.js';

const INITIAL_BALL_POS_X = 300;
const INITIAL_BALL_POS_Y = 400;

class Ball {
    constructor() {
        this.posX = INITIAL_BALL_POS_X;
        this.posY = INITIAL_BALL_POS_Y;
        this.radius = 10;
        this.dX = 4;
        this.dY = -4;
    }

    drawBall() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#444444';
        ctx.fill();
        ctx.closePath();
    }

    setInitialPos() {
        this.posX = INITIAL_BALL_POS_X;
        this.posY = INITIAL_BALL_POS_Y;
    }
}

const ball = new Ball();

storageService.set('ball', JSON.stringify(ball));

export default ball;