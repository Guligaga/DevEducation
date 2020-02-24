let a3 = [5, 4, 10, 8, 1, 3];

function getMinArrIndex(arr) {
    let min = arr[0];
    let index;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        else if (min > arr[i]) {
            min = arr[i]
            index = i;
        }
    }
    return index;
}
console.log('Minimal value index is', getMinArrIndex(a3));