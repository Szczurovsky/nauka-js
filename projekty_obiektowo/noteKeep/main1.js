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
        this.notes=[];
    }
    addNote(note){
        this.notes.push(note);
        return this.notes;
    }
    removeNote(id){
        this.notes.splice(id, 1);
        return this.notes;
    }
}

const notes = new Notes;

document.querySelector("#noteAdd").addEventListener("click", ()=>{
    window.titles = document.querySelector("#noteTitle").value;
    var contents = document.querySelector("#noteContent").value;
    let id = notes.notes.length;
    const n1 = new Note(id,window.titles,contents,true,"red");
    notes.addNote(n1);
}
);

































































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

