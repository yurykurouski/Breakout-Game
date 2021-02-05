import { showBanner, toggleDisabled } from '../utils.js';
import updateCanvas from './update-canvas.js';
import storageService from '../storage-service.js';
import mainTemplate from '../templates/pages/main-page.js';
import {startMovingPaddle, stopMovingPaddle} from '../canvas/operators/move-paddle.js';
import ball from '../canvas/objects/ball.js';
import game from '../game.js';
import paddle from '../canvas/objects/paddle.js';


function renderMainPage() {
    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;

    const game =  JSON.parse(storageService.get('game'));

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${game.currentPlayer}`
    const nameSpan = document.querySelector('.payer_name');
    nameSpan.innerHTML = `Name: ${game.currentPlayer}`

    // const greetingBanner = document.querySelector('.banner.banner-greeting');
    setTimeout(() => { showBanner(greetingBanner) }, 500);
    

    //update canvas and animation
    updateCanvas()

    
    //ивенты на управление платформой
    document.addEventListener('keydown', startMovingPaddle);
    document.addEventListener('keyup', stopMovingPaddle);


    //кнопка пауза
    const pauseBtn = document.getElementById('pause-game-btn');
    const startGameBtn = document.getElementById('start-game-btn');

    if (!game.started) {
        toggleDisabled(pauseBtn);
        toggleDisabled(startGameBtn);
    }
    
    pauseBtn.addEventListener('click', toogleBallSpeed);

    //кнопка старт
    // const startGameBtn = document.getElementById('start-game-btn');
    startGameBtn.addEventListener('click', startGame);

    
    
}

function toogleBallSpeed() {

    const pauseBtn = document.getElementById('pause-game-btn');

    if (ball.dX && ball.dY ) {
        ball.stopBall();
        game.pausegame();
        storageService.set('game', JSON.stringify(game))

        pauseBtn.innerHTML = 'Resume';
        
    } else {
        ball.resumeBallSpeed();
        game.resumeGame();
        storageService.set('game', JSON.stringify(game))

        pauseBtn.innerHTML = 'Pause'
    }
    
}

function startGame() {
    const pauseBtn = document.getElementById('pause-game-btn');
    toggleDisabled(pauseBtn);
    const startGameBtn = document.getElementById('start-game-btn');
    toggleDisabled(startGameBtn);

    game.startGame();
    paddle.setInitialPaddlePos();

    storageService.set('game', JSON.stringify(game))
}


export default renderMainPage;