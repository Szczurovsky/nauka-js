let round = 1;
const Board1 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
const combinations = [
    [2, 4, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
    [6, 7, 8],
    [3, 4, 5],
    [0, 1, 2],
];
export class Game {
    static Player1: string;
    static Player2: string;

    constructor() {}

    getBox() {
        const boxArray: NodeListOf<Element> = document.querySelectorAll(".box");
        return boxArray;
    }
    public static checkGameStat() {
        let winner = null;
        const result = Board1.reduce((total, row) => total.concat(row));
        console.log(result);
        let moves = {
            "fa-times": [],
            "fa-circle": [],
        };
        result.forEach((field, index) =>
            moves[field] ? moves[field].push(index) : null
        );
        console.log(moves);
        combinations.forEach((combination) => {
            if (
                combination.every(
                    (index) => moves[this.Player2].indexOf(index) > -1
                )
            ) {
                winner = "Winner is P1";
            }
            if (
                combination.every(
                    (index) => moves[this.Player1].indexOf(index) > -1
                )
            ) {
                winner = "Winner is P2";
            }
        });
        return winner;
    }
    drawShape(event) {
        const { row, column } = event.target.dataset;
        Game.Player1 = "fa-times";
        Game.Player2 = "fa-circle";
        let turn = String(round % 2 === 0 ? Game.Player2 : Game.Player1);
        console.log("przed");
        if (
            Board1[row][column] === "fa-times" ||
            Board1[row][column] === "fa-circle"
        )
            return;
        console.log("po");
        event.target.classList.add(turn);
        Board1[row][column] = turn;

        // alert(Game.checkGameStat());
        round++;
        console.log(Game.checkGameStat());
    }
    test() {
        this.getBox().forEach((box) =>
            box.addEventListener("click", this.drawShape)
        );
    }
}
