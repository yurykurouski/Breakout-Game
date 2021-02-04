import storageService from "../../storage-service.js";
import ball from "../objects/ball.js";
import bricks from "../objects/brick.js";
import paddle from "../objects/paddle.js";

export function moveBall() {
    ball.posX += ball.dX;
    ball.posY += ball.dY;

    const canvas = document.querySelector('canvas');


    //левая и правая стенка
    if (
        ball.posX + ball.radius > canvas.width ||
        ball.posX - ball.radius < 0
    ) {
        ball.dX *= -1; //меняет направление (смещение меняет знак)
    }

    //верхняя и нижняя стенки
    if (
        ball.posY + ball.radius > canvas.height ||
        ball.posY - ball.radius < 0
    ) {
        ball.dY *= -1;
    }

    //платформа 
    if (
        ball.posX - ball.radius > paddle.posX &&
        ball.posX + ball.radius < paddle.posX + paddle.width &&
        ball.posY + ball.radius > paddle.posY
    ) {
        ball.dY *= -1;
    }

    // const allBricks = JSON.parse(storageService.get('allBricks'))
    // //попадание в блоки
    // allBricks.forEach((column) => {
    //     column.forEach((brick) => {
    //         if (brick.visible) {
    //             console.log(ball.posX - ball.radius > brick.posX)
    //             if (
                    
    //                 //левая и правая стороны каждого блок
    //                 ball.posX - ball.radius > brick.posX ||
    //                 ball.posX + ball.radius < brick.posX + brick.width ||
    //                 //верх и низ каждого блока
    //                 ball.posY + ball.radius > brick.posY ||
    //                 ball.posY - ball.radius < brick.posY + brick.height
    //             ) {
    //                 ball.dY *= -1;
    //                 // brick.visible = false;
    //                 // brick.setHidden();
    //             }
    //         }
    //     })
        
    // });

    storageService.set('ball', JSON.stringify(ball));
}