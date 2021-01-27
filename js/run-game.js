import { playAudio } from './audio/audio.js';
import {navigateToUrl} from './routing.js';
import storageService from './storage-service.js';
import userList from './users.js';
import { showBanner } from './utils.js';

import {INITIAL_ZERO_RECORD} from './constants.js';


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

    const newPlayer = {
        userName: userName,
        record: INITIAL_ZERO_RECORD,
    }


    userList.add(newPlayer);

    //изменяем урл и отрисовываем главную страницу данной функцией
    navigateToUrl(`/main`)

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${newPlayer.userName}`

     storageService.set('users', JSON.stringify(userList.users))
    event.target.reset();
}

export default runGame;