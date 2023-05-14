
//In this program the user can convert a temparature from one metric to another. 
//The user inputs metric they would like to convert from, metric they would like to convert to and a number.
//The program then outputs the number in chosen metric, using if statement.   

let inputMetric = prompt("In which metric is the temperature you are converting? \n C - Celsius \n F - Fahrenheit \n K - Kelvin" )
let inputNum =  Number(prompt("Please enter the number you want to convert"))
let inputMetrictoConvert =  prompt("To which metric would you like to convert the temperature? \n C - Celsius \n F - Fahrenheit \n K - Kelvin")


// let inputMetric = "c"
// let inputNum = 40
// let inputMetrictoConvert = "k"


//Converting from Cesius to Fahrenheit 
if (inputMetric == "c" && inputMetrictoConvert == "f") {
    console.log( `${inputNum}\u00B0C is ${inputNum*9/5+32}F.`);
}
//Converting from Cesius to Kelvin 
else if (inputMetric == "c" && inputMetrictoConvert == "k") {
    console.log( `${inputNum}\u00B0C is ${inputNum+273.15}K.`);
}
//Converting from Fahrenheit to Cesius 
else if (inputMetric == "f" && inputMetrictoConvert == "c") {
    console.log( `${inputNum}F is ${(inputNum-32)*5/9}\u00B0C.`);
}
//Converting from Fahrenheit to Kelvin 
else if (inputMetric == "f" && inputMetrictoConvert == "k") {
    console.log( `${inputNum}F is ${(inputNum+459.67)*5/9}K.`)
}
//Converting from Kelvin to Cesius 
else if (inputMetric == "k" && inputMetrictoConvert == "c") {
    console.log( `${inputNum}K is ${inputNum-273.15}\u00B0C.`)
}

//Converting from Kelvin to Fahrenheit 
else if (inputMetric == "k" && inputMetrictoConvert == "f") {
    console.log(`${inputNum}K is ${inputNum*9/5-459.67}F.`)
}
else {

}