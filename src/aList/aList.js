
function Alist(arr) {    
    
    this.addStart = function addStart(value) {
        
        let arrOut = [value];
        for (let i = 0; i < arr.length; i++) {
            arrOut[i + 1] = arr[i]
        }
        return arrOut;
    }

    this.addEnd = function addEnd(value) {

        let arrOut = [];
        for (let i = 0; i < arr.length; i++)
        {
            arrOut[i] = arr[i]
        }
        arrOut[arr.length] = value;
        
        return arrOut;
    }

    this.delStart = function delStart() {

        let arrFirst = arr[0]
        
        for (let i = 0; i < (arr.length - 1); i++) {
            
            arr[i] = arr[i + 1]
            
        }
        arr.length = arr.length - 1; 
        return arrFirst;
    }

    this.delEnd = function delEnd() {
        
        let arrLast = arr[arr.length - 1]

        arr.length = arr.length - 1; 
        return arrLast;
    }
    
    
}
const aList = new Alist([1, 2, 3, 4, 5])
console.log(aList.addStart(123));
console.log(aList.addEnd(123));
console.log(aList.delStart());
console.log(aList.delEnd());
