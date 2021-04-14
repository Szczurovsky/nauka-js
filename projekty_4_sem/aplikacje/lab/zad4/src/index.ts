import { Games } from "./games.enum";
import { IGame } from "./game.model";
import { TicTacToe } from "../TicTacToe/zad3/tictactoe";
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

        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

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
            console.log("snp");
        }
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}
class GameFactory {
    getGame(game: Games): IGame {
        switch (game) {
            case Games.TicTacToe:
                return new TicTacToe();
            default:
                throw new Error("invalid game");
        }
    }
}

let gameFactory = new GameFactory();
let app = new App(gameFactory);
