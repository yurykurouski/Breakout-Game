import { playAudio } from './audio/audio.js';
import {renderPage} from './routing.js';


//загружаем страницу при инициализации
renderPage();


//обработчик события на изменения адресной строки
window.addEventListener('popstate', () => {
    renderPage();
})





const musicContainer = document.getElementById('music_container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress_container');

const tittle = document.getElementById('tittle');
const cover = document.getElementById('cover');

//названия песен
const songs = ['DJShadow-This-Time', 'FaltyDL-Hip-Love', 'Kalson-Power'];

let songIndex = 1;

loadSong(songs[songIndex]);



playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})



function loadSong(song) {
    tittle.innerText = song;
    audio.src = `./audio-files/${song}.mp3`;
    cover.src = `./audio-files/labels/${song}.jpg`;
}


function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

