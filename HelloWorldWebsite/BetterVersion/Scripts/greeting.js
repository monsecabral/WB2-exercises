"use strict";



function showGreeting() {
 let messageDiv = document.getElementById("messageDiv");
 messageDiv.innerHTML = "Hello World!";
 messageDiv.innerHTML = "<script> alert('hacked!');</
} 

showGreeting();