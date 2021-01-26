import { playAudio } from './audio/audio.js';
import {navigateToUrl} from './routing.js';
import { showBanner } from './utils.js';


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
        record: 0,
    }

    //изменяем урл и отрисовываем главную страницу данной функцией
    navigateToUrl(`/main`)

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${newPlayer.userName}`

    event.target.reset();
}

export default runGame;