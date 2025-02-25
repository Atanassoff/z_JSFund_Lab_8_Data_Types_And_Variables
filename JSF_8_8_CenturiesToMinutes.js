function centuriesToMinutes(cent){
    let years = cent * 100;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let min = hours * 60;
    console.log(`${cent} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
}

//365.2422

centuriesToMinutes(1)
//1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
centuriesToMinutes(5) 
//5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
