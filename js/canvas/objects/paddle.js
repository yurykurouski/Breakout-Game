import storageService from '../../storage-service.js'

class Paddle {
    constructor() {
        this.posX = 260;
        this.posY = 430;
        this.width = 80;
        this.height = 10;
        this.speed = 8;
        this.dX = 0;
    }

    drawPaddle() {
        const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            // const paddle = JSON.parse(storageService.get('paddle'))
            ctx.beginPath();
            ctx.rect(this.posX, this.posY, this.width, this.height);
            ctx.fillStyle = '#444444';
            ctx.fill();
        ctx.closePath();
    }


    setInitialPaddlePos() {
        this.posX = 260;
        this.posY = 430;
    }
}

const paddle = new Paddle();

storageService.set('paddle', JSON.stringify(paddle))

export default paddle;