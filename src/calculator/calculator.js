
let operand1 = '';
let operand2 = '';
let operator;
let isOperClicked = false;
const displayVar = document.querySelector(".display");
const numeralVar = document.querySelectorAll('.numeral');
const operatorVar = document.querySelectorAll(".operator");
const equalityVar = document.querySelector(".equality");
const clearVar = document.querySelector(".clear");

for (let i = 0; i < numeralVar.length; i++) {

    numeralVar[i].addEventListener("click", showOnDisp);
}
function showOnDisp(event) {
        
    if (isOperClicked == false) {

        if (operand1.length < 10) {
            
            operand1 += event.target.value;
            displayVar.value = operand1;
        }
    }
    else if (isOperClicked == true) {
        
        if (operand2.length < 10) {
            
            operand2 += event.target.value;
            displayVar.value = operand2;
        }
    }
}


for (let i = 0; i < operatorVar.length; i++) {

    operatorVar[i].addEventListener("click", operatorAction);    
}
function operatorAction(event) {

    operator = event.target.value;
    isOperClicked = !!operator;
}


equalityVar.addEventListener("click", equalityAction);    

function equalityAction() {

    
    // isOperClicked = false;

    if (operand1 !== '' && operand2 !== '') {
        
        operand1 = +operand1;
        operand2 = +operand2;
        displayVar.value = getAnswer(operator);
        
        isOperClicked = false;
        operand1 = '';
        operand2 = '';
        
    }
    else if (operand1 !== '' && operand2 == ''){

        if (isOperClicked == true) {
            
            operand1 = +operand1;
            operand2 = operand1;
            displayVar.value = getAnswer(operator);
        
            isOperClicked = false;
            operand1 = '';
            operand2 = '';
        }
        else {
            displayVar.value = operand1;
        }
        
    }
    else {
        if (isOperClicked == true) {
            operand1 = 0;
            operand2 = + operand2;
            displayVar.value = getAnswer(operator);
        
            isOperClicked = false;
            operand1 = '';
            operand2 = '';
        }
        else {
            displayVar.value = 0;
        }
        
    }

}


function getAnswer (operation) {
    let answer;
    switch (operation) {
        case '+':
            answer = calcSum(operand1, operand2);
            break;
        case '-':
            answer = calcSub(operand1, operand2);
            break;
        case '*':
            answer = calcMulti(operand1, operand2);
            break;
        case '/':
            answer = calcDiv(operand1, operand2);
            break;
        
    }
    return answer;
}

function calcSum(a, b) {
    return a + b;
}
function calcSub(a, b) {
    return a - b;
}
function calcMulti(a, b) {
    return a * b;
}
function calcDiv(a, b) {
    return a / b;
}

clearVar.addEventListener("click", clearAll);

function clearAll() {
    
    operand1 = '';
    operand2 = '';
    operator = undefined;
    isOperClicked = false;
    displayVar.value = "0";

}

