// import { Bundle } from "./dist/bundle.js";
import { Cell } from "./cell";
import { Game } from "./game";
import { IGame } from "./game.model";

export class TicTacToe implements IGame {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
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
