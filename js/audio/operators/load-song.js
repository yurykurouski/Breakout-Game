const cover = document.getElementById('cover');
const audio = document.getElementById('audio');
const tittle = document.getElementById('tittle');


export default function loadSong(song) {
    tittle.innerText = song;
    audio.src = `./audio-files/${song}.mp3`;
    cover.src = `./audio-files/labels/${song}.jpg`;
}