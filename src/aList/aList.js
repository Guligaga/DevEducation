"use strict"

const List = require('../list/list.js').List;

function AList(arr) {

    List.apply(this, arguments);
    
    this.defaultArr = arr;
    this.arr = [];
    this.init();
}

AList.prototype = Object.create(List.prototype);
AList.prototype.constructor = AList;

AList.prototype.init = function() {
    
    let i = 0; 
    while(this.defaultArr[i] !== undefined) {

        this.arr[i] = this.defaultArr[i];
        i++;
    }
}

AList.prototype.size = function() {
    let i = 0;

    while (this.arr[i] !== undefined) {
        i++;
    }
    return i;
}

AList.prototype.addStart = function(value) {

    let arrOut = [value];
    for (let i = 0; i < this.size(); i++) {
        
        arrOut[i + 1] = this.arr[i];
    }
    this.arr = arrOut;
    return this.size();
}

AList.prototype.addEnd = function(value) {
    
    let arrOut = this.arr;
    
    arrOut[this.size()] = value;
    this.arr = arrOut;
    return this.size();
}

AList.prototype.addPos = function (index, value) {

    let arrTemp = [];
    arrTemp[index] = value;
    for (let i = 0; i < index; i++) {
        arrTemp[i] = this.arr[i];
    }
    for (let i = index; i < this.size(); i++) {
        arrTemp[i + 1] = this.arr[i];
    }
    return this.size();
}

AList.prototype.delStart = function() {
    
    let arrTemp = []
    let arrFirst = this.arr[0]

    for (let i = 0; i < (this.size() - 1); i++) {
        
        arrTemp[i] = this.arr[i + 1]
        
    }
    this.arr = arrTemp;
    console.log(this.arr)
    return arrFirst;
}

AList.prototype.delEnd = function() {
    
    let arrLast = this.arr[this.size() - 1]
    let arrTemp = [];
    for (let i = 0; i < (this.size() - 1); i++) {
        arrTemp[i] = this.arr[i];
    }
    this.arr = arrTemp;
    return arrLast;
}

AList.prototype.delPos = function(index) {
    
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

AList.prototype.get = function(index) {
    
    if (this.arr[index] == undefined) {
        return `Error! Index ${index} is not defined.`;
    }
    return this.arr[index];
}

AList.prototype.set = function(index, value) {

    if (this.arr[index] == undefined) {
        return `Error! Index ${index} is not defined.`;
    }
    else {
        this.arr[index] = value;
    }
}

AList.prototype.toString = function() {
    let j = 0;
    arrTemp = '';
    for (let i = 0; i < this.size(); i++) {

        this.arr[i] = this.arr[i] + '';
        arrTemp += this.arr[i];
    }
    this.arr = arrTemp;
}

AList.prototype.clear = function() {
    
    this.arr = this.defaultArr;
}

AList.prototype.min = function() {
    
    let arrMin = this.arr[0];
    for (let i = 0; i < this.size(); i++) {
        if (arrMin > this.arr[i]) {
            arrMin = this.arr[i]
        }
    }
    return arrMin;
}

AList.prototype.max = function() {
    
    let arrMax = this.arr[0];
    for (let i = 0; i < this.size(); i++) {
        if (arrMax < this.arr[i]) {
            arrMax = this.arr[i]
        }
    }
    return arrMax;
}

AList.prototype.sort = function() {

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
}

AList.prototype.minIndex = function() {

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

AList.prototype.maxIndex = function() {
    
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

AList.prototype.reverse = function() {

    let arrTemp = [];
    for (let i = 0; i < this.size(); i++) {
        arrTemp[i] = this.arr[this.size() - 1 - i]
    }
    this.arr = arrTemp;
}

AList.prototype.halfReverse = function() {
    
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
            i++;
        }
        while (i == len/2 - 0.5) {

            arrTemp[i] = this.arr[i];
            i++;
        }
        while (i < len){
            
            arrTemp[i] = this.arr[len + len/2 - 0.5 - i];
            i++;
        }
    }
    this.arr = arrTemp;
}
// const a = new AList([1, 2, 3, 4])
// const b = new AList([22, 15, 21, 9])
