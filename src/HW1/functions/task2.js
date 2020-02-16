"use strict"

let num0 = 451;

function getTensOnes(num) {

    let ones = ['zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    let teens = ['', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let tens = ['', ' ten', ' twenty', ' thirty', ' fourty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

    let t;
    let o;

    if (num[2] == 0) {
        t = tens [num[1]];
        o = '';
    }
    else if (num[1] == 1) {
        t = teens[num[2]];
        o = '';
    }
    else {
        t = tens[num[1]];
        o = ones[num[2]];
    }
    return t + o;
}

function getWord(num) {
    if (0 <= num && num <= 999) {
        num = String(num);
        switch (num.length) {
            case 1:
                num = '00' + num;
                break;
            case 2:
                num = '0' + num;
                break; 
        }

        let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
        'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

        let h;

        if (num[1] == 0 && num[2] == 0) {

            h = hundreds[num[0]];
            return h;
        }
        else if (num[0] == 0){

            return getTensOnes(num);
        }
        else {

            h = hundreds[num[0]] + ' and';
            return h + getTensOnes(num);
        } 

    }
    return 'Error!'
}

console.log(getWord(num0));