"use strict";

var payRate = 10;
var hoursWorked = 45;
var grossPayWeekly;
var grossPayAnnual;
var stat = "single";
var tax;
var taxRatePercent;
var weeklyTaxWithholdings;
var netPayWeekly;

grossPayWeekly = payRate * hoursWorked

// to-do: compute gross pay correctly

grossPayAnnual = 475;


grossPayAnnual = grossPayWeekly * 52


if ( stat == "single"){
    if( grossPayAnnual < 12000){

    }
    else if (grossPayAnnual < 25000){

    }
    else if (grossPayAnnual< 75000){
        
    }

}
else if ( stat == "joint"){

}

else{
    console.log("ERROR INVALID FILING STATUS")
}


if (grossPayAnnual < 12000 && stat == "single"){
    taxRatePercent = 0.05;
}

else if (grossPayAnnual >= 12000 && 12000<=24999 && stat == "single"){
    taxRatePercent = 0.1;
}
else if (grossPayAnnual >= 12000 && 12000<=24999 && stat == "single"){
    taxRatePercent = 0.15;
}
else if (grossPayAnnual >= 75000 && stat == "single"){
    taxRatePercent = 0.2;
}

else if (grossPayAnnual < 12000 && stat == "joint"){
    taxRatePercent = 0;
}
