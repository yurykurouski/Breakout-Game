import renderPage from './render/render-pages.js';
import runGame from './run-game.js'


//загружаем страницу при инициализации
renderPage();

//обработчик событий на кнопку run
//запускаем игру
const userNameForm = document.getElementById('run-game-form');
userNameForm.addEventListener('submit', runGame);


//обработчик события на изменения адресной строки
window.addEventListener('popstate', () => {
    renderPage();
})



//обработчики собыйти на кнопки открыть/закрыть правила
const rulesBtn = document.getElementById('rules-btn');
const rulesCloseBtn = document.getElementById('close-rules-btn');
const rules = document.getElementById('rules');

rulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
})

rulesCloseBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})

