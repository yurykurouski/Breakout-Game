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
const songs = ['techno2', 'techno1', 'techno'];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
    tittle.innerText = song;
    audio.src = `./audio-files/${song}.mp3`;
    cover.src = `./audio-files/labels/${song}.jpg`;
}
