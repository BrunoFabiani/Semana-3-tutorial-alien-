export default class mainGame extends Phaser.Scene {

    constructor() {
        super({
            key: 'mainGame',
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
                    gravity: { y: 100 },
                    debug: false 
                }
            },
        })
        this.teclado = null;
        this.robotinik = null;
        this.fogo = null;
        this.turbo = null;

        
    }; 
    
    ativarTurbo() {
        this.turbo.setVisible(true);
    }
    
    semTurbo() {
        this.turbo.setVisible(false);
    }

    preload() {      
        this.load.image('green_hill', 'assets/green hill.png');
        this.load.image('robotinik', 'assets/robotinik.png');
        this.load.image('concreto', 'assets/blocoConcretoMario.png');
        this.load.image('turbo', 'assets/turbo.png');
        
    }
    create(){
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'green_hill');

        this.teclado = this.input.keyboard.createCursorKeys();
        this.robotinik = this.physics.add.sprite(100, 300, 'robotinik').setPushable(true);
        this.fogo = this.add.sprite(0, 0, 'turbo');
        fogo.setVisible(false);
     }
    update(){
        //Movimento para esquerda [ <- ]
        if (this.teclado.left.isDown) {
            this.robotinik.setVelocityX(-150); }
        
        //Movimento para direita [ -> ]
        else if (this.teclado.right.isDown) {
            this.robotinik.setVelocityX(150); }
        //Sem movimento horizontal [ x = 0]
        else {
            this.robotinik.setVelocityX(0);
        }

        //Movimento para cima [ ^ ]
        if (this.teclado.up.isDown) {
            this.robotinik.setVelocityY(-150); 
            this.ativarTurbo();
        }
        
        //Movimento para baixo [gravidade em y]
        else { this.semTurbo(); }
        //ação de gravidade  do jogo em y 
        turbo.setPosition(robotinik.x, robotinik.y + robotinik.height/2);
     }
    

};
