let a4 = [ 5, 4, 10, 8, 1, 3];

function getMaxArrIndex(arr) {
    let max = arr[0];
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        else if (max < arr[i]) {
            max = arr[i]
            index = i;
        }
    }
    return index;
}
console.log('Maximal value index is', getMaxArrIndex(a4));