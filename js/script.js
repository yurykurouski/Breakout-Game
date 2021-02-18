import { playAudio } from './audio/audio-sounds.js';
import { renderPage } from './routing.js';
import { SONGS_LIST, START_SONG_INDEX } from './constants.js'

import loadSong from './audio/operators/load-song.js';
import playSong from './audio/operators/play-song.js';
import pauseSong from './audio/operators/pause-song.js';
// import prevSong from './audio/operators/prev-song.js';
// import nextSong from './audio/operators/next-song.js';
import updateProgressLine from './audio/update-progress.js';
import setProgressLine from './audio/operators/set-progress.js';


//загружаем страницу при инициализации
renderPage();


//обработчик события на изменения адресной строки
window.addEventListener('popstate', () => {
    renderPage();
})



//элементы музыкального плеера
const musicContainer = document.getElementById('music_container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress_container');


export let songIndex = 0;

//pзагружаем первую песню
loadSong(SONGS_LIST[songIndex]);


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong) ;
audio.addEventListener('timeupdate', updateProgressLine);
progressContainer.addEventListener('click', setProgressLine);
audio.addEventListener('ended', nextSong);


function nextSong() {
    songIndex++;

    if (songIndex > SONGS_LIST.length - 1) {
        songIndex = 0;
    }

    loadSong(SONGS_LIST[songIndex]);

    playSong();
}



function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = SONGS_LIST.length - 1;
    }

    loadSong(SONGS_LIST[songIndex]);

    playSong();
}











