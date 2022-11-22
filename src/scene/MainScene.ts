import { Scene } from '../class/Scene';
import { Chapter } from '../class/Chapter'
import { DialogBox, DialogBoxConfig } from '../class/DialogBox';  // 追加
import { NomalDialogue, SelectDialogue, SelectsDialogue } from '../class/Dialogue';
import { Character } from '../class/Character';
import { Stylies } from '../class/Stylies';
import { SelectsBox, SelectsBoxConfig } from '../class/SelectsBox';
import { chapter1 } from '../story/Chapter1';
import { Story } from '../story/story';

export class MainScene extends Phaser.Scene {
    constructor() {
        super('main');
    }

    create() {
        const { width, height } = this.game.canvas;


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
        const selectsBoxConfig: SelectsBoxConfig = {
            x: width / 2,
            y: height / 2,
            width: width / 3,
            height: height / 4,
            padding: 10,
            margin: dialogBoxMargin,
            textStyle: textStyle
        };

        // DialogBoxの作成
        const dialogBox = new DialogBox(this, dialogBoxConfig);
        const selectsBox = new SelectsBox(this, selectsBoxConfig);


        const story = new Story()
        var dialoguies: (NomalDialogue | SelectsDialogue)[] = story.chapters[0].scenies[0].dialogue
        var chapters: (Chapter)[] = story.chapters
        var scenies: (Scene)[] = story.chapters[0].scenies
        var nowChapter: Chapter = chapters[0]
        var nowScene: Scene = nowChapter.scenies[0]
        var nowDialogue: NomalDialogue | SelectsDialogue = nowScene.dialogue[0]
        var nowRigft: any

        const backgroundImage = this.add.image(width / 2, height / 2, nowScene.backgroundImage);

        const isNomal = (nomal: NomalDialogue | SelectsDialogue): nomal is NomalDialogue => {
            return nomal.kind === "nomal"
        }

        const isSelects = (nomal: NomalDialogue | SelectsDialogue): nomal is SelectsDialogue => {
            return nomal.kind === "selects"
        }

        const zone = this.add.zone(width / 2, height / 2, width, height);
        zone.setInteractive({
            useHandCursor: true
        });

        const rendering = (nextDialogue: NomalDialogue | SelectsDialogue | undefined): void => {
            if (nextDialogue) {
                nowDialogue = nextDialogue
                if (isNomal(nowDialogue)) {
                    dialogBox.setText(nowDialogue.text)
                    dialogBox.setActorNameText(nowDialogue.auther.name)
                    nowRigft.destroy()
                    nowRigft = this.add.image(width - 200, height + 100, nowDialogue.auther.stylies.normal?.image ?? "")
                    zone.setInteractive({ useHandCursor: true })
                }
            } else if (isNomal(nowDialogue) && nowDialogue.nextSceneId) {
                const nextScene = nowDialogue.getNextScene(scenies)
                toNextScene(nextScene)
            }
            else {
                const nextScene = nowScene.getNextScene(scenies)
                toNextScene(nextScene)
            }
        }

        const toNextScene = (nextScene: Scene | undefined) => {
            if (nextScene) {
                nowScene = nextScene
                dialoguies = nowScene.dialogue
                nowDialogue = nowScene.dialogue[0]
                backgroundImage.setTexture(nowScene.backgroundImage).update()
                rendering(nowDialogue)
            } else {
                const nextChapter = nowChapter.getNextChapter(chapters)
                toNextChapter(nextChapter)
            }
        }

        const toNextChapter = (nextChapter: Chapter | undefined) => {
            if (nextChapter) {
                nowChapter = nextChapter
                scenies = nowChapter.scenies
                nowScene = nowChapter.scenies[0]
            } else {
                this.scene.start('ending')
            }
        }

        zone.on('pointerdown', () => {
            if (isNomal(nowDialogue)) {
                const nextDialogue = nowDialogue.getNextDialogue(dialoguies)
                rendering(nextDialogue)
                if (nextDialogue) {
                    nowDialogue = nextDialogue
                }
            }

            if (isSelects(nowDialogue)) {
                const selectsBox = new SelectsBox(this, selectsBoxConfig);
                selectsBox.setText(nowDialogue.selects.map(select => select.text))
                zone.setInteractive({ useHandCursor: false }).setInteractive(false)
                selectsBox.texts.forEach((text, i) => {
                    text.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
                        if (isSelects(nowDialogue)) {
                            const nextDialogue = nowDialogue.selects[i].getNextDialogue(dialoguies)
                            rendering(nextDialogue)
                        }
                        selectsBox.destroy()
                    })
                })
                this.add.existing(selectsBox).setDepth(2);
            }
        });
        if (isNomal(nowDialogue)) {
            dialogBox.setText(nowDialogue.text)
            dialogBox.setActorNameText(nowDialogue.auther.name)
            nowRigft = this.add.image(width - 200, height + 100, nowDialogue.auther.stylies.normal?.image ?? "")
        }
        // DialogBoxの表示
        this.add.existing(dialogBox).setDepth(1);
    }
}
