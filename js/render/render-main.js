import drawFieldsObjects from '../canvas/canvas.js';
import {movePaddle, startMovingPaddle, stopMovingPaddle} from '../canvas/operators/move-paddle.js';
import mainTemplate from '../templates/pages/main-page.js';
import { showBanner } from '../utils.js';
import game from '../game.js';
import storageService from '../storage-service.js';
import paddle from '../canvas/objects/paddle.js';
import clearCanvas from '../canvas/clear-canvas.js';


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
    function updateCanvas() {

        movePaddle();

        drawFieldsObjects(); 
        
        requestAnimationFrame(updateCanvas);
    }

    updateCanvas();

    //ивенты на управление платформой
    document.addEventListener('keydown', startMovingPaddle);
    document.addEventListener('keyup', stopMovingPaddle);
}

export default renderMainPage;