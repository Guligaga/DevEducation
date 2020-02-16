"use strict";

let a5 = 12345;

function numeralSum (num) {
    if (typeof num == 'number') {
    num = String(num)
    let sum = 0;
    let l = num.length;
    for (let i = 0; i < l; i++)
    {
        sum += Number(num[i]);
    }
    return sum;
    }
    return 'Error!';
}
console.log('Sum of numerals is', numeralSum(a5));
