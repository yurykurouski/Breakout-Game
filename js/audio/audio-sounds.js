export function playAudio(btn) {
    const rulesBtn = document.getElementById('rules-btn');
    const rulesCloseBtn = document.getElementById('close-rules-btn');
    const colorModeBtn = document.getElementById('color-mode-btn');
    

    if 
    (
        btn === rulesBtn ||
        btn === rulesCloseBtn
    ) {
        const myAudio = new Audio;
        myAudio.src = "../audio-files/rules-btn.wav";
        myAudio.play();
    }

    if (btn === colorModeBtn) {
        const myAudio = new Audio;
        myAudio.src = "../audio-files/turn-light-btn.mp3";
        myAudio.play();
    }

    //for errors
    if (!btn) {
        const myAudio = new Audio;
        myAudio.src = "../audio-files/error.mp3";
        myAudio.play();
    }

    //for popstate
    if (btn === window) {
        const myAudio = new Audio;
        myAudio.src = "../audio-files/popstate.mp3";
        myAudio.play();
    }

}

export function brickBreakSound() {
    const myAudio = new Audio;
    myAudio.src = "../audio-files/brick-broken.mp3";
    myAudio.play();
}

export function paddleMove() {
    
    const myAudio = new Audio;
    myAudio.src = "../audio-files/paddle-move.mp3";
    myAudio.play();
}

export function gameOverSound() {
    const myAudio = new Audio;
    myAudio.src = "../audio-files/game-over.mp3";
    myAudio.play();
}
