const prompt = require('prompt-sync')();
//Progarm to read single digit and write number in word using case statement
{
    let Number = prompt("Enter single digit number ");
    console.log(`Entered digit is ${Number}`);
    switch (Number) {
        case 0:
            console.log("Zero");
            break; 
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        default:
            console.log("Invalid Number");
    }
}

//Program to display the weekday
let userDate = prompt("Enter the date mm/dd/yyyy");
console.log(`Entered date is ${userDate}`);
let date = new Date(userDate);
switch (date.getDay()) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("Invalid Date");
}

//Program to read a number 1, 10, 100, 1000 and display unit,ten,hundred
{
    let number = prompt("Enter the number 1, 10, 100, 1000, 10000, 100000 ");
    console.log(`Entered number is ${number}`);
    switch (number) {
        case 1:
            console.log("unit");
            break;
        case 10:
            console.log("tens");
            break;
        case 100:
            console.log("hundred");
            break;
        case 1000:
            console.log("thousand");
            break;
        case 10000:
            console.log("tens of thousand");
            break;
        case 100000:
            console.log("lacs");
            break;
        default:
            console.log("please Enter Correct Number!!!")
    }
}

//Program to take user input and do unit conversions
var inputNumber = prompt("Enter the number");
console.log(`Entered number is ${inputNumber}`);
let conversionType = Math.floor(Math.random() * 10) % 4 + 1;
let convertedValue = 0;
switch (conversionType) {
    case 1:
        console.log("Feet to Inch");
        convertedValue = 12 * inputNumber;
        console.log("Value in Inch is: " + convertedValue);
        break;
    case 2:
        console.log("Feet to Meter");
        convertedValue = 0.3048 * inputNumber;
        console.log("Value in meters is: " + convertedValue);
        break;
    case 3:
        console.log("Inch to Feet");
        convertedValue = inputNumber / 12;
        console.log("Value in feet is: " + convertedValue);
        break;
    case 4:
        console.log("Meter to Feet");
        convertedValue = inputNumber / 0.3048;
        console.log("Value in meters is: " + convertedValue);
        break;
    default:
        console.log("Thank you !!!!");
}