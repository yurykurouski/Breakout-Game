const audio = document.getElementById('audio');


export default function setProgressLine(event) {
    const width = this.clientWidth;

    const clickPosX = event.offsetX;

    const duration = audio.duration;

    audio.currentTime = (clickPosX / width) * duration;
}