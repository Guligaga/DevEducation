
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

    this.delPos = function delPos(index) {

        
        if (arr[index] == undefined) {
            console.log(`Error! Index ${index} is not defined.`);
        }
        else {
            let arrSeized = arr[index];
            for (let i = index; i < (arr.length - 1); i++) {
            
                arr[i] = arr[i + 1]
                
            }
            arr.length = arr.length - 1;
             
            return arrSeized;
        }
        
    }

    this.get = function get(index) {
        return arr[index]
    }

    this.set = function set (index, value) {
        arr[index] = value;
        return arr;
    }
    
    
}
const aList = new Alist([11, 22, 33, 44, 55])

console.log('.addStart impact:', aList.addStart(123));
console.log('.addEnd impact:', aList.addEnd(123));
console.log('.delStart impact:', aList.delStart());
console.log('.delEnd impact:', aList.delEnd());
console.log('.delPos impact:', aList.delPos(4));
console.log('.get impact:', aList.get(1));
console.log('.set impact:', aList.set(1, 88));