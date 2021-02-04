import { playAudio } from './audio/audio.js';
import {navigateToUrl} from './routing.js';
import storageService from './storage-service.js';
import game from './game.js';
import { showBanner } from './utils.js';

import { INITIAL_ZERO_RECORD } from './constants.js';



function runGame(event) {
    //запись имени игрока
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get('name');

    //выводим подсказку если не введено имя пользователя и нажат run
    if (!userName) {
        const errorBanner = document.querySelector('.banner');
        playAudio();//eror sound
        showBanner(errorBanner);
        return
    }

    game.setCurrentUser(userName);
    storageService.set('game', JSON.stringify(game))

    //изменяем урл и отрисовываем главную страницу данной функцией
    navigateToUrl(`/main`);


    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${game.currentPlayer}`

    
    event.target.reset();
}

export default runGame;