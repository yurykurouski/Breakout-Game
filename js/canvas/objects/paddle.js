import storageService from '../../storage-service.js'

class Paddle {
    constructor() {
        this.posX = 260;
        this.posY = 430;
        this.width = 80;
        this.height = 10;
        this.speedY = 8;
        this.speedX = 0;
    }
}

const paddle = new Paddle();

storageService.set('paddle', JSON.stringify(paddle))

export default paddle;