import RoundRectangleCanvas from "phaser3-rex-plugins/plugins/roundrectanglecanvas.js";

export type SelectsBoxConfig = {
  x: number;
  y: number;
  width: number;
  height: number;
  padding?: number;
  margin?: number;
  textStyle?: Phaser.Types.GameObjects.Text.TextStyle;
};

export class SelectsBox extends Phaser.GameObjects.Container {
  private box: RoundRectangleCanvas;
  private text1: Phaser.GameObjects.Text;
  private text2: Phaser.GameObjects.Text;
  private text3: Phaser.GameObjects.Text;

  constructor(
    public scene: Phaser.Scene,
    {
      x,
      y,
      width,
      height,
      padding = 10,
      margin = 10,
      textStyle = {},
    }: SelectsBoxConfig,
  ) {
    // Phaser.GameObjects.Containerのコンストラクタ
    super(scene, 0, 0);

    // 白枠付きの黒いRectangleを作成
    this.box = new RoundRectangleCanvas(
      this.scene,
      x,
      y,
      width,
      height,
      8,
      0xeeeeee,
      0x74cfe2,
      4,
      0xffffff,
      false,
    )
      .setAlpha(0.8)
      .setDepth(1);
    this.add(this.box); // Containerへの追加

    // wordWrap（折り返し設定）を追加した会話テキスト用のTextStyleを作成
    const dialogBoxTextStyle = {
      ...textStyle,
      wordWrap: { width: width - padding * 2, useAdvancedWrap: true }, // useAdvancedWrapをtrueにすることで日本語の折り返しが有効になる
    };

    // 選択テキスト用のTextを作成
    this.text1 = new Phaser.GameObjects.Text(
      this.scene,
      x - width / 2 + padding,
      y - height / 2 + padding,
      "",
      dialogBoxTextStyle,
    );
    this.text2 = new Phaser.GameObjects.Text(
      this.scene,
      x - width / 2 + padding,
      y - height / 2 + 30 + padding,
      "",
      dialogBoxTextStyle,
    );
    this.text3 = new Phaser.GameObjects.Text(
      this.scene,
      x - width / 2 + padding,
      y - height / 2 + 60 + padding,
      "",
      dialogBoxTextStyle,
    );

    [this.text1, this.text2, this.text3].forEach((v, i) => {
      v.setInteractive({ useHandCursor: true }).on("pointerover", () => {
        v.setColor("#555");
      });
      v.setInteractive({ useHandCursor: true }).on("pointerout", () => {
        v.setColor("#fff");
      });
      this.add(v);
    });
  }

  // 会話テキストのセット
  public setText(text: string[]) {
    this.text1.setText(text[0]).setDepth(1);
    this.text2.setText(text[1]).setDepth(1);
    this.text3.setText(text[2] ?? "").setDepth(1);
  }

  get texts(): Phaser.GameObjects.Text[] {
    return [this.text1, this.text2, this.text3];
  }
}
