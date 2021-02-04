import storageService from '../../storage-service.js'

class Paddle {
    constructor() {
        this.posX = 260;
        this.posY = 430;
        this.width = 80;
        this.height = 10;
        this.speedY = 8;
        this.speedX = 0;
    }

    drawPaddle() {
        const thisInterval = setInterval(() => {
        if (document.getElementById("canvas") != null) {

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            // const paddle = JSON.parse(storageService.get('paddle'))
            ctx.beginPath();
            ctx.rect(this.posX, this.posY, this.width, this.height);
            ctx.fillStyle = '#444444';
            ctx.fill();
            ctx.closePath();
        
            clearInterval(thisInterval)
        }

    }, 300);
    }
}

const paddle = new Paddle();

storageService.set('paddle', JSON.stringify(paddle))

export default paddle;