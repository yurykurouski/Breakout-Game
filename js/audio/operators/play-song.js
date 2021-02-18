const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const musicContainer = document.getElementById('music_container');


export default function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}