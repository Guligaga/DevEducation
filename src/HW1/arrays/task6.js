let a6 = [5, 4, 10, 8, 1, 3];

function getReverseArr(arr) {
    let arrRev = [];
    let arrLeng = arr.length - 1;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        else {
        arrRev[i] = arr[arrLeng - i];
        }
    }
    return arrRev;
}
console.log('Reverse array is', getReverseArr(a6));