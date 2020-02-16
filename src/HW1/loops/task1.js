"use strict";

let a = 99;

function sumOfEven (num) {
   let sum = 0;
   for (let i = 1; i < num; i ++) {
      if (i % 2 == 0) {
      sum += i;
      }
   }
   return sum;
}

function amountOfEven (num) {
   let am = 0;
   for (let i = 1; i < num; i++) {
      if (i % 2 == 0) {
      am++;
      }
   }
   return am;
}

function getSumAndAmount(num) {
   if (typeof num == 'number') {
      return sumOfEven(num) + ' and ' + amountOfEven(num);
   }
   return 'Error!';
}
console.log(getSumAndAmount(a));
