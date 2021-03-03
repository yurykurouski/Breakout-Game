import { gameOver } from '../gameOver.js';
import sounds from '../audio/audio-sounds.js';
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
import goToInitial from '../go-to-initial.js';
import ball from '../canvas/objects/ball.js';
import goToRecords from '../go-to-records.js';



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
    var intId = setInterval(() => { updateCanvas() }, 18);

    //ивенты на управление платформой
    document.addEventListener('keydown', startMovingPaddle);
    document.addEventListener('keyup', stopMovingPaddle);

    //старт на ентер
    document.addEventListener('keydown', startGame )
    
    //пауза на пробел
    document.addEventListener('keydown', toogleBallSpeed )

    //рестарт на esc
    document.addEventListener('keydown', gameOver)

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

    //кнопка назад (выход)
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener(
        'click',
        function () { goToInitial(intId) } ,
        false
    );

    //кнопка рекорды
    const recordsBtn = document.getElementById('records-btn');
    recordsBtn.addEventListener(
        'click',
        function () { goToRecords(intId) } ,
        false
    );

   
    if (!game.started) {
        toggleDisabled(pauseBtn, startGameBtn, restartGameBtn);
    }

    sounds.renderPageSound();
}




export default renderMainPage;