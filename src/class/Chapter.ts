import { Scene } from "./Scene";

export class Chapter {
  constructor(
    private _id: number,
    private _scenies: Scene[],
    private _nextChapterId: number | null,
  ) {}

  get id(): number {
    return this._id;
  }

  get scenies(): Scene[] {
    return this._scenies;
  }

  get nextChapterId(): number | null {
    return this._nextChapterId;
  }

  getNextChapter(chapters: Chapter[]): Chapter | undefined {
    return chapters.find((chapter) => chapter.id == this._nextChapterId);
  }
}
