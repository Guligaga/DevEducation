"use strict";

let a0 = 10; 
let b0 = null;

function sumOrMulti(a, b) {
    if (typeof b == 'number') {
        if (a % 2 == 0) {
            return a * b;
        } 
        else if (a % 2 == 1) {
            return a + b;
        }
        return 'Error!';
    }
    return 'Error!';
}
console.log('Result', sumOrMulti (a0, b0));