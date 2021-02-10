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
import game from '../game.js';



function renderMainPage() {

    if (!game.currentPlayer) {
        renderInitialPage();
        return
    }

    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${game.currentPlayer}`

    const nameSpan = document.querySelector('.payer_name');
    nameSpan.innerHTML = `Name: ${game.currentPlayer}`

    // const greetingBanner = document.querySelector('.banner.banner-greeting');
    setTimeout(() => { showBanner(greetingBanner) }, 500);
    

    //update canvas and animation
    // updateCanvas()
    var intId = setInterval(() => { updateCanvas() }, 18);

    
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

    //кнопка настройки
    const settingsBtn = document.getElementById('settings-btn');
    settingsBtn.addEventListener(
        'click',
        function () { goToSettings(intId) },
        false
    );

    //кнопка рекорды
    const recordsBtn = document.getElementById('records-btn');
    const recordsCloseBtn = document.getElementById('close-btn');
    const recordsWrapper = document.querySelector('.records-wrapper')

    recordsBtn.addEventListener('click', () => {
        recordsWrapper.classList.add('show');
    })

    recordsCloseBtn.addEventListener('click', () => {
        recordsWrapper.classList.remove('show');
    })


   
    if (!game.started) {
        toggleDisabled(pauseBtn, startGameBtn, restartGameBtn);
    }

    playAudio(window);
}




export default renderMainPage;