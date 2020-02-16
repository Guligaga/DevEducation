"use strict";

let a3 = 20;

function calcSqrtSerial(num) {    
    let sqrt; 
    if (typeof num == 'number') {
    for (let i = 0; i <= num; i++) {

        if (i * i <= num && num <= (i+1) * (i+1)) {
           sqrt = i;
        }
    }
    return sqrt;
    }
    return 'Error!';
}    
console.log ('(Serial selection) Square root of', a3, 'is', calcSqrtSerial(a3));
