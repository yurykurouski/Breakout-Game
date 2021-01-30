import storageService from '../../storage-service.js'

class Brick {
    constructor() {
        this.width = 70;
        this.height = 20;
        this.padding = 10;
        this.offsetX = 25;
        this.offsetY = 50;
        this.visible = true;
    }

}

const brickInfo = new Brick();

storageService.set('brickInfo', JSON.stringify(brickInfo))

export default brickInfo;