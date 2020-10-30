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

// zmiana html-a z poziomu js-a - sposób brutalny, mało kontrolowany
// for (let note of notes) {
//     const htmlNote = `
//         <section class="note">
//         <h1>${note.title}</h1>
//         <p>${note.content}</p>
//         <h4>${note.createDate.toLocaleString()}</h4>
//         </section>
//     `;
//     const main = document.querySelector("main");
//     main.innerHTML += htmlNote;
// }
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
}
// usuwanie elementów
// main.removeChild()

// notatka:
// Tytuł
// Treść
// Kolor notatki
// Możliwość przypięcia do góry na liście notatek
// Datę utworzenia
