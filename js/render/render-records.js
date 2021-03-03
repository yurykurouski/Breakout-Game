import sounds from "../audio/audio-sounds.js";
import backToMain from "../go-to-main.js";
import renderRecords from "../records/render-records.js";
import recordsTemplate from "../templates/pages/records-page.js";

function renderRecordsPage() {

    const container = document.getElementById('container');
    container.innerHTML = recordsTemplate;

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', backToMain);

    renderRecords(10);

    sounds.renderPageSound();


}


export default renderRecordsPage;