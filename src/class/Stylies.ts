export type style = {
    image: string;
    sound: string;
}

export class Stylies {
    constructor(
        private _normal?: style,
        private _happy?: style,
        private _angry?: style,
        private _sad?: style,
        private _shy?: style
    ) {
    }
    get normal(): style | undefined {
        return this._normal
    }
    get happy(): style | undefined {
        return this._happy
    }
    get sad(): style | undefined {
        return this._sad
    }
    get shy(): style | undefined {
        return this._shy
    }
    get angry(): style | undefined {
        return this._angry
    }
}

