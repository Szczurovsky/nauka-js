class Note{
    constructor(id,title,content,pinned,color){
        this.id = id;
        this.title = title;
        this.content = content;
        this.pinned = pinned;
        this.color = color;
        this.createDate = new Date();
    }
}


class Notes {
    constructor(){
        this.db = new LS();
        this.ui = new UI();
        this.notes = [];
        // this.db.get();
        // this.notes=[];
        this.notesFromStorage = JSON.parse(localStorage.getItem(this.db.notesKey));
        this.notes = this.notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
        });
    }
    addNote(note){
        this.notes.push(note);
        this.db.save(this.notes);
    }
    removeNote(id){
        this.notesFromStorage.splice(id, 1);
        localStorage.setItem(this.db.notesKey, JSON.stringify(this.notesFromStorage));
        return this.notes;
    }
    getID(note){
        return note.id;
    }
    // getNotes(){
        
    // }
}
class LS {
    constructor(){
        this.notesKey = "notes";
    }
    save(notes){
        localStorage.setItem(this.notesKey, JSON.stringify(notes));
        window.location.reload();
    }
    // get(){
    //     const cos = localStorage.getItem(this.notesKey);
    //     return cos;
    // }
}

class UI {
    constuctor(){
        this.notesObj = document.querySelector("main");
    }
    drawNote(){
        
    }
}

const notes = new Notes;



document.querySelector("#noteAdd").addEventListener("click", ()=>{
    window.titles = document.querySelector("#noteTitle").value;
    var contents = document.querySelector("#noteContent").value;
    let id = notes.notes.length+1;
    const n1 = new Note(id,window.titles,contents,true,"red");
    notes.addNote(n1);
}
);

for (let note of notes.notes) {
    
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
    htmlRemove.innerHTML="Usuń";
    htmlSection.appendChild(htmlRemove);

    const htmlEdit = document.createElement("button");
    htmlEdit.classList.add("edit");
    htmlEdit.innerHTML="Edycja";
    htmlSection.appendChild(htmlEdit);

    const htmlCheck = document.createElement("button");
    htmlCheck.classList.add("check");
    htmlSection.appendChild(htmlCheck);
}

let buttonsDelete = document.querySelectorAll(".remove");
for (let index = 0; index < buttonsDelete.length; index++) {
    buttonsDelete[index].addEventListener("click",removeChild);   
}
function removeChild(ev){
    const element = ev.currentTarget.parentElement;
    const parentElement = element.parentElement;
    let index = Array.prototype.indexOf.call(parentElement.children,element);
    const main = document.querySelector("main");
    main.removeChild(element);
    notes.removeNote(index);
}





























































// // class Note{

// //         title = document.querySelector("#noteTitle").value;
// //         content = document.querySelector("#noteContent").value;

   
// // }
// window.title = document.querySelector("#noteTitle").value;
// window.content = document.querySelector("#noteContent").value;
// const note = {
//     title: window.title,
//     content: window.content,
//     color: window.color,
//     pinned: false,
//     createDate: new Date()
// };
// class Notes {
//     constructor(){
//     }
//     // zbior wszystkich notatek
//     addNote(note){
//         console.log("sssss");
//         this.notes = [];
//         const localStorageNotesKey = "notes";
//         this.notes.push(note);
//         localStorage.setItem(localStorageNotesKey, JSON.stringify(Notes.notes));
//         window.location.reload;
//     }
//     // dodawawanie
//     // usuwanie
//     // pobieranie
//     // zapisywanie
//     // edytowanie
// }

// // class UI {
// //     constructor(){}
// //     tworzenie "srodka" notatki
// // }
// // const note = new Note;
// const notes = new Notes();
// document.querySelector("#noteAdd").addEventListener("click",notes.addNote(note) );