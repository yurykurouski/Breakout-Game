import { showBanner } from "../utils.js";
import { playAudio } from "../audio/audio.js";
import storageService from "../storage-service.js";
import settingsTemplate from "../templates/pages/settings-page.js";



function renderSettingsPage() {

    const game = JSON.parse(storageService.get('game'));

    const container = document.getElementById('container');
    container.innerHTML = settingsTemplate;


    const infoBanner = document.querySelector('.banner.banner-info');
    infoBanner.innerHTML = `${game.currentPlayer}, set difficulty`;

    setTimeout(() => { showBanner(infoBanner) }, 500);




    playAudio(window);

}

export default renderSettingsPage;