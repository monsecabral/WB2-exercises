"use strict";

// what I know
let studentName = "Matt";
let studentMajor = "CSCI";


// what I need to compare
let majorName;
let departmentOffice;


if ( studentMajor == "BIOL"){
    majorName = "Biology";
    departmentOffice = "Science Building, Room 310";
}

if ( studentMajor == "CSCI"){
    majorName = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";
}

if ( studentMajor == "ENG"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}

if ( studentMajor == "HIST"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}

if ( studentMajor == "MKT"){
    majorName = "not_yet_supported";
    departmentOffice = "not_yet_supported";
}



// display results

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + departmentOffice);