// Description: This script tests various numeric conversion techniques.
// Author: Jordan Q. Newprogrammer

// Defined variables

var a = " 101.1  ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5   ";

var Ia, Ib, Ic, Id, Fa, Fb, Fc, Fd, Na, Nb, Nc, Nd, Ua, Ub, Uc, Ud



// Convert using parseInt

Ia = parseInt(a);
console.log(Ia + " is the Integer of " + a);

Ib = parseInt(b);
console.log(Ib + " is the Integer of " + b);

Ic = parseInt(c);
console.log(Ic + " is the Integer of " + c);

Id = parseInt(d);
console.log(Id + " is the Integer of " + d);



// Convert using parseFloat

Fa = parseFloat(a);
console.log(Fa + " is the Float of " + a);

Fb = parseFloat(b);
console.log(Fb + " is the Float of " + b);

Fc = parseFloat(c);
console.log(Fc + " is the Float of " + c);

Fd = parseFloat(d);
console.log(Fd + " is the Float of " + a);



// Convert using Number

Na = Number(a);
console.log(Na + " is the Number of " + a);

Nb = Number(b);
console.log(Nb + " is the Number of " + b);

Nc = Number(c);
console.log(Nc + " is the Number of " + c);

Nd = Number(d);
console.log(Nd + " is the Number of " + d);



// Convert using unary + operator

Ua = +a;
console.log(Ua + " is the Unary of " + a);

Ub = +b;
console.log(Ub + " is the Unary of " + a);

Uc = +c;
console.log(Uc + " is the Unary of " + a);

Ud = +d;
console.log(Ud + " is the Unary of " + d);