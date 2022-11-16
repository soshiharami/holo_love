import { Scene } from '../class/Scene';
import { Chapter } from '../class/Chapter';
import { DialogBox, DialogBoxConfig } from '../class/DialogBox';  // 追加
import { NomalDialogue, SelectsDialogue } from '../class/Dialogue';
import { Character } from '../class/Character';
import { Stylies } from '../class/Stylies';

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
            strokeThickness: 3
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

        const testStylies: Stylies = new Stylies({ image: 'okayu', sound: 'okayu' })
        const testStylies2: Stylies = new Stylies({ image: 'korone', sound: 'korone' })
        const testCharacter: Character = new Character(1, "猫又おかゆ", 0xB190FC, testStylies)
        const testCharacter2: Character = new Character(2, "戌神ころね", 0xB190FC, testStylies2)
        const testDialog1: NomalDialogue = new NomalDialogue(1, "僕でよくなーい？", testCharacter, testCharacter.stylies.sad, 2)
        const testDialog2: NomalDialogue = new NomalDialogue(2, "もぐもぐ〜〜", testCharacter, testCharacter.stylies.sad, 3)
        const testDialog3: NomalDialogue = new NomalDialogue(3, "ころさんには内緒にするからさぁ", testCharacter, testCharacter.stylies.sad, 4)
        const testDialog4: NomalDialogue = new NomalDialogue(4, "僕と遊ばな〜い？", testCharacter, testCharacter.stylies.sad, 5)
        const testDialog5: NomalDialogue = new NomalDialogue(5, "なに話してるの？", testCharacter2, testCharacter2.stylies.sad, 6)
        const testScene: Scene = new Scene(1, 2, "./school", [testDialog1, testDialog2])
        const testChapter: Chapter = new Chapter(1, [testScene], 2)


        const dialoguies: (NomalDialogue | SelectsDialogue)[] = [testDialog1, testDialog2, testDialog3, testDialog4, testDialog5]
        const chapters: (Chapter)[] = [testChapter]
        const scenies: (Scene)[] = [testScene]
        var nowChapters: Chapter = chapters[0]
        var nowScene: Scene = nowChapters.scenies[0]
        var nowDialogue: NomalDialogue | SelectsDialogue = nowScene.dialogue[0]
        var nowRigft: any

        const isNomal = (nomal: NomalDialogue | SelectsDialogue): nomal is NomalDialogue => {
            return nomal.kind === "nomal"
        }
        const zone = this.add.zone(width / 2, height / 2, width, height);
        zone.setInteractive({
            useHandCursor: true
        });
        zone.on('pointerdown', () => {
            if (isNomal(nowDialogue)) {
                const nextDialogue = nowDialogue.getNextDialogue(dialoguies)
                if (nextDialogue) {
                    nowDialogue = nextDialogue
                } else {
                    this.scene.start('ending');  // EndingSceneに遷移
                }
            }

            if (isNomal(nowDialogue)) {
                nowRigft.setDepth(10)
                dialogBox.setText(nowDialogue.text)
                dialogBox.setActorNameText(nowDialogue.auther.name)
                nowRigft.destroy()
                nowRigft = this.add.image(width - 200, height + 100, nowDialogue.auther.stylies.normal?.image ?? "").setDepth(1)
            }

            // DialogBoxの表示
            this.add.existing(dialogBox);
        });
        if (isNomal(nowDialogue)) {
            dialogBox.setText(nowDialogue.text)
            dialogBox.setActorNameText(nowDialogue.auther.name)
            nowRigft = this.add.image(width - 200, height + 100, nowDialogue.auther.stylies.normal?.image ?? "").setDepth(10)
        }
        // DialogBoxの表示
        this.add.existing(dialogBox);
        /*
        // テキストの設定
        while (nowChapters.nextChapterId != null) {
            while (nowScene.nextSceneId != null) {
                if (isNomal(nowDialogue)) {
                    while (nowDialogue != null) {
                        nowDialogue.getNextDialogue(dialoguies)
                        dialogBox.setText(nowDialogue.text)
                        dialogBox.setActorNameText(nowDialogue.auther.name)
                        // DialogBoxの表示
                        this.add.existing(dialogBox);
                    }
                }
                const nextScene = nowScene.getNextScene(scenies)
                if (nextScene != null) {
                    nowScene = nextScene
                }
            }
            if (nowChapters.nextChapterId != null) {
                const nextChapter = nowChapters.getNextChapter(chapters)
                if (nextChapter != null) {
                    nowChapters = nextChapter
                }
            }
        }
        */

        // DialogBoxの表示
        this.add.existing(dialogBox);
    }
}
