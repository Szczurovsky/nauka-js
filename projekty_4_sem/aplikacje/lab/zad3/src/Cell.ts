export class Cell {
    // cellValue: number;
    // htmlElement: HTMLElement;
    // constructor(cell: HTMLElement) {
    //     this.htmlElement = cell;
    // }
    // setCellValue(value: number) {
    //     // TODO: napisz samemu metodę, która ustawia w
    //     // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko
    //     // to wartość -1, krzyżyk to wartość 1, a 0 (zero)
    //     // oznacza pole nieustawione.
    // }

    /**
     *
     */
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
            row.className = "box fa";
            const zmienna = rows.toString();
            const zmienna1 = i.toString();
            row.setAttribute("data-row", zmienna);
            row.setAttribute("data-column", zmienna1);
            table.appendChild(row);
            // const column = document.createElement("div");
            // column.className = "box fa";
            // const zmienna = rows.toString();
            // const zmienna1 = i.toString();
            // column.setAttribute("data-row", zmienna);
            // column.setAttribute("data-column", zmienna1);
            // table.appendChild(column);
            // console.log("działam");
            for (let j = 1; j < columns; j++) {
                // const row = document.createElement("div");
                // row.className = "box fa";
                // const zmienna = rows.toString();
                // const zmienna1 = i.toString();
                // row.setAttribute("data-row", zmienna);
                // row.setAttribute("data-column", 5);
                // table.appendChild(row);
                const column = document.createElement("div");
                column.className = "box fa";
                const zmienna = rows.toString();
                const zmienna1 = numberOfColumn.toString();
                column.setAttribute("data-row", zmienna);
                column.setAttribute("data-column", zmienna1);
                table.appendChild(column);
                console.log("działam");
                numberOfColumn++;
            }
            rows++;
            numberOfColumn = 0;
        }
    }
}
// }

const c1 = new Cell(3);
c1.createTable();
