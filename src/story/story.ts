import { Chapter } from "../class/Chapter";
import { Character } from "../class/Character";
import { Stylies } from "../class/Stylies";
import { chapter1 } from "./Chapter1";

type Characters = {
    n: Character
    m: Character
    s: Character
    r: Character
    k: Character
    h: Character
}

export class Story {
    public characters: Characters = {
        n: new Character(1, "", 0x000000, new Stylies({ image: "", sound: "" })),
        m: new Character(2, "さくらみこ", 0x000000, new Stylies({ image: "", sound: "" })),
        s: new Character(3, "", 0x000000, new Stylies({ image: "", sound: "" })),
        r: new Character(4, "雪花ラミィ", 0x000000, new Stylies({ image: "", sound: "" })),
        k: new Character(5, "戌神ころね", 0x000000, new Stylies({ image: "", sound: "" })),
        h: new Character(6, "博衣こより", 0x000000, new Stylies({ image: "", sound: "" })),
    }

    public chapters: Chapter[] = [
        new chapter1(this).chapter1
    ]
}
