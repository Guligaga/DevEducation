"use strict"

let point1 = [-2, 2];
let point2 = [2, -1];

function getInterval (a, b) {
    
        if (typeof a[0] == 'number' && typeof b[0] == 'number') {
            if (typeof a[1] == 'number' && typeof b[1] == 'number') {

                return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));     
            }
        }
        return 'Error!'
    
    
}
console.log('Interval between points is', getInterval(point1, point2))
