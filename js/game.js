import ball from "./canvas/objects/ball.js";
import paddle from "./canvas/objects/paddle.js";
import backToMain from "./go-to-main.js";

class Game {
    constructor() {
        this.started = false;
        this.currentPlayer = null;
        this.score = 0;
        this.gameOver = false;
        this.paused = false;
    }

    pauseGame() {
        this.paused = true;
    }

    resetGame() {
        this.started = false;
        this.currentPlayer = null;
        this.score = 0;
        this.gameOver = false;
        this.paused = false;
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

        if (Math.abs(ball.dX) === 4 && (paddle.width === 80)) {
            this.score += 1;
            return
        }

        if (Math.abs(ball.dX) === 6 && (paddle.width === 80)) {
            this.score += 2;
            return
        }

        if (Math.abs(ball.dX) === 8 && (paddle.width === 80)) {
            this.score += 3;
            return
        }

        if (Math.abs(ball.dX) === 4 && (paddle.width === 60)) {
            this.score += 2;
            return
        }

        if (Math.abs(ball.dX) === 6 && (paddle.width === 60)) {
            this.score += 4;
            return
        }

        if (Math.abs(ball.dX) === 8 && (paddle.width === 60)) {
            this.score += 6;
            return
        }

        if (Math.abs(ball.dX) === 4 && (paddle.width === 40)) {
            this.score += 3;
            return
        }

        if (Math.abs(ball.dX) === 6 && (paddle.width === 40)) {
            this.score += 6;
            return
        }

        if (Math.abs(ball.dX) === 8 && (paddle.width === 40)) {
            this.score += 9;
            return
        }

        
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
        this.paused = false;
        this.started = false;
        this.gameOver = true;
    }
}


const game = new Game();

export default game;