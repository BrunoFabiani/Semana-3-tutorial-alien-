class mainGame extends Phaser.Scene {

    constructor() {
        super({
            key: 'mainGame',
            physics: {
                arcade: {
                 debug: false,
                 gravity: { y: 300 }
                } 
             }
        })
}
}