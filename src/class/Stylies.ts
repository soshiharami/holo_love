type style = {
    image: string;
    sound: string;
}

export class Stylies {
    constructor(
        private _normal: style,
        private _happy: style,
        private _angry: style,
        private _sad: style,
        private _shy: style
    ) {
    }
    get normal(): style {
        return this._normal
    }
    get happy(): style {
        return this._happy
    }
    get sad(): style {
        return this._sad
    }
    get shy(): style {
        return this._shy
    }
    get angry(): style {
        return this._angry
    }
}

