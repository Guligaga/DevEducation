"use strict";


//Variables' data types
///////////////////////////////////////////

let num = 0;
let str = '0';
let someText = 'Hello';
console.log ('Original data type of num: ', typeof num); //outputs 'number'

let numToString = String(num); //Converts 0 to '0'
console.log ('Data type of num after convertion to string: ', typeof numToString); //outputs 'string'

let strToNumber = Number(str); //Converts '0' to 0
console.log ('Data type of str after convertion to number: ', typeof numToString); //outputs 'number'

let someTextToNumber = Number(someText); //Converts 'Hello' to NaN
console.log ('Data type of someText after convertion to number:', typeof someTextToNumber); //outputs 'number'


//Unary operators
////////////////////////////////////////////


let a = 1000;

let aNegative = -a;
console.log('Result of unary operator "-": ', aNegative); //outputs '-1000'

let aPerIncremented = ++a; //a = 1001; aPerIncremented = 1001
console.log('Per increment: ', aPerIncremented);

let aPostIncremented = a++; //a = 1002; aPostIncremented = 1001
console.log('Post increment: ', aPostIncremented);

let aPerDecremented = --a; //a = 1001; aPerDecremented = 1001
console.log('Per decrement: ', aPerDecremented);

let aPostDecremented = a--; //a = 1000; aPostDecremented = 1001
console.log('Post decrement: ', aPostDecremented);


//Binary operators
////////////////////////////////////////////


let b = 120;
b %= 13; //equialent to b = b % 13
console.log('Result of expression "b %= 13":', b);

//Ratio operators
////////////////////////////////////////////

let cNum = 10;
let cStr = '10';
console.log ('Checking equality: ', cNum == cStr); //outputs 'true'
console.log ('Checking identity: ', cNum === cStr); //outputs 'false'


//String
////////////////////////////////////////////


let age = 22;
console.log(`I'm ${age} years old.`);

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let letterZ = alphabet[25];
console.log('Take a symbol from string: ', letterZ); 


//Boolean convertions
////////////////////////////////////////////

let zeroNum = !!0;
console.log('boolean 0: ', zeroNum);

let notZeroNum = !!123.456;
console.log('boolean 123.456: ', notZeroNum);

let spaceStr = !!" ";
console.log('boolean " ": ', spaceStr);

let emptyStr = !!"";
console.log('boolean "": ', emptyStr);

let typeNull = !!null;
console.log('boolean null: ', typeNull);

let typeUndef = !!undefined;
console.log('boolean undefined: ', typeUndef);


//Logical operators
//////////////////////////////////////////


let logicAnd = zeroNum && notZeroNum; //logicAnd = false (zN=false, nZN=true)
console.log('Testing operator AND: ', logicAnd);

let logicOr = zeroNum || notZeroNum; //logicOr = true (zN=false, nZN=true)
console.log('Testing operator OR: ', logicOr);

let logicNo = !zeroNum; //logicNO = true (zN=false)
console.log('Testing operator NO: ', logicNo);