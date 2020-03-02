let a8 = [ 1, 2, 3, 4, 5];

function getHalfChange(arr) {
    let halfCh = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error!';
        }
        else if (arr.length % 2 == 0) {
            if (i < arr.length/2) {
                halfCh[i] = arr[i + arr.length/2];
            }
            else {
                halfCh[i] = arr[i - arr.length/2];
            }
        }
        else {
            if (i < arr.length/2 - 0.5) {
                halfCh[i] = arr[i + arr.length/2 + 0.5];
            }
            else if (i == arr.length/2 - 0.5) {
                halfCh[i] = arr[arr.length/2 - 0.5];
            }
            else {
                halfCh[i] = arr[i - arr.length/2 - 0.5];
            }
        }
        
    }
    return halfCh;
}
console.log('After changing:', getHalfChange(a8));