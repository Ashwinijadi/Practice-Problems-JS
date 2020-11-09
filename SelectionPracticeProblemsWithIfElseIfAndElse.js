const prompt = require('prompt-sync')();

//Progarm to read single digit number and write number in word
{
    let number = prompt("Enter a single digit number");
    console.log(`Entered digit is ${number}`);
    if (number == 0) {
        console.log("Zero");
    } else if (number == 1) {
        console.log("One");
    } else if (number == 2) {
        console.log("two");
    } else if (number == 3) {
        console.log("three");
    } else if (number == 4) {
        console.log("four");
    } else if (number == 5) {
        console.log("five");
    } else if (number == 6) {
        console.log("six");
    } else if (number == 7) {
        console.log("seven");
    } else if (number == 8) {
        console.log("eight");
    } else if (number == 9) {
        console.log("nine");
    } else {
        console.log("Entered number is not a single digit number");
    }
}

//Read a Number and Display the week day
{
    let userDate = prompt("Enter the date mm/dd/yyyy");
    console.log(`Entered date is ${Date}`);
    let date = new Date(userDate);
    if (date.getDay() == 0) {
        console.log("sunday");
    } else if (date.getDay() == 1) {
        console.log("monday");
    } else if (date.getDay() == 2) {
        console.log("tuesday");
    } else if (date.getDay() == 3) {
        console.log("wednesday");
    } else if (date.getDay() == 4) {
        console.log("thursday");
    } else if (date.getDay() == 5) {
        console.log("friday");
    } else if (date.getDay() == 6) {
        console.log("saturday");
    } else {
        console.log("Wrong date check pattern");
    }
}

//Program to read number and display unit, tens, hundered
{
    let userNumber = prompt("Enter number 1, 10, 100, 1000, 10000, 100000 ");
    console.log(`Entered number is ${userNumber}`);
    if (userNumber == 1) {
        console.log("unit");
    } else if (userNumber == 10) {
        console.log("tens");
    } else if (userNumber == 100) {
        console.log("hundred");
    } else if (userNumber == 1000) {
        console.log("thousand");
    } else if (userNumber == 10000) {
        console.log("tenthousand")
    } else if (userNumber == 100000) {
        console.log("lac")
    } else {
        console.log("Invalid Number")
    }
}

//Program to take 3 numbers and do arithmetic operations and find the one that is minimum or maximum
{
let firstNumber=20;
console.log(`Entered number is ${firstNumber}`);
let secondNumber=10;
console.log(`Entered number is ${secondNumber}`);
let thirdNumber=30;
console.log(`Entered number is ${thirdNumber}`);
let operation1=20+10*30;
let operation2=30+20/10;
let operation3=20%10+30;
let operation4=20*10+30;
let operations=[operation1,operation2,operation3,operation4];
let maxValue=operation1;
let minValue=operation1;
console.log("first is",operation1);
console.log("second is",operation2);
console.log("third is",operation3);
console.log("four is",operation4);
for(let index=0;index<4;index++){
    if(minValue>operations[index]){
        minValue=operations[index];
    }
    if(maxValue<operations[index]){
        maxValue=operations[index];
    }
}
console.log("maximum value : "+maxValue);
console.log("minimum value : "+minValue);
}
