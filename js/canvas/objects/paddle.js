import { INITIAL_CANVAS_COLOR } from '../../constants.js';
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

        if (!canvas) {
            return
        }

        const ctx = canvas.getContext('2d');

        // const paddle = JSON.parse(storageService.get('paddle'))
        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = INITIAL_CANVAS_COLOR;
        ctx.fill();
        ctx.closePath();
    }


    setInitialPaddlePos() {
        //settimout для того чтобы рендерилось после того как инициализируется канвас
        setTimeout(() => {
            this.posX = canvas.width / 2 - this.width / 2;
            this.posY = 430;
        }, 0)
    }

    setWidth(size) {
        this.width = +size;
        storageService.set('paddle', JSON.stringify(paddle))
    }

    setInitialPaddleWidth() {
        this.width = 80;
    }
}

const paddle = new Paddle();

storageService.set('paddle', JSON.stringify(paddle))

export default paddle;