import { playAudio } from './audio/audio.js';
import {renderPage} from './routing.js';


//загружаем страницу при инициализации
renderPage();


//обработчик события на изменения адресной строки
window.addEventListener('popstate', () => {
    renderPage();
})




