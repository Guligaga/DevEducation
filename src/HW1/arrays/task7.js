//let a7 = [5, 4, 10, 8, 11, 3];

function getSumOddValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        if (arr[i] % 2 == 1) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log('Sum of odd values is', getSumOddValues(a7));