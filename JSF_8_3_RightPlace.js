function rightPlace(arg1, char, arg2) {
    let newArg = arg1.replace('_', char);
    let result = newArg === arg2 ? "Matched" : "Not Matched";
    console.log(result);
}

rightPlace('Str_ng', 'I', 'Strong')
//Not Matched
rightPlace('Str_ng', 'i', 'String')
//Matched 