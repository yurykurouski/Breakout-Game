import { renderPage } from './routing.js';
import musicPlayer from './audio/music-player.js';


//загружаем страницу при инициализации
renderPage();


//обработчик события на изменения адресной строки
window.addEventListener('popstate', () => {
    renderPage();
})



//элементы музыкального плеера
const musicContainer = document.getElementById('music_container');
const progressContainer = document.getElementById('progress_container');
const volumeSizeContainer = document.getElementById('volume_container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeBtn = document.getElementById('volume-btn');

const audio = document.getElementById('audio');

const currentSong = musicPlayer.currentSongIndex;

//ивенты музыкального плеера
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    isPlaying ? musicPlayer.pauseSong() : musicPlayer.playSong();
})

prevBtn.addEventListener(
    'click',
    function () { musicPlayer.prevSong(currentSong) }
);

nextBtn.addEventListener(
    'click',
    function () { musicPlayer.nextSong(currentSong) }
);

audio.addEventListener('timeupdate', musicPlayer.updateProgressLine);



progressContainer.addEventListener('click', musicPlayer.setProgressLine);

audio.addEventListener(
    'ended',
    function () { musicPlayer.nextSong(currentSong) }
);

volumeBtn.addEventListener('click', musicPlayer.togleVolume)

volumeSizeContainer.addEventListener('click', musicPlayer.setVolumeValue)









