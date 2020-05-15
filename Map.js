function t_coo(x) { return x*32; }

class Map extends Phaser.Scene {

    constructor() { super("Map") }
    
    preload() {
        this.load.image('tiles', 'assets/forest_tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/foret.json');
        this.load.image('tantes', 'assets/tantes.png');
        this.load.spritesheet('objets', 'assets/forest_tiles.png', {frameWidth: 32, frameHeight:32});

        this.load.audio('son_nature', ['assets/son_nature.mp3']);
    }

    create() {
        this.sound.add('son_nature').play();
        var map = this.make.tilemap({ key: 'map' });
        var tiles = map.addTilesetImage('forest_tiles', 'tiles');
        var layer = map.createStaticLayer(0, tiles, 0, 0);
        var layer2 = map.createStaticLayer(1, tiles, 0, 0);
        //var layer3 = map.createStaticLayer(2, tiles, 0, 0);
        //console.log(t_coo(3))
        var tantes = this.add.image(t_coo(20), t_coo(2), 'tantes');
        tantes.setOrigin(0).setInteractive();
        
        var feu = this.add.sprite(t_coo(8), t_coo(13), 'objets', 81);
        this.anims.create( {
            key: 'crepitement',
            frames: this.anims.generateFrameNumbers('objets', { start: 81, end: 83, first: 81 }),
            frameRate: 10,
            repeat: -1
        });
        feu.anims.play('crepitement');


        this.input.once('pointerup', function () {
            this.scene.start('Tante');
        }, this);

        this.input.on('pointerover', function (event, gameObjects) {
            gameObjects[0].setTint(0xC8C2AE);
        });

        this.input.on('pointerout', function (event, gameObjects) {
            gameObjects[0].clearTint();
            console.log("hello")
        });
    }
}