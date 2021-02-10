import { setCheckedInputs, showBanner } from "../utils.js";
import { playAudio } from "../audio/audio.js";
import storageService from "../storage-service.js";
import settingsTemplate from "../templates/pages/settings-page.js";
import backToMain from "./../go-to-main.js"
import ball from "../canvas/objects/ball.js";
import { INITIAL_BALL_dX } from "../constants.js";
import paddle from "../canvas/objects/paddle.js";
import { navigateToUrl } from "../routing.js";
import { moveBall } from "../canvas/operators/move-ball.js";
import { movePaddle } from "../canvas/operators/move-paddle.js";



function renderSettingsPage() {

    const game = JSON.parse(storageService.get('game'));

    const container = document.getElementById('container');
    container.innerHTML = settingsTemplate;


    const infoBanner = document.querySelector('.banner.banner-info');
    infoBanner.innerHTML = `${game.currentPlayer}, set difficulty`;

    setTimeout(() => { showBanner(infoBanner) }, 500);

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', backToMain);

    const settingsForm = document.querySelector('.settings-from');
    settingsForm.addEventListener('submit', submitSettings);


    //делаем, чтобы при нажатии на настройки отображались текущие установки скорости
    // и ширины платформы
    const speedInputs = Array.from(document.querySelectorAll('.speed-settings-fields input'));
    const paddleInputs = Array.from(document.querySelectorAll('.paddle-settings-fields input'));
    setCheckedInputs(paddleInputs, paddle.width)
    setCheckedInputs(speedInputs, ball.dX || ball.tempDX)


    playAudio(window);

}

function submitSettings(event) {

    event.preventDefault();

    const formData = new FormData(event.target);
    const ballSpeed = formData.get('speed');
    const paddleSize = formData.get('size');

    ball.setSpeed(ballSpeed);
    paddle.setWidth(paddleSize);
    
    
    paddle.setInitialPaddlePos()


    navigateToUrl(`/main`);

    event.target.reset();
}

export default renderSettingsPage;