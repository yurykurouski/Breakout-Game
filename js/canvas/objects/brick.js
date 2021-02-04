import storageService from '../../storage-service.js'
import {BRICK_COL_COUNT, BRICK_ROW_COUNT} from '../../constants.js'

class Brick {
    constructor() {
        this.width = 70;
        this.height = 20;
        this.padding = 10;
        this.offsetX = 25;
        this.offsetY = 50;
        this.visible = true;
    }

    drawBricks() {
        const thisInterval = setInterval(() => {
        if (document.getElementById("canvas") != null) {

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            // const brickInfo = JSON.parse(storageService.get('brickInfo'))
            const bricks = [];

            for (let i = 0; i < BRICK_COL_COUNT; i++) {
                bricks[i] = [];
                for (let j = 0; j < BRICK_ROW_COUNT; j++) {
                    const x = i * (this.width + this.padding) + this.offsetX;
                    const y = j * (this.height + this.padding) + this.offsetY;

                    bricks[i][j] = {  ...this, x, y }
                }
            }

            bricks.forEach(column => {
                column.forEach(brick => {
                    ctx.beginPath();
                    ctx.rect(brick.x, brick.y, brick.width, brick.height);
                    ctx.fillStyle = brick.visible ? '#444444' : 'transparent';
                    ctx.fill();
                    ctx.closePath();
                })
            });

            clearInterval(thisInterval)

        }
    }, 500);
    }
}

const bricks = new Brick();

storageService.set('bricks', JSON.stringify(bricks))

export default bricks;