"use strict";

let x0 = -13.25;
let y0 = 7.9;

function getQuarter(x, y) {

    let quart;
    if (typeof x == 'number' && typeof y == 'number') {
        if (x >= 0) {
            if  (y >= 0) {
                quart = "I quarter";
            }
            else {
                quart = "IV quarter";
            }
        }
        else {
            if (y >= 0) {
                quart = "II quarter";
            }
            else {
                quart = "III quarter";
            }
        }
    }
    else {
        quart = "Error!"
    }
    return quart;
}
console.log('What quarter? ', getQuarter(x0, y0));
