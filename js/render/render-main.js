import mainTemplate from '../templates/pages/main-page.js';
import { showBanner } from '../utils.js';


function renderMainPage() {
    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    setTimeout(() => { showBanner(greetingBanner) }, 500);

}

export default renderMainPage;