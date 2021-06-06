export class Cell {
    numberColumn: Number;
    constructor(numberColumn: Number) {
        this.numberColumn = numberColumn;
        let numberRow = 1;
    }
    createTable() {
        const table = document.querySelector(".board");
        let rows = 0;
        const columns = this.numberColumn;
        for (let i = 0; i < columns; i++) {
            let numberOfColumn = 0;
            const row = document.createElement("div");
            row.className = "box fas far";
            const zmienna = rows.toString();
            const zmienna1 = numberOfColumn.toString();
            row.setAttribute("data-row", zmienna);
            row.setAttribute("data-column", zmienna1);
            table.appendChild(row);
            numberOfColumn++;
            for (let j = 1; j < columns; j++) {
                const column = document.createElement("div");
                column.className = "box fas far";
                const zmienna = rows.toString();
                const zmienna1 = numberOfColumn.toString();
                column.setAttribute("data-row", zmienna);
                column.setAttribute("data-column", zmienna1);
                table.appendChild(column);
                numberOfColumn++;
            }
            rows++;
            // numberOfColumn = 0;
        }
    }
}
// }
