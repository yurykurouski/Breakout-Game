const progress = document.getElementById('progress');


export default function updateProgressLine(event) {
    const { duration, currentTime } = event.srcElement;

    const progressPercents = (currentTime / duration) * 100;

    progress.style.width = `${progressPercents}%`;
}
