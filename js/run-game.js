import game from './game.js';
import renderPage from './render/render-pages.js';

function runGame(event) {
    //запись имени игрока
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get('name');
    game.state.userName = userName;

    if (!userName) {
        const errorBanner = document.querySelector('.error');
        errorBanner.classList.toggle('error-show');
        return
    }

    //изменяем адрес url
    window.history.pushState({}, null, window.location.origin + `/main`);
    renderPage();

    //вставляем в привествие имя игрока
    const greeteng = document.querySelector('h1');
    const newSpan = document.createElement('span');
    newSpan.innerText = userName;
    greeteng.appendChild(newSpan);

    event.target.reset();
}

export default runGame;