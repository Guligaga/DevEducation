function Alist(arr) {
    this.defaultArr = arr;
    this.arr = [];
    this.init();
}

Alist.prototype.init = function() {
    
    let i = 0; 
    while(this.defaultArr[i] !== undefined) {

        this.arr[i] = this.defaultArr[i];
        i++;
    }
    return this.arr;    
}

Alist.prototype.size = function() {
    let i = 0;

    while (this.arr[i] !== undefined) {
        i++;
    }
    return i;
}

Alist.prototype.addStart = function(value) {

    let arrOut = [value];
    for (let i = 0; i < this.size(); i++) {
        
        arrOut[i + 1] = this.arr[i];
    }
    this.arr = arrOut;
    return this.arr;
}

Alist.prototype.addEnd = function(value) {
    
    let arrOut = this.arr;
    
    arrOut[this.size()] = value;
    this.arr = arrOut;
    return this.arr;    
}

Alist.prototype.delStart = function() {
    
    let arrTemp = []
    let arrFirst = this.arr[0]

    for (let i = 0; i < (this.size() - 1); i++) {
        
        arrTemp[i] = this.arr[i + 1]
        
    }
    this.arr = arrTemp;
    console.log(this.arr)
    return arrFirst;
}

Alist.prototype.delEnd = function() {
    
    let arrLast = this.arr[this.size() - 1]
    let arrTemp = [];
    for (let i = 0; i < (this.size() - 1); i++) {
        arrTemp[i] = this.arr[i];
    }
    this.arr = arrTemp;
    return arrLast;
}

Alist.prototype.delPos = function(index) {
    
    if (this.arr[index] == undefined) {
        return `Error! Index ${index} is not defined.`;
    }
    else {
        let arrSeized = this.arr[index];
        let arrTemp = [];

        for (let i = 0; i < index; i++) {
            arrTemp[i] = this.arr[i];
        }

        for (let i = index; i < (this.size() - 1); i++) {
            arrTemp[i] = this.arr[i + 1];
        }
        this.arr = arrTemp;
        return arrSeized;
    }    
}

Alist.prototype.get = function(index) {
    
    if (this.arr[index] == undefined) {
        return `Error! Index ${index} is not defined.`;
    }
    else {
        return this.arr[index];
    }
}

Alist.prototype.set = function(index, value) {

    if (this.arr[index] == undefined) {
        return `Error! Index ${index} is not defined.`;
    }
    else {
        this.arr[index] = value;
        return this.arr;
    }
}

Alist.prototype.toString = function() {
    let j = 0;
    arrTemp = '';
    for (let i = 0; i < this.size(); i++) {

        this.arr[i] = this.arr[i] + '';
        arrTemp += this.arr[i];
    }
    this.arr = arrTemp;
    return this.arr;
}

Alist.prototype.clear = function() {
    
    this.arr = this.defaultArr;
    return this.arr;
}

Alist.prototype.min = function() {
    
    let arrMin = this.arr[0];
    for (let i = 0; i < this.size(); i++) {
        if (arrMin > this.arr[i]) {
            arrMin = this.arr[i]
        }
    }
    return arrMin;
}

Alist.prototype.max = function() {
    
    let arrMax = this.arr[0];
    for (let i = 0; i < this.size(); i++) {
        if (arrMax < this.arr[i]) {
            arrMax = this.arr[i]
        }
    }
    return arrMax;
}

Alist.prototype.sort = function() {

    let valueToSort;
    let j;

    for (let i = 1; i < this.size(); i++) {
        
        valueToSort = this.arr[i]
        j = i;

        while (valueToSort < this.arr[j - 1] && j > 0) {

            this.arr[j] = this.arr[j - 1]
            j--;
        }

        this.arr[j] = valueToSort;
    }
    return this.arr;
}


Alist.prototype.minIndex = function() {

    let index;
    
    let arrMin = this.arr[0]
    for (let i = 0; i < this.size(); i++) {

        if(arrMin >= this.arr[i]) {

            arrMin = this.arr[i];
            index = i;
        }
    }
    return index;
}

Alist.prototype.maxIndex = function() {
    
    let index;
    let arrMax = this.arr[0];
    
    for (let i = 0; i < this.size(); i++) {

        if (arrMax <= this.arr[i]) {
            arrMax = this.arr[i]
            index = i;
        }
    }
    return index;
}

Alist.prototype.reverse = function() {

    let arrTemp = [];
    for (let i = 0; i < this.size(); i++) {
        arrTemp[i] = this.arr[this.size() - 1 - i]
    }
    this.arr = arrTemp;
    return this.arr;
}

Alist.prototype.halfReverse = function() {
    
    let arrTemp = [];
    let len = this.size();
    let i = 0;
    
    if (len % 2 == 0) {

        while (i < len/2) {
           
            arrTemp[i] = this.arr[len/2 - 1 - i];
            i++;
        }    
        while (i < len){
                
            arrTemp[i] = this.arr[len + len/2 - 1 - i];
            i++;
        }
        
    }
    else {

        while (i < len/2 - 0.5) {
           
            arrTemp[i] = this.arr[len/2 - 1.5 - i];
            console.log('i', i)
            i++;
            
        }
        while (i == len/2 - 0.5) {

            arrTemp[i] = this.arr[i];
            console.log('i', i)
            i++;
        }
        while (i < len){
            
            arrTemp[i] = this.arr[len + len/2 - 0.5 - i];
            console.log('i', i)
            i++;
        }
        
    }
    this.arr = arrTemp;
    return this.arr;
}


const aList = new Alist([11, 22, 33, 44, 55]);
const aList1 = new Alist([11, 2, 33, 4, 15]);
const aList2 = new Alist([11, 22, 33, 44, 55]);
const aList3 = new Alist([11, 22, 33, 44, 55, 66]);
