const localStorageNotesKey = "notes";

let notes = [];

document.querySelector("#noteAdd").addEventListener("click", onNewNote);
document.querySelector("#noteAdd").addEventListener("click", setItems);
function onNewNote() {
    window.title = document.querySelector("#noteTitle").value;
    window.content = document.querySelector("#noteContent").value;
    
    const note = {
        title: window.title,
        content: window.content,
        colour: "#ff0000",
        pinned: false,
        createDate: new Date()
    };

    notes.push(note);
}

function setItems(){
    localStorage.setItem(localStorageNotesKey, JSON.stringify(notes));
    window.location.reload();
}

// nowa notatka


// notatka dodana do tablicy notatek

// tablica zapisana w localStorage
// localStorage.setItem(localStorageNotesKey, JSON.stringify(notes));

// odczytanie tablicy notatek z localStorage
const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNotesKey));
notes = notesFromStorage.map( note => {
    note.createDate = new Date(note.createDate);
    return note;
});

// zmiana html-a z poziomu js-a - sposób obiektowy
for (let note of notes) {
    
    const htmlSection = document.createElement("section");
    const htmlTitle = document.createElement("h1");
    const htmlContent = document.createElement("p");
    const htmlDate = document.createElement("h4");

    htmlSection.classList.add("note");
    htmlTitle.innerHTML = note.title;
    htmlContent.innerHTML = note.content;
    htmlDate.innerHTML = note.createDate.toLocaleString();

    htmlSection.appendChild(htmlTitle);
    htmlSection.appendChild(htmlContent);
    htmlSection.appendChild(htmlDate);
    
    const main = document.querySelector("main");
    main.appendChild(htmlSection);

    const htmlRemove = document.createElement("button");
    htmlRemove.classList.add("remove");
    htmlSection.appendChild(htmlRemove);
    // for (let i = 0; i < notes.length; i++) {
    //     // const element = notes[i];
    //     let idNumber = 1;
    //     htmlSection.id=idNumber;
    //     idNumber++;
    // }
}
document.querySelector("main section").id=1;
document.querySelector("main section~section").id=2;
let idNumber = 1;
// document.getElementById(idNumber).addEventListener("click",() =>{
//     const main = document.querySelector("main");
//     const usun = document.getElementById("1");

//     let tabliczka = [usun];
//     // main.removeChild(usun);
//     localStorage.removeItem(tabliczka, JSON.stringify(notes));
//     // localStorage.setItem(localStorageNotesKey, JSON.stringify(notes));
//     console.log(localStorageNoteKey);
//     window.location.reload();
// });

var buttonsDelete = document.querySelectorAll(".remove");
for (let index = 0; index < buttonsDelete.length; index++) {
    buttonsDelete[index].addEventListener("click",removeChild);   
}
function removeChild(ev){
    
    const target = ev.currentTarget;
    const parent = target.parentElement;
    const main = document.querySelector("main");
    localStorage.setItem(localStorageNotesKey, JSON.stringify(notes));
    notes = localStorage.getItem(localStorageNotesKey);
    console.log(parent);
    main.removeChild(parent);
   // window.location.reload();
}
// buttonsDelete[idNumber].addEventListener("click",removeChild);
// function removeChild(){
//     const main = document.querySelector("main");
//     const usun = document.getElementById("1");
//     main.removeChild(usun);
// }
// for (let i = 0; i < notes.length; i++) {
//     const element = notes[i];
//     let idNumber = 1;
//     const noteClass = document.querySelector("section");
//     noteClass.id="#"+idNumber;
//     idNumber++;
// }
// usuwanie elementów
// main.removeChild()

// notatka:
// Tytuł
// Treść
// Kolor notatki
// Możliwość przypięcia do góry na liście notatek
// Datę utworzenia