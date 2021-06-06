import { Games } from "./games.enum";
import { IGame } from "./game.model";
import { TicTacToe } from "./tictactoe";
// import "../dist/style.css";
// import { BattleShips } from "./battleships/battleships";
// import "./styles/styles.scss";

class App {
    gamesFactory: GameFactory;
    constructor(gamesFactory: GameFactory) {
        this.gamesFactory = gamesFactory;
        this.initMenu();
    }

    init(): void {
        const menuContainer = <HTMLDivElement>document.createElement("div"); // kontener menu dostępnych gier
        menuContainer.className = "menu-container";
        const gameContainer = <HTMLDivElement>document.createElement("div"); // kontener główny ekranu z grą
        gameContainer.className = "game-container";
        const list = document.createElement("ul"); // lista pozycji w menu dostępnych gier

        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
    initMenu(): void {
        const menuContainer = <HTMLDivElement>document.createElement("div"); // kontener menu dostępnych gier
        menuContainer.className = "menu-container";
        const gameContainer = <HTMLDivElement>document.createElement("div"); // kontener główny ekranu z grą
        gameContainer.className = "game-container";
        const list = document.createElement("ul"); // lista pozycji w menu dostępnych gier

        for (const games of Object.keys(Games)) {
            if (isNaN(Number(games))) {
                continue;
            }
            const game = gameFactory.getGame(Number(games));
            const item = document.createElement("li");
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener("click", () => {
                gameContainer.innerHTML = "";
                gameContainer.appendChild(game.getGameElement());
            });
            list.appendChild(item);
        }
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}
enum Active {
    IsActive = "active",
    disabled = "disabled",
}
function Disabled(constructorFn: Function) {
    // constructorFn.prototype.IsActive = "disabled";
    constructorFn.prototype.active = "disabled";
    console.log(constructorFn.prototype.active);
}
// @Disabled
class GameFactory {
    active: string;
    // IsActive: string;
    // console.log(this.IsActive);
    // if (this.IsActive == Active.IsActive)

    getGame(game: Games): IGame {
        if (this.active !== Active.disabled) {
            {
                console.log(this.active);
                switch (game) {
                    case Games.TicTacToe:
                        return new TicTacToe();
                    // return this.IsActive
                    default:
                        throw new Error("invalid game");
                }
            }
        }
    }
}

let gameFactory = new GameFactory();
let app = new App(gameFactory);
