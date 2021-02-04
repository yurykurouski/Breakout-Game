import storageService from '../../storage-service.js'

class Ball {
    constructor() {
        this.posX = 300;
        this.posY = 225;
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
        // const thisInterval = setInterval(() => {
        //     if (document.getElementById("canvas") != null) {

        //     const canvas = document.getElementById('canvas');
        //     const ctx = canvas.getContext('2d');

        //     ctx.beginPath();
        //     ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        //     ctx.fillStyle = '#444444';
        //     ctx.fill();
        //     ctx.closePath();

        //     clearInterval(thisInterval)
        //     }

        // }, 0);
    }


}

const ball = new Ball();

storageService.set('ball', JSON.stringify(ball));

export default ball;