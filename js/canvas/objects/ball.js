import storageService from '../../storage-service.js';

const INITIAL_BALL_POS_X = 300;
const INITIAL_BALL_POS_Y = 400;
const INITIAL_BALL_dX = 4;
const INITIAL_BALL_dY = -4;

class Ball {
    constructor() {
        this.posX = INITIAL_BALL_POS_X;
        this.posY = INITIAL_BALL_POS_Y;
        this.radius = 10;
        this.dX = INITIAL_BALL_dX;
        this.dY = INITIAL_BALL_dY;
    }

    drawBall() {
        const canvas = document.getElementById('canvas');
        if (!canvas) {
                return
                }

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
        storageService.set('ball', JSON.stringify(ball));
    }

    stopBall() {
        this.tempDX = this.dX;
        this.tempDY = this.dY;
        this.dX = 0;
        this.dY = 0;
        storageService.set('ball', JSON.stringify(ball));
    }

    resumeBallSpeed() {
        this.dX = this.tempDX;
        this.dY = this.tempDY;
        storageService.set('ball', JSON.stringify(ball));
    }

    setInitialBallSpeed() {
        this.dX = INITIAL_BALL_dX;
        this.dY = INITIAL_BALL_dY;
        storageService.set('ball', JSON.stringify(ball));
    }
}

const ball = new Ball();

storageService.set('ball', JSON.stringify(ball));

export default ball;