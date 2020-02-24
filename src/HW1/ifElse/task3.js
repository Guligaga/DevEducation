"use strict";

let a1 = 3; 
let b1 = -7;
let c1 = 3.2;

function sumPositive(a, b, c) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
        a = (a>=0)? a : 0;
        b = (b>=0)? b : 0;
        c = (c>=0)? c : 0;
        return a + b + c;
    }
    return 'Error!';
}
console.log('Sum of positives is', sumPositive(a0, b0, c0));

//window.sumOfPositive = sumOfPositive;