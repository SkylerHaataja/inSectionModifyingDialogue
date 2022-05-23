class Title2 extends Phaser.Scene {
    constructor() {
        super("title2Scene");
    }

    create() {
        // add title text
        this.add.bitmapText(centerX, centerY - 32, 'gem_font', 'Macbeth', 32).setOrigin(0.5);
        this.add.bitmapText(centerX, centerY, 'gem_font', 'Press SPACE to start', 16).setOrigin(0.5);

        // create input
        cursors = this.input.keyboard.createCursorKeys();
        this.scene.stop("talkingScene");
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("macbethScene");
        }
    }
}