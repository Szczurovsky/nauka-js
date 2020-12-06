const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
class Ball {
    constructor(x) {
        this.x = x;
        this.y = this.getRandomNum(1, 100);
    }

    getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    losuj() {
        this.radius = this.getRandomNum(1, 5);
        // this.speedx = this.getRandomNum(10, 15);
        this.speedy = this.getRandomNum(1, 10);
    }

    updatePositiony() {
        this.y += this.speedy;
    }
    updatePositionX(i) {
        this.x += -3 * Math.pow(-1, i);
        // console.log(Math.pow(-1, i));
    }
}
const ballek = new Ball();
function losujPozycje() {
    return Math.floor(Math.random() * (canvas.width - 2));
}
let balls = [];
// const ball = new Ball(losujPozycje());
// ball.losuj();
setInterval(DodajKolka, 3000);
function DodajKolka() {
    for (let i = 0; i <= 60; i++) {
        const ball = new Ball(losujPozycje());
        ball.losuj();
        balls.push(ball);
    }

    for (let i = 0; i <= 60; i++) {
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
}
setInterval(animate, 50);
// setInterval(animate1, 500);
window.c = 5;
let snowy = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].y >= canvas.height) {
            balls.splice(i,1);
        }
        balls[i].updatePositiony();
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.closePath();
    }
    for(let i in balls){
        if (balls[i].y >= canvas.height) {
            
            snow.style.height = snowy+"px";
            snowy+=5;
            console.log(snowy);
        }
    }
}
const snow = document.querySelector(".snow");
function animate1() {
    window.c++;
    for (let i = 0; i < balls.length; i++) {
      
        balls[i].updatePositionX(window.c);
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.closePath();
    }
}
