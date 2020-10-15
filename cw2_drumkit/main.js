document.body.addEventListener("keypress", onKeyPress);
function onKeyPress(ev){
    if (ev.code==="KeyA"){
        const sound = document.querySelector("#boom");
        sound.play();
    }
}