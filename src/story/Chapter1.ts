import { Scene } from "../class/Scene";
import { Chapter } from "../class/Chapter";
import {
  NomalDialogue,
  SelectDialogue,
  SelectsDialogue,
} from "../class/Dialogue";
import { Story } from "./story";

export class chapter1 {
  constructor(private story: Story) {}

  public chapter1 = new Chapter(
    1,
    [
      new Scene(1, 2, "school-enter", [
        new NomalDialogue(
          1,
          "ここは私立ホロライブ学園 才能ある選ばれた者しか入学できない学園",
          this.story.characters.n,
          this.story.characters.n.stylies.sad,
          2,
        ),
        new NomalDialogue(
          2,
          "そんな学園にまた春が訪れる…",
          this.story.characters.n,
          this.story.characters.n.stylies.sad,
          0,
        ),
      ]),
      new Scene(2, 3, "home", [
        new NomalDialogue(
          3,
          "うわあああやっべええええ",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          4,
        ),
        new NomalDialogue(
          4,
          "母さんなんで起こしてくれなかったの！？",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          5,
        ),
        new NomalDialogue(
          5,
          "急げ急げ！！！今日から晴れて念願のホロライブ学園に入学だっていうのに～～！！！",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          6,
        ),
        new NomalDialogue(
          6,
          "(なんでよりにもよって今日なんだ！！)",
          this.story.characters.s,
          this.story.characters.s.stylies.sad,
          7,
        ),
        new NomalDialogue(
          7,
          "そんなことを思いながら急いで家を飛び出る",
          this.story.characters.n,
          this.story.characters.n.stylies.sad,
          8,
        ),
      ]),
      new Scene(3, 4, "train", [
        new NomalDialogue(
          8,
          "10分後",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          9,
        ),
        new NomalDialogue(
          9,
          "ふ～… なんとか間に合った…",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          10,
        ),
        new NomalDialogue(
          10,
          "ってうわ！これ電車逆方向か！？",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          11,
        ),
        new NomalDialogue(
          11,
          "あ、あのぅ... \n その制服、ホロライブ学園の学生さんですか？",
          this.story.characters.r,
          this.story.characters.r.stylies.sad,
          12,
        ),
        new SelectsDialogue(12, this.story.characters.s, [
          new SelectDialogue("そうです！", 13, this.story.characters.r, 2),
          new SelectDialogue(
            "え、あ、はい。。",
            13,
            this.story.characters.r,
            1,
          ),
          new SelectDialogue("違います", 15, this.story.characters.r, -1),
        ]),
        new NomalDialogue(
          13,
          "やっぱり！",
          this.story.characters.r,
          this.story.characters.r.stylies.sad,
          14,
        ),
        new NomalDialogue(
          14,
          "それならこの電車であってますよ！",
          this.story.characters.r,
          this.story.characters.r.stylies.sad,
          16,
        ),
        new NomalDialogue(
          15,
          "ごめんなさい。\n勘違いでした...\n忘れてください！",
          this.story.characters.r,
          this.story.characters.r.stylies.sad,
          16,
        ),
      ]),
      new Scene(4, 5, "school-enter", [
        new NomalDialogue(
          9,
          "うわあああやっべええええ",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          4,
        ),
      ]),
      new Scene(5, 6, "school-gym", [
        new NomalDialogue(
          10,
          "うわあああやっべええええ",
          this.story.characters.s,
          this.story.characters.n.stylies.sad,
          4,
        ),
      ]),
    ],
    0,
  );
}
