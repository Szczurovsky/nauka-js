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

  handleOrientation(event) {
    let y = event.beta;
    let x = event.gamma;

    x += 0;
    y += 0;

    window.speedX = x;
    window.speedY = y;
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
const board = document.querySelectorAll(".shape");
const menu = document.querySelector(".start");
function game() {
  const constAX = a.x;
  ball.style.cx = constAX;
  let parseBallX = parseFloat(ball.style.cx);
  const constBY = a.y;
  ball.style.cy = constBY;
  let parseBallY = parseFloat(ball.style.cy);

 const inter = setInterval(move, 10);
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
        (Math.pow(parseFloat(window.circle.X) - parseFloat(coordinatesArr[j].X),2)) +
        (Math.pow(parseFloat(window.circle.Y) - parseFloat(coordinatesArr[j].Y),2));
        // let pCiX1 = Math.pow(window.circle.X);
        // let pCoX1 = math.pow(coordinatesArr[j].X);
      // if (Math.sign(wynik) == -1) {
      //   wynik *= -1;
      // }
      let math = Math.sqrt(wynik);
      console.log(math);
      if (math < 20) {

        kolo.removeCircles(j);
        window.board1 = document.querySelectorAll(".shape");
        
        j++;
      }
      if(window.board1.length==0){
        const winGame = document.querySelector(".winGame");
      winGame.style.visibility = "visible";
      // window.location.reload();
      clearInterval(inter);
        
      }
    }
  }
}

document.querySelector(".startGame").addEventListener("click", game);
window.addEventListener("deviceorientation", (ev) =>
  kolo.handleOrientation(ev)
);
