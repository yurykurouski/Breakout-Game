import game from '../game.js';
import runGame from '../run-game.js';
import sounds from '../audio/audio-sounds.js';
import bricks from '../canvas/objects/brick.js';
import storageService from '../storage-service.js';
import { toggleDisabled, changeColorMode } from '../utils.js';
import startTemplate from '../templates/pages/initial-page.js';


function renderInitialPage() {
    const container = document.getElementById('container');
    container.innerHTML = startTemplate;

    game.resetGame();

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
        sounds.showRulesSound();
    })

    rulesCloseBtn.addEventListener('click', () => {
        rules.classList.remove('show');
        toggleDisabled(runGameFormInput, runGameFormSubmit);
        sounds.showRulesSound();
    })


    //вешаем обрабочик событий для смены светового режима
    const colorModeBtn = document.getElementById('color-mode-btn');
    colorModeBtn.addEventListener('click', () => {
        changeColorMode(),
        sounds.switchColorThemeSound();
    })


    //обработчик событий на кнопку run
    //запускаем игру
    const userNameForm = document.getElementById('run-game-form');
    userNameForm.addEventListener('submit', runGame);


    //обработчик событий на включение музыки
    sounds.renderPageSound();
}

export default renderInitialPage;