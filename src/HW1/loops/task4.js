"use strict";

let a4 = 5;

function calcFactorial(num){
    if (typeof num == 'number') {

        let t = 1;
        
        for (let i = 1; i <=num; i++) {
            t *= i;
        }
        return t;
        }
    return 'Error!';
}
console.log('Factorial of', a, 'is', calcFactorial(a4));
