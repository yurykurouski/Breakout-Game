import drawFieldsObjects from '../canvas/canvas.js';
import movePaddle from '../canvas/operators/move-paddle.js';
import mainTemplate from '../templates/pages/main-page.js';
import { showBanner } from '../utils.js';


function renderMainPage() {
    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;


    const greetingBanner = document.querySelector('.banner.banner-greeting');
    setTimeout(() => { showBanner(greetingBanner) }, 500);
    
    

    //update canvas and animation
    function updateCanvas() {

        movePaddle();

        drawFieldsObjects();  
        
        // requestAnimationFrame(updateCanvas);
    }

    updateCanvas();
}

export default renderMainPage;