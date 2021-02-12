import { playAudio } from "../audio/audio.js";
import backToMain from "../go-to-main.js";
import recordsTemplate from "../templates/pages/records-page.js";

function renderRecordsPage() {

    const container = document.getElementById('container');
    container.innerHTML = recordsTemplate;

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', backToMain);

    playAudio(window);


}


export default renderRecordsPage;