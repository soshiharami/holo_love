export class LoadingScene extends Phaser.Scene {
    constructor() {
        // シーンのkeyを指定
        super('loading');
    }

    // preload()はシーンが呼び出されたら実行される
    preload() {
        // ロゴ画像だけは最初から表示したいので予めロード
        this.load.image('logo', 'assets/holo_logo.png');
    }

    // create()はpreload内のアセットのロードが完了したら実行される
    create() {
        // 描画領域のサイズを取得
        const { width, height } = this.game.canvas;

        // ロゴ画像を中央に表示
        this.add.image(width / 2, height / 2 - 20, 'logo');

        // テキストをロゴの下に表示
        this.add.text(width / 2, height / 2 + 60, 'Loading...').setOrigin(0.5);

        // アセットをロード（一度ロードしたアセットは他のシーンでも使用可）
        this.load.image('street', 'assets/street.png');
        this.load.image('school', 'assets/school.jpg');
        this.load.image('robot', 'assets/robot.png');

        // アセットのロードが完了したらTitleSceneに遷移
        this.load.on('complete', () => {
            this.scene.start('title');
        });

        // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
        this.load.start();
    }
}
