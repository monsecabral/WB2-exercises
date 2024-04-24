"use strict";

// known values
var payRate = 17.30;
var hoursWorked = 45;


// calculations
var grossPay;

grossPay = 0;

if (hoursWorked <= 40){
    grossPay - payRate * hoursWorked
}
else {
    grossPay = (40 * payRate) + ( (hoursWorked - 40) * payRate * 1.5 );
}


// display results
var message = "worked " + hoursWorked + " hours for " + grossPay;

console.log(message);