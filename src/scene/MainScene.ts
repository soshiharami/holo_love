import { DialogBox, DialogBoxConfig } from '../class/DialogBox';  // 追加

export class MainScene extends Phaser.Scene {
    constructor() {
        super('main');
    }

    create() {
        const { width, height } = this.game.canvas;

        this.add.image(width / 2, height / 2, 'school');

        // フォントの設定
        const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
            fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
            fontSize: '24px',
            stroke: "#000",
            strokeThickness: 2
        };

        // DialogBoxのコンフィグ
        const dialogBoxHeight = 150;
        const dialogBoxMargin = 10;
        const dialogBoxConfig: DialogBoxConfig = {
            x: width / 2,
            y: height - dialogBoxMargin - dialogBoxHeight / 2,
            width: width - dialogBoxMargin * 2,
            height: dialogBoxHeight,
            padding: 10,
            margin: dialogBoxMargin,
            textStyle: textStyle
        };

        // DialogBoxの作成
        const dialogBox = new DialogBox(this, dialogBoxConfig);

        // テキストの設定
        dialogBox.setText('C-Styleは事業課題を洗い出し、最高のプロダクトを開発する「設計者集団」です。事業開発者・UI/UXデザイナー・web・モバイルエンジニア各分野のプロフェッショナルがお客様と一緒に伴走いたします。▼');
        dialogBox.setActorNameText('テスト太郎');

        // DialogBoxの表示
        this.add.existing(dialogBox);

        const zone = this.add.zone(width / 2, height / 2, width, height);
        zone.setInteractive({
            useHandCursor: true
        });
        zone.on('pointerdown', () => {
            this.scene.start('ending');  // EndingSceneに遷移
        });
    }
}
