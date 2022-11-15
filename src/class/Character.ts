import { Stylies } from "./Stylies";

export class Character {
    constructor(id: number, name: string, color: string, style: Stylies) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.style = style;
    }

    public id: number;
    public name: string;
    public color: string;
    public style: Stylies;
}
