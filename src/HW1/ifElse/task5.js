"use strict";

let a = 79;

function getMark(rat) {
if (rat >= 0 && rat <= 19)
    return 'F';
else if (rat >= 20 && rat <= 39)
    return 'E';
else if (rat >= 40 && rat <= 59)
    return 'D';
else if (rat >= 60 && rat <= 74)
    return 'C';
else if (rat >= 75 && rat <= 89)
    return 'B';
else if (rat >= 90 && rat <= 100)
    return 'A';
else
    return 'Error!';
}
console.log('The mark is', getMark(a));