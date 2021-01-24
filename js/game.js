class Game {
    constructor(userName) {
        this.state = {
            userName: userName,
            started: false,
        }
    }

}

const game = new Game();

export default game;