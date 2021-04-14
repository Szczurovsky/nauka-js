let round = 1;
const Board1 = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
];
const combinations = [
    [3, 5, 7],
    [1, 5, 9],
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
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

        let moves = {
            "fa-times": [],
            "fa-circle": [],
        };
        result.forEach((field, index) =>
            moves[field] ? moves[field].push(index) : null
        );
        combinations.forEach((combination) => {
            if (
                combination.every(
                    (index) => moves[this.Player1].indexOf(index) > -1
                )
            ) {
                winner = "Winner is P1";
            }
            if (
                combination.every(
                    (index) => moves[this.Player2].indexOf(index) > -1
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
        console.log(Game.checkGameStat());
        // alert(Game.checkGameStat());
        round++;
    }
    test() {
        this.getBox().forEach((box) =>
            box.addEventListener("click", this.drawShape)
        );
    }
}
