const prompt = require('prompt-sync')();

//Program to take command line input n and print table of power of 2 less than or equal to 2^n
{
    let Input = prompt("Enter the value of n for generation of table of 2");
    console.log("Entered value is: " + Input);
    let tableOfTwo = 2;
    let count = 1;
    while (tableOfTwo <= 256 && count <= Input) {
        console.log(2, "power", count, tableOfTwo);
        tableOfTwo = tableOfTwo * 2;
        count++;
    }
}

//To Find Magic Number
{
    let number = prompt("Enter the number  between 1 to 100 :");
    console.log(number);
    let half = number / 2;
    let start = 0;
    let end = 100;
    while (half != number) {
        if (half == number)
            console.log("Number is: " + half);
        else if (half > number) {
            end = half;
            half = Math.floor((start + end) / 2);
        }
        else if (half < number) {
            start = half;
            half = Math.floor((start + end) / 2);
        }
    }
    console.log(half);
}

//Program to Flip Coin till either Heads or Tails  wins 11 times
{
    const HEAD = 1;
    const TAIL = 0;
    let headsCount = 0;
    let tailsCount = 0;
    while (headsCount != 11 && tailsCount != 11) {
        let tossCoin = Math.floor(Math.random() * 10) % 2;
        switch (tossCoin) {
            case HEAD:
                headsCount++;
                break;
            case TAIL:
                tailsCount++;
                break;
        }
    }
    console.log("Head Count = " + headsCount);
    console.log("Tail Count = " + tailsCount);
}

//Program to track number of wins and number of bets made
{
    const BETS_LOST = 0;
    const BETS_WON = 1;
    let amount = 100;
    let winCount = 0;
    let totalNoOfBets = 0;
    while (amount > 0 && amount < 200) {
        let bets = Math.random();
        switch (bets) {
            case BETS_LOST:
                amount--;
                break;
            case BETS_WON:
                amount++;
                winCount++;
                break;
        }
        totalNoOfBets++;
    }
    console.log("Total bets = " + totalNoOfBets);
    console.log("Total wins = " + winCount);
    console.log("Final amount = " + amount);
}