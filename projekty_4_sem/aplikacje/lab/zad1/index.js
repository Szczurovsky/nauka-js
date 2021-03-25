var Person = /** @class */ (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<h1>Witaj " + this.imie + " </h1>" +"<h1>i " + this.nazwisko + " </h1>" + "<h1>mam" + this.wiek + " </h1>";
        // document.body.innerHTML = `<h1>Your surname is ${this.nazwisko} </h1>`;
        // document.body.innerHTML = `<h1>Your age is ${this.wiek} </h1>`;
        console.log(this.imie);
        console.log(this.nazwisko);
        console.log(this.wiek);
        // console.log(this.imie)
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
