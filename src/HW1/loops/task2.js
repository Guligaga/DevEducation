"use strict";

let a2 = 223;

function checkIfSimple (num) {
    if (typeof num == 'number') {
        let a;
        let b = 0;
        for (let i = 1; i <= num; i++) {
            a = num % i;
            if (a == 0) {
                ++b;
            }
        }
        if (b <= 2) {
            return 'simple';
        }
        return 'not simple';
    }
    return 'Error!';
}
console.log('Number is', checkIfSimple(a2));