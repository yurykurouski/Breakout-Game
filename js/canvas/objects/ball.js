import storageService from '../../storage-service.js'

class Ball {
    constructor() {
        this.posX = 300;
        this.posY = 225;
        this.radius = 10;
        this.speedX = 4;
        this.speedY = -4;
    }
}

const ball = new Ball();

storageService.set('ball', JSON.stringify(ball))

export default ball;