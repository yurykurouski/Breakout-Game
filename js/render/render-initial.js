import { playAudio } from '../audio/audio.js';
import bricks from '../canvas/objects/brick.js';
import game from '../game.js';
import runGame from '../run-game.js';
import storageService from '../storage-service.js';
import startTemplate from '../templates/pages/initial-page.js';
import { toggleDisabled, changeColorMode } from '../utils.js';



function renderInitialPage() {
    const container = document.getElementById('container');
    container.innerHTML = startTemplate;

    game.currentPlayer = null;
    storageService.set('game', JSON.stringify(game))

    bricks.clearField();



    //обработчики собыйти на кнопки открыть/закрыть правила
    const rulesBtn = document.getElementById('rules-btn');
    const rulesCloseBtn = document.getElementById('close-rules-btn');
    const rules = document.getElementById('rules');
    const runGameFormInput = document.querySelector('#run-game-form input');
    const runGameFormSubmit = document.querySelector('#run-game-form button');

    rulesBtn.addEventListener('click', () => {
        rules.classList.add('show');
        toggleDisabled(runGameFormInput, runGameFormSubmit);
        playAudio(rulesBtn);
    })

    rulesCloseBtn.addEventListener('click', () => {
        rules.classList.remove('show');
        toggleDisabled(runGameFormInput, runGameFormSubmit);
        playAudio(rulesBtn);
    })


    //вешаем обрабочик событий для смены светового режима
    const colorModeBtn = document.getElementById('color-mode-btn');
    colorModeBtn.addEventListener('click', () => {
        changeColorMode(),
        playAudio(colorModeBtn)
    })


    //обработчик событий на кнопку run
    //запускаем игру
    const userNameForm = document.getElementById('run-game-form');
    userNameForm.addEventListener('submit', runGame);
}

export default renderInitialPage;