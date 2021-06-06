// import { Bundle } from "./dist/bundle.js";
import { Cell } from "./cell";
import { Game } from "./game";
import { IGame } from "./game.model";

function Watch(
    target: object,
    propKey: string,
    descriptor: PropertyDescriptor
) {
    const originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log("uruchomiono kolko i krzyzyk");
        return originalFn.call(this);
    };
}

export class TicTacToe implements IGame {
    name: string;
    wyswietl: string;
    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    @Watch
    getGameElement(): HTMLElement {
        console.log(this.wyswietl);
        const div = document.createElement("div");
        div.className = "board";
        document.body.appendChild(div);
        const c1 = new Cell(3);
        const g1 = new Game();
        c1.createTable();
        g1.test();

        return div;
    }
}
