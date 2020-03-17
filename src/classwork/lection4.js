// //'use strict'
// //This
// //////////////////////////////////////////////
// function foo(a) {
//     this.value = a;
//     console.log('this link', this === global);
// }
// foo()

// var myObject = new foo(5); 
// console.log('create new object', myObject)
// console.log('is value true', myObject.value === 5);

// var myObject1 = new foo(88); 
// console.log('create new object', myObject1)
// console.log('is value true', myObject1.value === 5);

// var myObject = {
//    myself: function() {
//    return this;
//    }
// }
// console.log('return this', myObject.myself() === myObject);

// //Arrays
// ///////////////////////////////////////////////////

// var fruits = ['element0', 'element1', 'elementN'];
// console.log('var fruits = []:', fruits);
// var fruits = new Array('element0', 'element1', 'elementN');
// console.log('var fruits = new Array():', fruits);
// var fruits = new Array(8);
// console.log('var fruits = new Array(arrayLength):', fruits);

// //Arrays.Methods
// ////////////////////////////////////////////////////

var values = [5, 8, 1, 2, 3, 4];
// values.push(7); 
// values.push(3);
var lastElement = values.pop();
// values.unshift(9); 
// values.unshift(2);
var firstElement = values.shift();
console.log(values, firstElement, lastElement);

// let a = Array.of(1, 2, 3); // [1, 2, 3]
// console.log('of', a);
// a = Array.isArray(1, 2, 3);
// console.log('isArray', a); // false
// a = Array.isArray([1, 2, 3]); // true
// console.log('isArray', a);
// // a = Array.from(obj, mapFn, thisArg) // где thisArg - this для mapFn (коллбек map);
// // console.log('from', a);
// a = Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
// console.log('from', a);

// var values = [3, 9, 15, -5, 12];
// console.log(values.find(element => element > 13)); // 15
// console.log(values.findIndex(element => element > 13)); // 2

// var values = [2, 9, 9, 3, 4, 5];
// console.log(values.includes(2)); // true 
// console.log(values.indexOf(9)); // 1 
// console.log(values.lastIndexOf(9)); // 2 
// console.log(values.includes(7)); // false
// console.log(values.indexOf(7)); // -1
// console.log(values.lastIndexOf(7)); // 

// var words = ['number', 'string', 'symbol', 'object', 'undefined'];
// console.log(words.filter(word => word.length > 6)); // ["undefined"]

// var values = [1, 2, [3, 4, [5, 6]]];
// console.log(values.flat()); // [1, 2, 3, 4, [5, 6]]
// console.log(values.flat(2)); // [1, 2, 3, 4, 5, 6]

// var chars = ['a', 'b', 'c'];
// chars.forEach(element => console.log(element)); // a b c

// var numbers = [1, 4, 9, 16];
// console.log(numbers.map(x => x * 2)); // [2, 8, 18, 32]

// var reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numbers.reduce(reducer)); // 30
// console.log(numbers.reduce(reducer, 5)); // 35

// var values = [1, 2, 3, 4, 5];
// console.log(values.every(element => element % 2 === 0)); // false
// console.log(values.every(element => element > 10)); // false
// console.log(values.some(element => element % 2 === 0)); // true
// console.log(values.some(element => element > 2)); // true

// console.log(['a', 'b', 'c'].concat(['d', 'e', 'f'])); // ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(['a', 'b', 'c'].concat(5)); // ['a', 'b', 'c', 5]

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
// console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(2, 4)); // ["camel", "duck"]

// var arr = ['a', 'b', 'c'];
// arr.splice(1, 1); // b console.log(arr) // [“a”, “c”];
// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months); // ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// console.log(months); // ["Jan", "Feb", "March", "April", "May"]

// var arr = ['a', 'b', 'c'];
// arr.splice(1, 1); // b console.log(arr) // [“a”, “c”];
// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months); // ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// console.log(months); // ["Jan", "Feb", "March", "April", "May"]

// //Arrays.Length
// ////////////////////////////////////////////////////////////////////
// var array = [];
// array[10] = '';
// console.log(array.length); // 11
