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
        this.notesFromStorage = JSON.parse(localStorage.getItem(this.db.notesKey));
        // this.notesFromStorage = JSON.parse(localStorage.getItem(this.db.notesKey));
        // this.notes = this.notesFromStorage.map(note => {
        //     note.createDate = new Date(note.createDate);
        //     return note;
        // });
    }
    addNote(){
        let id = this.notes.length + 1;
        const n1 = new Note(id,window.titles,window.contents,true,window.color);
        this.notes.push(n1);
        this.db.save(this.notes);
    }
    removeNote(id){
        this.notesFromStorage.splice(id, 1);
        localStorage.setItem(this.db.notesKey, JSON.stringify(this.notesFromStorage));
        window.location.reload();    
    }
    getID(note){
        return note.id;
    }
    notesMap(){
        
        this.notes = this.notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
        });
    }
    editNote(id){
        let existing = localStorage.getItem("notes");
        let text = document.querySelector(".text").value;
        existing = existing ? JSON.parse(existing):{};
        console.log(existing);
        existing[id].content = text;
        localStorage.setItem(this.db.notesKey, JSON.stringify(existing));
        window.location.reload();
    }
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
    drawNote(notes){
        for(let note of notes){
            const htmlSection = document.createElement("section");
            const htmlTitle = document.createElement("h1");
            const htmlContent = document.createElement("p");
            const htmlDate = document.createElement("h4");
    
            htmlSection.classList.add("note");
            htmlTitle.innerHTML = note.title;
            htmlSection.dataset.id = note.id;
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
    }
    drawEdit(event){
        const textbox = document.createElement("textarea");
        const buttonOk = document.createElement("button");
        buttonOk.classList.add("ok");
        buttonOk.innerHTML="Ok";
        textbox.classList.add("text");
        textbox.cols="25";
        textbox.rows="5";
        textbox.placeholder="wpisz tekst do zmiany!";
        console.log("edit dziala");
        const parent = event.currentTarget.parentElement;
        parent.appendChild(textbox);
        parent.appendChild(buttonOk);
    }
}

const notes = new Notes;
const ui = new UI;

document.querySelector("#noteAdd").addEventListener("click", ()=>{
    window.titles = document.querySelector("#noteTitle").value;
    window.contents = document.querySelector("#noteContent").value;
    notes.addNote();
});
notes.notesMap();
ui.drawNote(notes.notes);
let buttonsDelete = document.querySelectorAll(".remove");
for (let index = 0; index < buttonsDelete.length; index++) {
    buttonsDelete[index].addEventListener("click",removeChild);   
}
function removeChild(ev){
    const element = ev.currentTarget.parentElement;
    const parentElement = element.parentElement;
    // const id = parentElement.dataset.id;
    // const index = notes.notes.findIndex(el => el.id === id);
    let index = Array.prototype.indexOf.call(parentElement.children,element);
    const main = document.querySelector("main");
    main.removeChild(element);
    notes.removeNote(index);
}
let buttonsEdit = document.querySelectorAll(".edit");
for (let index = 0; index < buttonsEdit.length; index++) {
    buttonsEdit[index].addEventListener("click",(ev)=>{
        ui.drawEdit(ev);
        document.querySelector(".ok").addEventListener("click",(ev)=>{
            const element = ev.currentTarget.parentElement;
            const parentElement = element.parentElement;
            let index = Array.prototype.indexOf.call(parentElement.children,element);
            notes.editNote(index);
        });
    });
}


let noteStorage = localStorage.getItem("notes");
noteStorage = noteStorage ? JSON.parse(noteStorage):{};
const test = document.querySelectorAll(".note");
for (let index = 0; index < noteStorage.length; index++) {

    test[index].style.background = noteStorage[index].color;
    console.log(noteStorage[index].color);
}
const colorsButton = document.querySelectorAll(".colors button");
for (let index = 0; index < colorsButton.length; index++) {
    colorsButton[index].addEventListener("click", set_Color); 
}

function set_Color(ev){
    const target = ev.currentTarget;
    let styles = window.getComputedStyle(target);
    window.color = styles.getPropertyValue("background-color");
    console.log(target);
}