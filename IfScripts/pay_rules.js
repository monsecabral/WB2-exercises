"use strict";

// Known variables.

var payRate = 12.50;
var hoursWorked = 20;
var overTimePay = payRate * 1.5;
let pay;
let overHoursPay;

// If statement.

if (hoursWorked > 40) {
    overHoursPay = hoursWorked - 40
    pay = payRate * 40 + overHoursPay * overTimePay
}

else if ( hoursWorked <= 40 ) {
    pay = payRate * hoursWorked
}   
    console.log(" The gross pay is " + pay)