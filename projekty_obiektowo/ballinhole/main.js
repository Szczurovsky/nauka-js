
document.querySelector("button").addEventListener("click", Hide);



class Circle {
    getValue(){
        const textArea = document.querySelector("#number").value;
        const svg = document.querySelector("svg");

        for (let i = 0; i < textArea; i++) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
            circle.classList.add("shape");
            svg.appendChild(circle);
        }
    }
    drawCircles() {
        const board = document.querySelectorAll(".shape");
        for (let i = 0; i < board.length; i++) {
            const circle = board[i];
            circle.style.r = "40px";
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            circle.style.cx = Math.floor(Math.random() * window.innerWidth);
            circle.style.cy = Math.floor(Math.random() * window.innerHeight);
            circle.style.fill = "#" + randomColor;
        }}
    Tests(){
        console.log("geehehe");
    }
}

const kolo = new Circle();
document.querySelector("button").addEventListener("click", kolo.getValue);
document.querySelector("button").addEventListener("click", kolo.drawCircles);



function Hide() {
    const menu = document.querySelector(".wrapper");
    menu.style.visibility = "hidden";
}

// const shape = document.querySelector(".shape");
// const test = window.innerWidth - 40;
// const planszaW = window.innerWidth - 80;
// const planszaH = window.innerHeight - 80;
// shape.style.r = "40px";
// let randomColor = Math.floor(Math.random()*16777215).toString(16);
// shape.style.cx = (Math.floor((Math.random() * (planszaW))))+80;
// shape.style.cy = (Math.floor((Math.random() * (planszaH))))+80;
// shape.style.fill = "#" + randomColor;

// console.log(test);
