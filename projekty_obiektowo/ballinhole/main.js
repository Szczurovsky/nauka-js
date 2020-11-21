class Circle {
    getValue() {
        const textArea = document.querySelector("#number").value;
        const svg = document.querySelector("svg");

        for (let i = 0; i < textArea; i++) {
            const circle = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );
            circle.classList.add("shape");
            svg.appendChild(circle);
        }
    }
    drawCircles() {
        const board = document.querySelectorAll(".shape");
        for (let i = 0; i < board.length; i++) {
            const circle = board[i];
            circle.style.r = "20px";
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            circle.style.cx = Math.floor(Math.random() * window.innerWidth);
            circle.style.cy = Math.floor(Math.random() * window.innerHeight);
            circle.style.fill = "#" + randomColor;
        }
    }
}


const kolo = new Circle();
document.querySelector("button").addEventListener("click", kolo.getValue);
document.querySelector("button").addEventListener("click", kolo.drawCircles);
document.querySelector("button").addEventListener("click", Hide);
document.querySelector("button").addEventListener("click", Timer);
function Hide() {
    const menu = document.querySelector(".start");
    menu.style.visibility = "hidden";
}
function Timer(){
    var seconds_left = document.querySelector("#number").value*2;
    var interval = setInterval(function () {
        document.getElementById("timer_div").innerHTML = --seconds_left;

        if (seconds_left <= 0) {
            const endGame = document.querySelector(".endGame");
            endGame.style.visibility ="visible";
            clearInterval(interval);
        }
    }, 1000);
}

const test = document.querySelector(".mainShape");
const bBox = test.getBBox();
console.log(bBox);