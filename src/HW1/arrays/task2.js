let a2 = [10, 5, 4, 8, 12, 3];

function getMaxArr(arr) {
    let max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        else if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
console.log('Maximal value is', getMaxArr(a2));