"use strict"

let dayNum = 8;

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Satursday';
            break;
        case 7:
            dayName = 'Sunsday';
            break;
        default:
            dayName = 'Undefinedday';    
    }
    return dayName;
}
console.log(`Day number '${dayNum}' :`, getDayName(dayNum))