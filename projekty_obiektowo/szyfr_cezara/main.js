var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;
const btn = document.querySelector(".jazda");
const wynik = document.querySelector("#finish");
function runCipher() {
    var cipherText = document.querySelector("#cypher").value;
    var cipherOffset = document.querySelector("#offset").value;
    cipherOffset = cipherOffset % alphabet.length;
    var cipherFinish = "";

    for (let i = 0; i < cipherText.length; i++) {
        var letter = cipherText[i];
        var upper = letter == letter.toUpperCase();
        letter = letter.toLowerCase();

        var index = alphabet.indexOf(letter);
        if (index == -1) {
            cipherFinish += letter;
        } else {
            index = index + cipherOffset + alphabet.length;
            var nextLetter = fullAlphabet[index];
            if (upper) nextLetter = nextLetter.toUpperCase();
            cipherFinish += nextLetter;
        }
    }

    wynik.innerHTML= cipherFinish;
}

btn.addEventListener("click",runCipher);
