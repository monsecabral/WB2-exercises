"use strict";

// known variables

let payRate = 17.30;
let hoursWorked = 45;

let pay;
let overtimePay;

if (hoursWorked > 40){
    overtimePay = (payRate * 1.5) * (hoursWorked-40);

    pay = (payRate * 40) + overtimePay;
}