"use strict";

// Declare known values.

var savingsAccount = 5000;
var interestRate = 0.14;
var years = 2;


// Do the calculations.

var investmentDoubles = 72 / interestRate;
var savingsAccountWorth = investmentDoubles * years;


// Display the results.
var message = "At a " + interestRate + "% interest rate, your savings account will be worth" + savingsAccountWorth + " in " + years + " years ";

console.log(message);