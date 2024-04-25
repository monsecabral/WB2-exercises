"use strict";

// Defined variables.

var people = 30;
var charterVanSeats = 15;
var vanCost = 250;


// Calculations.

var numberOfVans = people / charterVanSeats;

var costToRent = numberOfVans * vanCost;

var pricePerPerson = costToRent / people

// Output.

var message = "We will need " + numberOfVans + " vans." + " It will cost $" + costToRent + ". It will cost " + pricePerPerson + " per person."; 

console.log(message);