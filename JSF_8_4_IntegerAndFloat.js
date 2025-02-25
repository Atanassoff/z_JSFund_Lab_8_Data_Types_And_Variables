function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum);
}

integerAndFloat(9, 100, 1.1)
//110.1 - Float
integerAndFloat(100, 200, 303)
//603 - Integer