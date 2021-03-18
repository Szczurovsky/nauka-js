class Person1{
    imie: String;
    nazwisko: String;
    wiek: Number;
    constructor(imie: String, nazwisko: String, wiek:Number){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
}
    Show(){
        document.body.innerHTML = `<h1>Hello ${this.imie} </h1>`;
        // document.body.innerHTML = `<h1>Your surname is ${this.nazwisko} </h1>`;
        // document.body.innerHTML = `<h1>Your age is ${this.wiek} </h1>`;
        console.log(this.imie)
        console.log(this.nazwisko)
        console.log(this.wiek)
        // console.log(this.imie)
    }
}

let p = new Person("John", "Blake", 11);
p.Show();