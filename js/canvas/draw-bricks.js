import storageService from '../storage-service.js';
import brickInfo from './objects/brick.js'

const BRICK_COL_COUNT = 7;
const BRICK_ROW_COUNT = 5;

export const drawBricks = function () {
    // const thisInterval = setInterval(() => {
    //     if (document.getElementById("canvas") != null) {

    //         const canvas = document.getElementById('canvas');
    //         const ctx = canvas.getContext('2d');

    //         // const brickInfo = JSON.parse(storageService.get('brickInfo'))
    //         const bricks = [];

    //         for (let i = 0; i < BRICK_COL_COUNT; i++) {
    //             bricks[i] = [];
    //             for (let j = 0; j < BRICK_ROW_COUNT; j++) {
    //                 const x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
    //                 const y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;

    //                 bricks[i][j] = {  ...brickInfo, x, y }
    //             }
    //         }

    //         bricks.forEach(column => {
    //             column.forEach(brick => {
    //                 ctx.beginPath();
    //                 ctx.rect(brick.x, brick.y, brick.width, brick.height);
    //                 ctx.fillStyle = brick.visible ? '#444444' : 'transparent';
    //                 ctx.fill();
    //                 ctx.closePath();
    //             })
    //         });

    //         clearInterval(thisInterval)

    //     }
    // }, 500);
}
