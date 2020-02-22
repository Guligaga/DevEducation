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
const aList = new Alist([11, 22, 33, 44, 55]);

