class intro extends Phaser.Scene {

    constructor() {
        super('intro');
    }

    preload(){

    }

    create(){

        //create text object
        this.textObject = this.add.text(
            290, //x
            300,//y
            "Crop Circles", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.textObject = this.add.text(
            300, //x
            400,//y
            "(Click Anywhere to Continue)", //text
            {
                font: "15px Arial",
                color: "#ffffff",
            } //style
        );

        this.input.once('pointerdown', function() {
            this.scene.start("Level1")
        }, this)
    }

    update(){}
}

class Level1 extends Phaser.Scene {

    constructor() {
        super('Level1');
    }

    player;
    platforms;
    cursors;

    preload(){
        this.load.path = './asset/';
        this.load.image('grass', 'grass.png');
        this.load.image('man', 'man.png');
        this.load.spritesheet('man', 'man.png', { frameWidth: 32, frameHeight: 48 });

    }

    create(){

        // code from example:
        // https://github.com/photonstorm/phaser3-examples/
        // blob/master/public/src/physics/arcade/basic%20platform.js

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(300, 100, 'grass').setScale(2).refreshBody();

        this.player = this.physics.add.sprite(400, 300, 'man');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.platforms);

        //this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

    }

    update(){

        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);
        }
        else
        {
            this.player.setVelocityX(0);
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "0x87CEEB",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 300},
          debug: false,
        },
    },
    scene: [intro, Level1] 
};


let game = new Phaser.Game(config);

