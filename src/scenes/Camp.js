import Phaser from 'phaser'

function t_coo(x) { return x*32; }

export default class Camp extends Phaser.Scene {

    constructor() { super("Camp") }
    
    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        //
        this.load.image('tiles', 'forest_tiles.png');
        this.load.tilemapTiledJSON('map', 'foret.json');
        this.load.image('tantes', 'tantes.png');
        this.load.spritesheet('objets', 'forest_tiles.png', {frameWidth: 32, frameHeight:32});
        this.load.spritesheet('bonhomme', 'bonhomme.png', {frameWidth: 64, frameHeight:64});
        this.load.audio('son_nature', ['son_nature.mp3']);
    }

    create() {
        this.addMap();
        this.addFire();
        this.addTentes();
        var bonhomme = CreatBonhomme.call(this)
    }

    addMap() {
        this.sound.add('son_nature').play();
        var map = this.make.tilemap({ key: 'map' });
        var tiles = map.addTilesetImage('forest_tiles', 'tiles');
        var layer = map.createStaticLayer(0, tiles, 0, 0);
        var layer2 = map.createStaticLayer(1, tiles, 0, 0);
    }

    addTentes() {
        var tantes = this.add.image(t_coo(20), t_coo(2), 'tantes');
        tantes.setOrigin(0).setInteractive();
        tantes.on('pointerover', function(pointer, localX, localY, event){
            tantes.setTint(0xC8C2AE); });
       tantes.on('pointerout', function(pointer, localX, localY, event){
           tantes.clearTint(); });
       tantes.on('pointerdown', function(pointer, localX, localY, event){
           console.log("Hallo Nokia");
       }, this);
    }

    addFire() {
        var feu = this.add.sprite(t_coo(8), t_coo(13), 'objets', 81).setOrigin(0);
        this.anims.create( {
            key: 'crepitement',
            frames: this.anims.generateFrameNumbers('objets', { start: 81, end: 83 }),
            frameRate: 10,
            repeat: -1
        });
        feu.anims.play('crepitement');
    }
    
}

var CreatBonhomme = function () {

    var bonhomme = this.add.sprite(t_coo(6), t_coo(2), 'bonhomme', 130).setOrigin(0);
    this.anims.create( {
        key: 'bottom',
        frames: this.anims.generateFrameNumbers('bonhomme', { start: 130, end: 138}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create( {
        key: 'bottom',
        frames: this.anims.generateFrameNumbers('bonhomme', { start: 130, end: 138}),
        frameRate: 10,
        repeat: -1
    });
    //bonhomme.anims.play('bottom');
    return bonhomme
}