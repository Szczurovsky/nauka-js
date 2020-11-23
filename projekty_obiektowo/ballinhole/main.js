/* eslint-disable indent */
class Circle {
  constructor() {
    this.mainCircle = {
      X: null,
      Y: null,
    };
  }
  getValue() {
    const textArea = document.querySelector("#number").value;
    const svg = document.querySelector("svg");

    for (let i = 0; i < textArea; i++) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
circle.id=i;
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
  removeCircles(id) {
    const board = document.querySelectorAll(".shape");
    const svg = document.querySelector("svg");
    svg.removeChild(board[id]);
  }

  circleColor() {
    const board = document.querySelectorAll(".shape");
    for (let i = 0; i < board.length; i++) {
      const circle = board[i];
      this.color = circle.style.fill;
    }
  }
  circleCords() {
    const board = document.querySelectorAll(".shape");
    var cords = [];
    for (let i = 0; i < board.length; i++) {
      const circle = board[i];
      const coordinates = {
        X: circle.style.cx,
        Y: circle.style.cy,
        color: circle.style.fill,
      };

      cords.push(coordinates);
    }
    return cords;
  }
  game() {}
  // test2(){
  //     setInterval(test3, 1000);
  //     function test3(){
  //         let c = this.circleMove;
  //         let d = this.circleCords;
  //         console.log("Move" + c);
  //     }
  // }
  handleOrientation(event) {
    let y = event.beta;
    let x = event.gamma;

    x += 0;
    y += 0;

    window.speedX = x;
    window.speedY = y;
  }
}

// class gameRule{
//     constructor(){
//         this.circle=new Circle();

//     }
//     test1(){
//         let test2 = this.circle.circleMove;
//         console.log(test2);
//     }
// }

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

const garden = document.querySelector("body");
const ball = document.querySelector(".mainShape");

const a = ball.getBBox();

// handleOrientation(event) {
//     var y = event.beta;
//     var x = event.gamma;

//     x+=0;
//     y+=0;

//     window.speedX = x;
//     window.speedY = y;
//     console.log(window.speedX);
// }
let coordinatesArr = [];
const menu = document.querySelector(".start");
function game() {
  const constAX = a.x;
  ball.style.cx = constAX;
  let parseBallX = parseInt(ball.style.cx);
  const constBY = a.y;
  ball.style.cy = constBY;
  let parseBallY = parseInt(ball.style.cy);

  setInterval(move, 1);
  function move() {
    let speedX = window.speedX * 0.05;
    let speedY = window.speedY * 0.05;
    if (isNaN(speedX)) {
      speedX = constAX;
    } else {
      let j = 0;
      parseBallX += speedX;
      ball.style.cx = parseBallX;
      parseBallY += speedY;
      ball.style.cy = parseBallY;

      window.circle = {
        X: ball.style.cx,
        Y: ball.style.cy,
      };
      coordinatesArr = kolo.circleCords();
      let wynik =
        ((window.circle.X - coordinatesArr[0].X) ^ 2) +
        ((window.circle.Y - coordinatesArr[0].Y) ^ 2);
      if (Math.sign(wynik) == -1) {
        wynik *= -1;
      }
      let math = Math.sqrt(wynik);
      console.log(math);
      if (math <= 1) {
        kolo.removeCircles(j);
        j++;
      }
      if(coordinatesArr.length<=0){
        console.log("ssss");
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", game);
window.addEventListener("deviceorientation", (ev) =>
  kolo.handleOrientation(ev)
);
