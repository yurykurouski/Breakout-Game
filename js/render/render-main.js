import { gameOver } from '../gameOver.js';
import { playAudio } from '../audio/audio.js';
import updateCanvas from './update-canvas.js';
import storageService from '../storage-service.js';
import renderInitialPage from './render-initial.js';
import { showBanner, toggleDisabled } from '../utils.js';
import startGame from '../canvas/operators/start-game.js';
import mainTemplate from '../templates/pages/main-page.js';
import toogleBallSpeed from '../canvas/operators/toogle-ball-speed.js';
import {startMovingPaddle, stopMovingPaddle} from '../canvas/operators/move-paddle.js';
import goToSettings from '../go-to-settings.js';



function renderMainPage() {

    const game = JSON.parse(storageService.get('game'));
    
    if (!game.currentPlayer) {
        renderInitialPage();
        return
    }

    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${game.currentPlayer ? game.currentPlayer : "anonymous"}`

    const nameSpan = document.querySelector('.payer_name');
    nameSpan.innerHTML = `Name: ${game.currentPlayer ? game.currentPlayer : "anonymous"}`

    // const greetingBanner = document.querySelector('.banner.banner-greeting');
    setTimeout(() => { showBanner(greetingBanner) }, 500);
    
    //update canvas and animation
    updateCanvas()

    
    //ивенты на управление платформой
    document.addEventListener('keydown', startMovingPaddle);
    document.addEventListener('keyup', stopMovingPaddle);


    //кнопка пауза
    const pauseBtn = document.getElementById('pause-game-btn');
    pauseBtn.addEventListener('click', toogleBallSpeed);

    //кнопка старт
    const startGameBtn = document.getElementById('start-game-btn');
    startGameBtn.addEventListener('click', startGame);

    //кнопка рестарт
    const restartGameBtn = document.getElementById('restart-game-btn');
    restartGameBtn.addEventListener('click', gameOver);

    const settingsBtn = document.getElementById('settings-btn');
    settingsBtn.addEventListener('click', goToSettings);
   
    if (!game.started) {
        toggleDisabled(pauseBtn, startGameBtn, restartGameBtn);
    }

    playAudio(window);
}




export default renderMainPage;