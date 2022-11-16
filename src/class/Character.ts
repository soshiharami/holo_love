import { Stylies } from "./Stylies";

export class Character {
    constructor(
        private _id: number,
        private _name: string,
        private _color: number,
        private _stylies: Stylies,
    ) { }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get color(): number {
        return this._color
    }

    get stylies(): Stylies {
        return this._stylies
    }
}
