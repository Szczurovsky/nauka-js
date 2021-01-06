class Note{
    constructor(miasto , description, icon,temperature,pressure, humidity,color){
        this.miasto = miasto;
        this.description = description;
        this.icon = icon;
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.color = color;
        this.createDate = new Date();
    }
}
let miasto,description,icon,temperature,pressure, humidity;

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
    addNote(n){
        // let id = this.notes.length + 1;
        // const n1 = new Note(id,title,window.contents,true,window.color);
        this.notes.push(n);
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
    removeChild(ev){
        const element = ev.currentTarget.parentElement;
        const parentElement = element.parentElement;
    
        let index = Array.prototype.indexOf.call(parentElement.children,element);
        const main = document.querySelector("main");
        main.removeChild(element);
        notes.removeNote(index);
    }
    set_Color(ev){
        const target = ev.currentTarget;
        let styles = window.getComputedStyle(target);
        window.color = styles.getPropertyValue("background-color");
        console.log(target);
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
            const htmlMiasto = document.createElement("h1");
            const htmlDescription = document.createElement("h4");
            const htmlIcon = document.createElement("h4");
            htmlIcon.innerHTML = note.icon;
            
            const htmlTemperature = document.createElement("h4");
            htmlTemperature.innerHTML = note.temperature;
          

            const htmlPressure = document.createElement("h4");
            htmlPressure.innerHTML = note.pressure;
           

            const htmlHumidity = document.createElement("h4");
            htmlHumidity.innerHTML = note.humidity;
            
            const htmlDate = document.createElement("p");
    




            // (miasto , description, icon,temperature,pressure, humidity, window.color);
            htmlSection.classList.add("note");
            htmlMiasto.innerHTML = note.miasto;
            htmlSection.dataset.id = note.id;
            htmlDescription.innerHTML = note.description;
            htmlDate.innerHTML = note.createDate.toLocaleString();
    
            htmlSection.appendChild(htmlMiasto);
            htmlSection.appendChild(htmlDescription);

            htmlSection.appendChild(htmlIcon);
            htmlSection.appendChild(htmlTemperature);
            htmlSection.appendChild(htmlPressure);
            htmlSection.appendChild(htmlHumidity);
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
    // // window.titles = document.querySelector("#noteTitle").value;
    // let miasto = document.querySelector("#noteTitle").value;
    // // window.contents = document.querySelector("#noteContent").value;
    getResults();

});
notes.notesMap();
ui.drawNote(notes.notes);
let buttonsDelete = document.querySelectorAll(".remove");
for (let index = 0; index < buttonsDelete.length; index++) {
    buttonsDelete[index].addEventListener("click",notes.removeChild);   
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
}
const colorsButton = document.querySelectorAll(".colors button");
for (let index = 0; index < colorsButton.length; index++) {
    colorsButton[index].addEventListener("click", notes.set_Color); 
}

// const inputValue = document.querySelector("#miasto");
const api = {
    key: "334f64f5734edf8ec8c3143c2844165b",
    base: "https://api.openweathermap.org/data/2.5/"
};
async function getResults(){

    city = document.querySelector("#noteTitle").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&APPID=334f64f5734edf8ec8c3143c2844165b`)
      
        .then(function(response){
            console.log(response);
            let data = response.json();
            return data;
        })
        .then(function(data){
            console.log("dziala interwal");
            // miasto , description, icon,temperature,pressure, humidity,color
            miasto= "Miasto " + data.name + ", " + data.sys.country;
            description ="Pogoda " + data.weather[0].description;
            icon = data.weather[0].icon;
            temperature ="Temperatura "+ parseFloat(data.main.temp-273.15).toFixed(1);
            pressure ="Ciśnienie " + data.main.pressure;
            humidity ="Widoczność " +  data.main.humidity;
        })
        .then(displayWeather);

}

function log(log){
    console.log(log);
}
function displayWeather(){
    const iconIMG=`<img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>`;
    const n =  new Note(miasto , description, iconIMG,temperature,pressure, humidity, window.color);
    notes.addNote(n);
}

