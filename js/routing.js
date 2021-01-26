import renderInitialPage from './render/render-initial.js';
import renderMainPage from './render/render-main.js';
import { playAudio } from './audio/audio.js';


const INDEX_URL = ['/', '/index.html'];
const MAIN_URL = ['/main'];

export function renderPage() {
    const container = document.getElementById('container');
    const { pathname: currentUrl } = window.location;

    if (INDEX_URL.includes(currentUrl)) {
        renderInitialPage();
        return
    }

    
    if (MAIN_URL.includes(currentUrl)) {
        renderMainPage();
        return
    }
}

export function navigateToUrl(url) {
    window.history.pushState(
        {},
        url,
        window.location.origin + url
    );

    playAudio(window);
    renderPage();
}
