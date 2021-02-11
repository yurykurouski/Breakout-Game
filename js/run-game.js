import game from './game.js';
import { showBanner } from './utils.js';
import { navigateToUrl } from './routing.js';
import { playAudio } from './audio/audio.js';
import storageService from './storage-service.js';
import recordsList from './records/records.js'

function runGame(event) {
    event.preventDefault();

    // console.log(records);

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
    
    storageService.set('records', JSON.stringify(recordsList.records))


    //изменяем урл и отрисовываем главную страницу данной функцией
    navigateToUrl(`/main`);

    event.target.reset();
}

export default runGame;