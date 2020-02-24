"use strict";

let a2 = 10;
let b2= 0.1;
let c2 = 2;

function calcMaxOf(a, b, c) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
        if (a*b*c >= a+b+c) {
            return a*b*c + 3;    
        }
        return a+b+c + 3;
    }
    return 'Error!';
}
console.log("max(a*b*c, a+b+c)+3 =", calcMaxOf(a0, b0, c0));
