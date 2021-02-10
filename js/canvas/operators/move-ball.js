import game from "../../game.js";
import ball from "../objects/ball.js";
import bricks from "../objects/brick.js";
import paddle from "../objects/paddle.js";
import { renderScore } from '../../utils.js';
import { gameOver } from "../../gameOver.js";
import storageService from "../../storage-service.js";
import { brickBreakSound } from "../../audio/audio.js";
import { BRICK_COL_COUNT, BRICK_ROW_COUNT } from "../../constants.js";


export function moveBall() {

    

    if (game.started) {
        //смещение шарика каждый раз когда обновляется канвас
        ball.posX += ball.dX;
        ball.posY += ball.dY;
    }

    const canvas = document.querySelector('canvas');

    if (!canvas) {
        return
    }

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

    const arrayOfBricks = JSON.parse(storageService.get('arrayOfBricks'))

    //попадание в блоки
    if (arrayOfBricks) {
        arrayOfBricks.forEach(column => {
            column.forEach(item => {
                if (item.visible) {
                    if (
                        //левая и правая стороны каждого блок
                        ball.posX - ball.radius > item.x &&
                        ball.posX + ball.radius < item.x + item.width &&
                        //верх и низ каждого блока
                        ball.posY + ball.radius > item.y &&
                        ball.posY - ball.radius < item.y + item.height
                    ) {
                        ball.dY *= -1;

                        bricks.setHidden(item);
                        brickBreakSound();

                        game.increaseScore();

                        storageService.set('game', JSON.stringify(game))
                        storageService.set('arrayOfBricks', JSON.stringify(arrayOfBricks))
                        
                        renderScore();
                    }
                }
            })
        });
    }

    //если падает мимо платформы на нижнюю грань
    if (ball.posY + ball.radius > canvas.height) {
        gameOver();
    }

    //перерисовываем блоки когда разбиты все на экране
    if (game.score % (BRICK_COL_COUNT * BRICK_ROW_COUNT) === 0) {
        bricks.showAllBricks();
    }
    
    storageService.set('ball', JSON.stringify(ball));
}



