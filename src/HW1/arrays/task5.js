let a5 = [ 5, 4, 10, 8, 1, 3];

function getSumOddInd(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        if (i % 2 == 1) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log('Sum of odd index values is', getSumOddInd(a5));