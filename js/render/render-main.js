import { showBanner } from '../utils.js';
import updateCanvas from './update-canvas.js';
import storageService from '../storage-service.js';
import mainTemplate from '../templates/pages/main-page.js';
import {startMovingPaddle, stopMovingPaddle} from '../canvas/operators/move-paddle.js';


function renderMainPage() {
    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;

    const game =  JSON.parse(storageService.get('game'));

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${game.currentPlayer}`
    const nameSpan = document.querySelector('.payer_name');
    nameSpan.innerHTML = `Name: ${game.currentPlayer}`

    // const greetingBanner = document.querySelector('.banner.banner-greeting');
    setTimeout(() => { showBanner(greetingBanner) }, 500);
    

    //update canvas and animation
    updateCanvas()

    
    //ивенты на управление платформой
    document.addEventListener('keydown', startMovingPaddle);
    document.addEventListener('keyup', stopMovingPaddle);
}

export default renderMainPage;