const localStorageNotesKey = "notes";
let notes = [];


// let colors = document.querySelector(".red");
// let styles = window.getComputedStyle(colors);
// let color = styles.getPropertyValue("background-color");


document.querySelector("#noteAdd").addEventListener("click", onNewNote);
document.querySelector("#noteAdd").addEventListener("click", setItems);
// document.querySelector(".colors button").addEventListener("click", set_Color);

function set_Color(ev){
    const target = ev.currentTarget;
    let styles = window.getComputedStyle(target);
    window.color = styles.getPropertyValue("background-color");
    console.log(target);
}
function onNewNote() {
    window.title = document.querySelector("#noteTitle").value;
    window.content = document.querySelector("#noteContent").value;

    const note = {
        title: window.title,
        content: window.content,
        color: window.color,
        pinned: false,
        createDate: new Date()
    };


    notes.push(note);
}

// let index = Array.prototype.indexOf.call(parentParent.children,parent);



// let existing = localStorage.getItem("notes");
//         let text1 = document.querySelector(".text").value;
//         //parsowanie jej do tablicy
//         existing = existing ? JSON.parse(existing):{};
//         existing[index].content = text1;
//         console.log(existing[index].content);

const colorsButton = document.querySelectorAll(".colors button");
for (let index = 0; index < colorsButton.length; index++) {
    colorsButton[index].addEventListener("click", set_Color); 
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

    const htmlEdit = document.createElement("button");
    htmlEdit.classList.add("edit");
    htmlSection.appendChild(htmlEdit);
}

let buttonsDelete = document.querySelectorAll(".remove");
for (let index = 0; index < buttonsDelete.length; index++) {
    buttonsDelete[index].addEventListener("click",removeChild);   
}
function removeChild(ev){   
    const target = ev.currentTarget;
    const parent = target.parentElement;
    const parentParent = parent.parentElement;
    const main = document.querySelector("main");
    let index = Array.prototype.indexOf.call(parentParent.children,parent);
    removeLocalStorage(index);
    main.removeChild(parent);
    window.location.reload();
}
function removeLocalStorage(index){
    notesFromStorage.splice(index,1);
    localStorage.setItem(localStorageNotesKey, JSON.stringify(notesFromStorage));
}


// ****************************
let buttonsEdit = document.querySelectorAll(".edit");
for (let index = 0; index < buttonsEdit.length; index++) {
    buttonsEdit[index].addEventListener("click",note_edit_interface);
    
}

function note_edit_interface(ev){
    //dodanie potrzebnych przyciskow i ich klas
    const textbox = document.createElement("textarea");
    const buttonOk = document.createElement("button");
    buttonOk.classList.add("ok");
    textbox.classList.add("text");
    const target = ev.currentTarget;
    const parent = target.parentElement;
    const parentParent = parent.parentElement;
    parent.appendChild(textbox);
    parent.appendChild(buttonOk);
    console.log(parent);
    document.querySelector(".ok").addEventListener("click",note_edit);
    function note_edit(){
        //nasluchiwanie indexu
        let index = Array.prototype.indexOf.call(parentParent.children,parent);
        //sciagniecie aktualnej localstorage
        let existing = localStorage.getItem("notes");
        let text1 = document.querySelector(".text").value;
        //parsowanie jej do tablicy
        existing = existing ? JSON.parse(existing):{};
        existing[index].content = text1;
        console.log(existing[index].content);
        // zapis w tablicy
        localStorage.setItem(localStorageNotesKey, JSON.stringify(existing));
        window.location.reload();
    }
}

let noteColor = localStorage.getItem("notes");
noteColor = noteColor ? JSON.parse(noteColor):{};
const test = document.querySelectorAll(".note");
for (let index = 0; index < noteColor.length; index++) {

    test[index].style.background = noteColor[index].color;
    // let noteColors = window.getComputedStyle(noteProperty);
    // let noteColor = noteColors.getComputedStyle("background");
    console.log(noteColor[index].color);
}
