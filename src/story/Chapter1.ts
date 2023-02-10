import { Scene } from "../class/Scene";
import { Chapter } from "../class/Chapter";
import { NomalDialogue } from "../class/Dialogue";
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
      new Scene(3, 4, "train", []),
      new Scene(4, 5, "school-enter", []),
      new Scene(5, 6, "school-gym", []),
    ],
    0,
  );
}
