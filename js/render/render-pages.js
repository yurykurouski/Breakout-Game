import startTemplate from '../templates/pages/initial-page.js';
import mainTemplate from '../templates/pages/main-page.js';



function renderPage() {
    const container = document.getElementById('container');
    const currenrURL = window.location.pathname;
    if (currenrURL === '/') {
        container.innerHTML = startTemplate;
    }

    if (currenrURL === '/main') {
        container.innerHTML = mainTemplate;
    }
}

export default renderPage;