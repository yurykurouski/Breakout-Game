class Game {
    constructor() {
        this.started = false;
        this.currentPlayer = null;
        this.score = 0;
        this.gameOver = false;
        this.paused = false;
    }

    pausegame() {
        this.paused = true;
    }

    resumeGame() {
        this.paused = false;
    }


    setCurrentUser(userName) {
        this.currentPlayer = userName;
    }

    deleteCurrentUser() {
        this.currentPlayer = null;
    }

    increaseScore() {
        this.score += 1;
    }

    resetScore() {
        this.score = 0;
    }

    startGame() {
        this.paused = false;
        this.started = true;
        this.gameOver = false;
    }

    endGame() {
        this.started = false;
        this.gameOver = true;
    }
}


const game = new Game();

export default game;