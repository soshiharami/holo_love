export class EndingScene extends Phaser.Scene {
    constructor() {
        super('ending');
    }

    create() {
        const { width, height } = this.game.canvas;

        this.add.text(width / 2, height / 2 + 80, 'END');

        const zone = this.add.zone(width / 2, height / 2, width, height);
        zone.setInteractive({
            useHandCursor: true
        });
        zone.on('pointerdown', () => {
            this.scene.start('title');  // TitleSceneに遷移
        });
    }
}
