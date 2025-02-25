function specialNumbers(num){
    let sumOfDigits = 0;
    let result = "";
    for(let i = 1; i <= num; i++){
        for(let j = 0; j < String(i).length; j++){
            sumOfDigits += Number(String(i)[j]);
        }
        result = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11 ? `${i} -> True` : `${i} -> False`;
        console.log(result);
        sumOfDigits = 0;
    }
}

specialNumbers(15) 
//1 -> False 
//2 -> False 
//3 -> False 
//4 -> False 
//5 -> True 
//6 -> False 
//7 -> True 
//8 -> False 
//9 -> False 
//10 -> False 
//11 -> False
//12 -> False 
//13 -> False 
//14 -> True 
//15 -> False
specialNumbers(29) 
//1 -> False 
//2 -> False 
//3 -> False 
//4 -> False 
//5 -> True
//6 -> False 
//7 -> True 
//8 -> False 
//9 -> False 
//10 -> False 
//11 -> False 
//12 -> False 
//13 -> False 
//14 -> True 
//15 -> False 
//16 -> True 
//17 -> False 
//18 -> False 
//19 -> False 
//20 -> False