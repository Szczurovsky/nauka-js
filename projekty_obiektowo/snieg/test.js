const canvas = document.getElementById("myCanvas");
canvas.height = canvas.scrollHeight;
canvas.width = canvas.scrollWidth;
const ctx = canvas.getContext("2d");
const sniezynka = new Image();
sniezynka.src = "./sniezynka.png";

function draw(ctx, sniezynka) {
    ctx.drawImage(sniezynka, 20, 20, 300, 100);
}
draw(ctx, sniezynka);
