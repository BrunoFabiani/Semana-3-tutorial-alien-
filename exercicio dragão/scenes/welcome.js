class Welcome extends Phaser.Scene {

    // Construtor da cena
    constructor() {
        super({
            key: 'Welcome',
            scale: {
                mode: Phaser.Scale.FIT
            },
            autoCenter: Phaser.Scale.CENTER,
            width: 400, //largura da tela do jogo
            height: 600, //altura da tela do jogo
            backgroundColor: '#39addd',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 10 },
                    debug: false 
                }
            },
        });
    }
    
}
