"use strict";

// Declare known values.

var radius = 3;
var π = 3.14
//var Math.pow = 2


// Do the calculations.

//var area = radius * π * Math.pow
var area = Math.pow( radius * π , 2)  ;


// Display the results.

var message = "The area of a circle with radius " + radius + " is " + area;

console.log(message);