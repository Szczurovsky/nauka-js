const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
class Ball {
    constructor(x) {
        this.x = x;
        this.y = 0;
    }

    getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    losuj() {
        this.radius = this.getRandomNum(10, 20);
        // this.speedx = this.getRandomNum(10, 15);
        this.speedy = this.getRandomNum(1, 5);
    }

    updatePositiony() {
        this.y += this.speedy;
    }
    updatePositionX(i) {
        this.x += -3 * Math.pow(-1, i);
        // console.log(Math.pow(-1, i));
    }
}
function losujPozycje() {
    return Math.floor(Math.random() * 1000);
}
let balls = [];
// const ball = new Ball(losujPozycje());
// ball.losuj();

for (let i = 0; i <= 50; i++) {
    const ball = new Ball(losujPozycje());
    ball.losuj();
    balls.push(ball);
}
// draw shape
for (let i = 0; i <= 50; i++) {
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}

setInterval(animate, 50);
setInterval(animate1, 500);
window.c = 5;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 1; i++) {
        balls[i].updatePositiony();
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.closePath();
    }
}
function animate1() {
    window.c++;
    for (let i = 0; i < 1; i++) {
        balls[i].updatePositionX(window.c);
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.closePath();
    }
}
