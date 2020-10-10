// Jeden element - obsługa zdarzenia click
// 1. pobierz ref do obiektu
// const firstImg = document.getElementById('firstImage');
// const firstImg = document.querySelector('img');
// console.dir(firstImg);
// 2. zapisz się na zdarzenie kliknięcia
// firstImg.addEventListener('click', showLightbox);

// function showLightbox(ev) {
//     console.log(ev.target.src);
// }


// pobierz wszystkie grafiki z .gallery

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgs = document.querySelectorAll(".gallery img");
const hide = document.querySelector(".lightbox");
for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];
    img.addEventListener("click", showLightbox);
}

function showLightbox(ev) {
    // pobranie poprzedniego elementu
    
    const nextEl = ev.target.nextElementSibling;
    
    // pobierz elementy z html-a
    const lightbox = document.querySelector(".lightbox");
    const img = document.querySelector(".lightbox img");
    const prevEl = ev.target.previousElementSibling;
    console.log(nextEl);
    // pobierz url klikniętej grafiki
    const imgUrl = ev.target.src;
    // przypisz do grafiki w lightboxie
    img.src = imgUrl;
    // pokaż lightbox
    lightbox.classList.add("visible");
    prev.addEventListener("click",function(ev) {
        
        img.src = prevEl.src;
        ev.stopPropagation();
    });
    next.addEventListener("click",function(ev) {
        
        img.src = nextEl.src;
        ev.stopPropagation();
    });
    img.addEventListener("click", stop);
}


hide.addEventListener("click", hideLightbox);
// prev.addEventListener("click", stop);
function hideLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("visible");
}
function stop(ev){
    ev.stopPropagation();
}
