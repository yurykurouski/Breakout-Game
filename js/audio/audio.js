export function playAudio(btn) {
    const rulesBtn = document.getElementById('rules-btn');
    const rulesCloseBtn = document.getElementById('close-rules-btn');
    const colorModeBtn = document.getElementById('color-mode-btn');


    const myAudio = new Audio;

    if 
    (
        btn === rulesBtn ||
        btn === rulesCloseBtn
    ) {
        myAudio.src = "../audio/press-buttons/rules-btn.wav";
        myAudio.play();
    }

    if 
    (btn === colorModeBtn) {
        myAudio.src = "../audio/press-buttons/turn-light-btn.mp3";
        myAudio.play();
    }

    //for errors
    if 
    (!btn) {
        myAudio.src = "../audio/press-buttons/error.mp3";
        myAudio.play();
    }

    //for popstate
    if 
    (btn === window) {
        myAudio.src = "../audio/press-buttons/popstate.mp3";
        myAudio.play();
    }
}