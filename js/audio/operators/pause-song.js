
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const musicContainer = document.getElementById('music_container');


export default function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}