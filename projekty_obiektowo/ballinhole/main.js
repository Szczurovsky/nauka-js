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
document.querySelector(".startGame").addEventListener("click", () => {
    kolo.getValue();
    kolo.drawCircles();
    Hide();
    Timer();
});
document.querySelector(".newGame").addEventListener("click", () => {
    window.location.reload();
});
function Hide() {
    const menu = document.querySelector(".start");
    menu.style.visibility = "hidden";
}
function Timer() {
    let seconds_left = document.querySelector("#number").value * 1000;
    const interval = setInterval(function () {
        document.getElementById("timer_div").innerHTML = --seconds_left;

        if (seconds_left <= 0) {
            const endGame = document.querySelector(".endGame");
            endGame.style.visibility = "visible";
            clearInterval(interval);
        }
    }, 1000);
}

// const mainCircle = document.querySelector(".mainShape");
// const circleData = mainCircle.getBBox();
// const body = document.querySelector("body");
// const gameWidth = body.offsetWidth;

// const gameHeight = body.offsetHeight;
// const maxX = gameWidth - circleData.width;
// const maxY = gameWidth - circleData.height;
// console.log(circleData.x);
// function handleOrientation(event){
//     let x = event.beta;
//     let y = event.gamma;
//     if(x>90) {x = 90;}
//     if(x <- 90) {x = -90;}
//     x += 90;
//     y += 90;
//     mainCircle.cx = (maxY*y/180 - 10);
//     console.log(maxX);
// }
const garden = document.querySelector("body");
const ball = document.querySelector(".mainShape");
// ball.style.r = "10px";
// ball.style.cx = "50%";
// ball.style.cy = "50%";
const a = ball.getBBox();

// var output = document.querySelector(".output");

var maxX = garden.clientWidth - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
    var y = event.beta; // In degree in the range [-180,180]
    var x = event.gamma; // In degree in the range [-90,90]

    // output.innerHTML  = "beta : " + x + "\n";
    // output.innerHTML += "gamma: " + y + "\n";

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    // if (x >  90) { x =  90;}
    // if (x < -90) { x = -90;}

    // To make computation easier we shift the range of
    // x and y to [0,180]
    // x += 90;
    // y += 90;
    x+=0;
    y+=0;

    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball
    // ball.style.cy  = (maxX*x/180 - 5) + "px";
    // ball.style.cx = (maxY*y/180 - 5) + "px";
    window.speedX = x;
    window.speedY = y;
    console.log(window.speedX);
}


// ustawienie stalej wartosci polozenia mainShape
const constAX = a.x;
ball.style.cx = constAX;
let parseBallX=parseInt(ball.style.cx);
const constBY = a.y;
ball.style.cy = constBY;
let parseBallY=parseInt(ball.style.cy);
const menu = document.querySelector(".start");
function test() {
    // setInterval(()=>{ball.style.cx += window.speedX;}, 500);
    // setInterval(()=>{a.x += window.speedX;console.log(a.x);}, 5000);
    setInterval(move, 1);
    function move() {
        
        let speedX = window.speedX*0.05;
        let speedY = window.speedY*0.05;
        // eslint-disable-next-line use-isnan
        if(isNaN(speedX)){
            speedX=constAX;}
        else{
            parseBallX += speedX;
            ball.style.cx = parseBallX;
            parseBallY += speedY;
            ball.style.cy = parseBallY;
        }     
    }
}
// function test1(){
//     setInterval(()=>{ball.style.})
// }
window.addEventListener("DOMContentLoaded", test);
window.addEventListener("deviceorientation", handleOrientation);
// kolo.animateCircle();
