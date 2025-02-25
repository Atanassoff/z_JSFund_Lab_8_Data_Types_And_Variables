function echoType(x) {
    let result = typeof (x);
    console.log(result);
    if (result === "string" || result === "number") {
        console.log(x);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}

echoType('Hello, JavaScript!')
//string 
//Hello, JavaScript!
echoType(18)
//number 
//18
echoType(null)
//object 
//Parameter is not suitable for printing