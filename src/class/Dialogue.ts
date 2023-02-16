import { Scene } from "./Scene";
import { Character } from "./Character";
import { style } from "./Stylies";

export class NomalDialogue {
  public kind = "nomal";
  constructor(
    private _id: number,
    private _text: string,
    private _auther: Character,
    private _style: style | undefined,
    private _nextDialogueId: number | null,
    private _nextSceneId?: number,
  ) {}

  get id(): number {
    return this._id;
  }

  get auther(): Character {
    return this._auther;
  }

  get text(): string {
    return this._text;
  }

  get style(): style | undefined {
    return this._style;
  }

  get nextDialogueId(): number | null {
    return this._nextDialogueId;
  }

  get nextSceneId(): number | undefined {
    return this._nextSceneId;
  }

  getNextScene(scenies: Scene[]): Scene | undefined {
    return scenies.find((scene) => scene.id == this._nextSceneId);
  }

  getNextDialogue(
    dialoguies: (NomalDialogue | SelectsDialogue)[],
  ): NomalDialogue | SelectsDialogue | undefined {
    return dialoguies.find((dialogue) => dialogue.id == this._nextDialogueId);
  }
}

export class SelectDialogue {
  constructor(
    private _text: string,
    private _nextDialogueId: number,
    private _toTalk1: Character,
    private _score: number,
    private _toTalk2?: Character,
    private _score2?: number,
  ) {}

  public upScore() {
    this._toTalk1.score = this._toTalk1.score + this.score;
    if (this.toTalk2 && this.score2) {
      this.toTalk2.score = this.toTalk2.score + this.score2;
    }
  }

  get score(): number {
    return this._score;
  }

  get score2(): number | undefined {
    return this._score2;
  }

  get text(): string {
    return this._text;
  }

  get toTalk1(): Character {
    return this._toTalk1;
  }

  get toTalk2(): Character | undefined {
    return this._toTalk2;
  }

  get nextDialogueId(): number {
    return this._nextDialogueId;
  }

  getNextDialogue(
    dialoguies: (NomalDialogue | SelectsDialogue)[],
  ): NomalDialogue | SelectsDialogue | undefined {
    return dialoguies.find((dialogue) => dialogue.id == this._nextDialogueId);
  }
}

export class SelectsDialogue {
  public kind = "selects";
  constructor(
    private _id: number,
    private _auther: Character,
    private _selects: SelectDialogue[],
  ) {}

  get id(): number {
    return this._id;
  }

  get selects(): SelectDialogue[] {
    return this._selects;
  }

  get auther(): Character {
    return this._auther;
  }
}
