export class Board {
    /**
     *
     */
    constructor() {}
    boardInfo() {
        const board = [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
        ];
        return board;
    }
    combination() {
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
        return combinations;
    }
}
