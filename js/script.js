import renderPage from './render/render-pages.js';
import startTemplate from './templates/pages/initial-page.js';
import mainTemplate from './templates/pages/main-page.js';
import runGame from './run-game.js'



renderPage();


const userNameForm = document.getElementById('run-game-form');
userNameForm.addEventListener('submit', runGame);



window.addEventListener('popstate', () => {
    const container = document.getElementById('container');
    if (window.location.pathname === '/') {
        container.innerHTML = startTemplate;
    }

    if (window.location.pathname === '/main') {
        container.innerHTML = mainTemplate;
    }
})



const rulesBtn = document.getElementById('rules-btn');
const rulesCloseBtn = document.getElementById('close-rules-btn');
const rules = document.getElementById('rules');

rulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
})

rulesCloseBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})

