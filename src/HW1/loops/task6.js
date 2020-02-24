"use strict"

let a6 = 123456;

function getMirror(num) {
    if (typeof num == 'number') {
    let numMir = '';
    num = String(num);
    let len = num.length - 1;
    for (let i = 0; i <= len; i++) {
        let j = len - i;
        numMir += num[j];
    }
    return numMir;
    }
    return 'Error!';
}
console.log('Mirror:', getMirror(a6));