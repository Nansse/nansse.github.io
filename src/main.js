import Phaser from 'phaser'
import Camp from './scenes/Camp'
import Menu from './scenes/Menu'
import Login from './scenes/Login'


const config = {
	type: Phaser.AUTO,
	width: 1088,
	height: 608,
	scene: [Login, Camp],
	dom: {
        createContainer: true
    }
}

export default new Phaser.Game(config)
