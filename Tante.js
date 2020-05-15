class Tante extends Phaser.Scene {
    
    constructor() {
        super("Tante")
        //this.add.text(20, 20, "Loading...")
        console.log("Haloiuu")
    }

    preload() {
    }

    create() {
        this.add.text(20, 20, "Loading...")
        console.log("Haloiuu")
        this.cameras.main.setBackgroundColor('rgba(255,0,0,0.4)');
    }
}