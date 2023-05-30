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
    laser;

    preload(){
        this.load.path = './asset/';
        this.load.image('grass', 'grass.png');
        this.load.image('man', 'man.png');
        this.load.image('tree1', 'tree1.png');
        this.load.image('tree2', 'tree2.png');
        this.load.image('laser', 'laser.png');

    }

    create(){

        // code from example:
        // https://github.com/photonstorm/phaser3-examples/
        // blob/master/public/src/physics/arcade/basic%20platform.js




        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(320, 115, 'grass').setScale(2).refreshBody();

        // Left Trees
        this.imageObject = this.add.image(
            100,//x
            415,//y
            'tree1',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            20,//x
            420,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize

        // Right Trees
        this.imageObject = this.add.image(
            740,//x
            415,//y
            'tree1',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            680,//x
            415,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            760,//x
            420,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize

        // Player Movement Code

        this.player = this.physics.add.sprite(0, 100, 'man').setScale(0.65);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;

        // Anvil Dropping Code
 
        let randomNum = Math.floor(Math.random() * 650) + 50;
        let x = 0;
        
        this.time.addEvent({
            delay: 1500,
            callback: ()=>{
                this.laser = this.physics.add.sprite(randomNum, 20, 'laser').setScale(1);
                this.laser.setBounce(0.2);
                this.laser.setCollideWorldBounds(false);
                this.laser.onWorldBounds = true;
                randomNum = Math.floor(Math.random() * 650) + 50;
                x++;
                if ( x == 20 ) {
                    this.scene.start("Complete1");
                }
                
            },
            loop: true,
        })

        this.physics.add.collider(this.player, this.platforms);
        this.cursors = this.input.keyboard.createCursorKeys();


        

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

        //this.physics.add.collider(player, laser, endGame());
    }

    endGame() {
        this.scene.start("intro")
    }
}

class Complete1 extends Phaser.Scene {

    constructor() {
        super('Complete1');
    }

    preload(){

    }

    create(){

        //create text object
        this.textObject = this.add.text(
            240, //x
            300,//y
            "Level 1 Complete!", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.textObject = this.add.text(
            320, //x
            400,//y
            "(Click for Next Level)", //text
            {
                font: "15px Arial",
                color: "#ffffff",
            } //style
        );

        this.input.once('pointerdown', function() {
            this.scene.start("Level2")
        }, this)
    }

    update(){}
}

class Level2 extends Phaser.Scene {

    constructor() {
        super('Level2');
    }

    player;
    platforms;
    cursors;
    laser;

    preload(){
        this.load.path = './asset/';
        this.load.image('grass', 'grass.png');
        this.load.image('man', 'man.png');
        this.load.image('tree1', 'tree1.png');
        this.load.image('tree2', 'tree2.png');
        this.load.image('laser', 'laser.png');

    }

    create(){

        // code from example:
        // https://github.com/photonstorm/phaser3-examples/
        // blob/master/public/src/physics/arcade/basic%20platform.js


        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(320, 115, 'grass').setScale(2).refreshBody();

        // Left Trees
        this.imageObject = this.add.image(
            100,//x
            415,//y
            'tree1',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            20,//x
            420,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize

        // Right Trees
        this.imageObject = this.add.image(
            740,//x
            415,//y
            'tree1',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            680,//x
            415,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            760,//x
            420,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize

        // Player Movement Code

        this.player = this.physics.add.sprite(0, 100, 'man').setScale(0.65);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;

        // Anvil Dropping Code
 
        let randomNum = Math.floor(Math.random() * 650) + 50;
        let x = 0;
        
        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.laser = this.physics.add.sprite(randomNum, 20, 'laser').setScale(1);
                this.laser.setBounce(0.2);
                this.laser.setCollideWorldBounds(false);
                this.laser.onWorldBounds = true;
                randomNum = Math.floor(Math.random() * 650) + 50;
                x++;
                if ( x == 30 ) {
                    this.scene.start("Complete2");
                }
            },
            loop: true,
        })



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

class Complete2 extends Phaser.Scene {

    constructor() {
        super('Complete2');
    }

    preload(){

    }

    create(){

        //create text object
        this.textObject = this.add.text(
            240, //x
            300,//y
            "Level 2 Complete!", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.textObject = this.add.text(
            320, //x
            400,//y
            "(Click for Next Level)", //text
            {
                font: "15px Arial",
                color: "#ffffff",
            } //style
        );

        this.input.once('pointerdown', function() {
            this.scene.start("Level3")
        }, this)
    }

    update(){}
}

class Level3 extends Phaser.Scene {

    constructor() {
        super('Level3');
    }

    player;
    platforms;
    cursors;
    laser;

    preload(){
        this.load.path = './asset/';
        this.load.image('grass', 'grass.png');
        this.load.image('man', 'man.png');
        this.load.image('tree1', 'tree1.png');
        this.load.image('tree2', 'tree2.png');
        this.load.image('laser', 'laser.png');

    }

    create(){

        // code from example:
        // https://github.com/photonstorm/phaser3-examples/
        // blob/master/public/src/physics/arcade/basic%20platform.js


        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(320, 115, 'grass').setScale(2).refreshBody();

        // Left Trees
        this.imageObject = this.add.image(
            100,//x
            415,//y
            'tree1',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            20,//x
            420,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize

        // Right Trees
        this.imageObject = this.add.image(
            740,//x
            415,//y
            'tree1',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            680,//x
            415,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize
        this.imageObject = this.add.image(
            760,//x
            420,//y
            'tree2',//imagename
        )
        this.imageObject.setScale(1) //resize

        // Player Movement Code

        this.player = this.physics.add.sprite(0, 100, 'man').setScale(0.65);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;

        // Anvil Dropping Code
 
        let randomNum = Math.floor(Math.random() * 650) + 50;
        let x = 0;
        
        this.time.addEvent({
            delay: 300,
            callback: ()=>{
                this.laser = this.physics.add.sprite(randomNum, 20, 'laser').setScale(1);
                this.laser.setBounce(0.2);
                this.laser.setCollideWorldBounds(false);
                this.laser.onWorldBounds = true;
                randomNum = Math.floor(Math.random() * 650) + 50;
                x++;
                if ( x == 50 ) {
                    this.scene.start("Complete3");
                }
            },
            loop: true,
        })



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

class Complete3 extends Phaser.Scene {

    constructor() {
        super('Complete3');
    }

    preload(){

    }

    create(){

        //create text object
        this.textObject = this.add.text(
            240, //x
            300,//y
            "Congratulations!", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.textObject = this.add.text(
            320, //x
            400,//y
            "(Click for main menu)", //text
            {
                font: "15px Arial",
                color: "#ffffff",
            } //style
        );

        this.input.once('pointerdown', function() {
            this.scene.start("intro")
        }, this)
    }

    update(){}
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
    scene: [intro, Level1, Complete1, Level2, Complete2, Level3, Complete3] 
};


let game = new Phaser.Game(config);

