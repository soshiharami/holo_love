import { NomalDialogue, SelectsDialogue } from "./Dialogue";

// test

export class Scene {
  constructor(
    private _id: number,
    private _nextSceneId: number | null,
    private _backgroundImage: string,
    private _dialogue: (NomalDialogue | SelectsDialogue)[],
  ) {}

  get id(): number {
    return this._id;
  }

  get nextSceneId(): number {
    if (this._nextSceneId == null) {
      return 0;
    }
    return this._nextSceneId;
  }

  set nextSceneId(id: number) {
    this._nextSceneId = id;
  }

  getNextScene(scenies: Scene[]): Scene | undefined {
    return scenies.find((scene) => scene.id == this._nextSceneId);
  }

  get backgroundImage(): string {
    return this._backgroundImage;
  }

  get dialogue(): (NomalDialogue | SelectsDialogue)[] {
    return this._dialogue;
  }
}
