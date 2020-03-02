let a = [10, 5, 4, 8, 1, 3];

function getMinArr(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        else if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}
console.log('Minimal value is', getMinArr(a));