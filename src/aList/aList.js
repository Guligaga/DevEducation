
function Alist(arr) {    
    
    this.addStart = function addStart(value) {
        
        let arrOut = [value];
        for (let i = 0; i < arr.length; i++) {
            arrOut[i + 1] = arr[i]
        }
        return arrOut;
    }

    this.addEnd = function addEnd(value) {

        let arrOut = arr;
        
        arrOut[arr.length] = value;
        
        return arrOut;
    }

    
    
}
const aList = new Alist([1, 2, 3])
console.log(aList.addStart(123));
console.log(aList.addEnd(123));
