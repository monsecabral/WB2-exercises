"use strict";

// what I know
let studentName = "Matt";
let studentMajor = "CSCI";


// what I need to compare
let majorName;
let departmentOffice;


if ( studentName == "BIOL"){
    majorName = "Biology";
    departmentOffice = "Science Building, Room 310";
}

if ( studentName == "CSCI"){
    majorName = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";
}

if ( studentName == "ENG"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}

if ( studentName == "HIST"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}

if ( studentName == "MKT"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}



// display results

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + departmentOffice);