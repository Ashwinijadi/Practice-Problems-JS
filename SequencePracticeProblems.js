//Single digit
let random = Math.floor(Math.random() * 10);
console.log("single digit : " +random);
// 1 to 9
let randomValue=Math.floor(Math.random() * 9)+1;
console.log("single digit : " +randomValue);
// First Dice Number between 1 to 6
let diceNumber1=Math.floor(Math.random() * 6)+1;
console.log("First dice number : " +diceNumber1);
//second Dice Number between 1 to 6
let diceNumber2=Math.floor(Math.random() * 6)+1;
console.log("second dice number : " +diceNumber2);

//sum of 2 dice numbers
console.log("sum of dice numbers : " ,diceNumber1+diceNumber2);

//generate five 2 digit random numbers 
num=Math.floor(Math.random() * 90 + 10);
let count=0;
let sum=0;
while(count<5){
    sum +=num;
    console.log("sum is"+sum);
    count++;
}
console.log("sum of 5 numbers :"+sum);
console.log("Average of 5 numbers :",sum/count);

//Unit Conversion
let inches=42;
let inchesToFeet=42/12;
console.log("feets:", inchesToFeet);
let breadthInFeets=40;
let lengthInFeets =60;
console.log("area of one plot:",lengthInFeets*breadthInFeets);
//area in feets
console.log("area of 25 plots:",lengthInFeets*breadthInFeets*25 +" feets");
//feet to metres
console.log("area of 25 plots:",lengthInFeets*breadthInFeets*0.3048*0.3048*25 +" m^2");
//feet to acres
console.log("area of 25 plots:",(lengthInFeets*breadthInFeets*25)/43560 +" acres");
