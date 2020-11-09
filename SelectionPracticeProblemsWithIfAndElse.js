//To print 3 digit number
let min = 1000;
let max = 0;
for (let count = 0; count < 5; count++) {
    let num = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    console.log(num);
    if (num > max)
        max = num;
    if (num < min)
        min = num;
}
console.log("maximum  is", max);
console.log("minimum is", min);

//To take input from user
const prompt = require('prompt-sync')();
const date = prompt('Date');
const month = prompt('month');
console.log(`Date is ${date}`);
console.log(`Date is ${month}`);
if ((date >= 20 && date <= 31) && month == "march" ||
    (date >= 1 && date <= 31) && month == "april" ||
    (date >= 1 && date <= 31) && month == "may" ||
    (date >= 1 && date <= 20) && month == "june")
    console.log("true");
else
    console.log("false");

// check leapyear
let year = prompt('year');
console.log(`Entered Year is ${year}`);
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    console.log(year + " is leap year");
else {
    console.log(year + " Not a leap year");
}
//Program to stimulate coin flip
let coinFlip = Math.random();
if (coinFlip == 1) {
    console.log("It's a HEAD");
}
else {
    console.log("Its a TAIL");
}
