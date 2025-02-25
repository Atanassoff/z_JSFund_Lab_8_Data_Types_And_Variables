function triplesOfLatinLetters(n) {
    let letter1 = "";
    let letter2 = "";
    let letter3 = "";
    n = Number(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                letter1 = String.fromCharCode(i + 97);
                letter2 = String.fromCharCode(j + 97);
                letter3 = String.fromCharCode(k + 97);
                console.log(letter1 + letter2 + letter3);
            }
        }
    }
}

triplesOfLatinLetters(3)
triplesOfLatinLetters(2)