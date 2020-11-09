
const prompt = require('prompt-sync')();
//Program to take command line input n and print table of power of 2 less than or equal to 2^n
{
    let userInput = prompt("Enter the value of n for generation of table of 2");
    console.log("Entered value is: " + userInput);
    for (let index = 1; index <= userInput; index++) {
        console.log(2, "POWER", index, 2 * index);
    }
}

//Program to take command line input n and print nth harmonic number
{
    let inputNumber = prompt("Enter the value of n for generation of harmonic number series");
    let harmonicSeries = "1";
    for (let i = 2; i <= inputNumber; i++) {
        harmonicSeries += "+(1/" + i + ")";
    }
    console.log(harmonicSeries);
}

// program to check if a number is prime or not

// take input from the user
let number = prompt("Enter a positive number: ");
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("number is a prime number");
    } else {
        console.log("number is a not prime number");
    }
}
else {
    console.log("The number is not a prime number.");
}

//Program to generate prime numbers in a given range
{
    let startValue = prompt("Enter the starting number: ");
    let endValue = prompt("Enter the ending number: ");
    console.log("Prime numbers between " + startValue + " and " + endValue + " are: ");
    let count;
    for (let startIndex = startValue; startIndex <= endValue; startIndex++) {
        count = 0;
        for (let endIndex = 1; endIndex <= startIndex; endIndex++) {
            if (startIndex % endIndex == 0)
                count++;
        }
        if (count == 2)
            console.log(startIndex);
    }
}

//Program to Compute Factorial of a Number
{
    function factorial(n) {
        if (n == 0) {
            return 1;
        }
        else {
            return (n * factorial(n - 1));
        }
    }
    let factorialOfNum = prompt("Enter the number to compute factorial ");
    let fact = factorial(factorialOfNum);
    console.log("Factorial of Number " + factorialOfNum + " is " + fact);
}

//Program to compute factors of a number using factorization
{
    let number = prompt("Enter the number to compute prime factors of a number :");
    console.log("Prime Factors are:");
    for (let i = 2; i < number; i++) {
        while (number % i == 0) {
            console.log(i + " ");
            number = number / i;
        }
    }
    if (number > 2) {
        console.log(number);
    }
}