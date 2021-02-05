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

    setHidden(brick) {
        brick.visible = false;
    }

    clearField() {
        let bricks = JSON.parse(storageService.get('arrayOfBricks'));

        if (bricks) {
            storageService.set('arrayOfBricks', JSON.stringify(null))
        }
    }
    
    reRender(arrOfBricks) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        arrOfBricks.forEach(column => {
            column.forEach(brick => {
                ctx.beginPath();
                ctx.rect(brick.x, brick.y, brick.width, brick.height);
                ctx.fillStyle = brick.visible ? '#444444' : 'transparent';
                ctx.fill();
                ctx.closePath();
            })
        });
        
        storageService.set('arrayOfBricks', JSON.stringify(arrOfBricks))
    }

    drawBricks() {
        let bricks = JSON.parse(storageService.get('arrayOfBricks'));

        if (!bricks) {
            bricks = [];

            for (let i = 0; i < BRICK_COL_COUNT; i++) {
                bricks[i] = [];
                for (let j = 0; j < BRICK_ROW_COUNT; j++) {
                    const x = i * (this.width + this.padding) + this.offsetX;
                    const y = j * (this.height + this.padding) + this.offsetY;

                    bricks[i][j] = {  ...this, x, y }
                }
            }

            this.reRender(bricks)
        }
        else {
            this.reRender(bricks)
        }
        
    }
}

const bricks = new Brick();

export default bricks;