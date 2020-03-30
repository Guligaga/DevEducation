let dispLen = 9;
let operand1 = '';
let operand2 = '';
let operator;
let answer = 0;
let isOperClicked = false;
let isNumClicked = false;
let isPointClicked = false;
const displayVar = document.querySelector(".display");
const numeralVar = document.querySelectorAll('.numeral');
const pointVar = document.querySelector(".point");
const operatorVar = document.querySelectorAll(".operator");
const equalityVar = document.querySelector(".equality");
const clearVar = document.querySelector(".clear");

pointVar.addEventListener("click", ifPoint);

function ifPoint(event) {
    

    if (isPointClicked == false) {

        if (isOperClicked == false) {
            if (displayVar.value.length == 1 && displayVar.value == '0') {
                operand1 += "0" + event.target.value;
                displayVar.value = operand1;
            }
            else {
                operand1 += event.target.value;
                displayVar.value = operand1;
            }
        }
        else {
            operand2 += event.target.value;
            displayVar.value = operand2;
        }
        isPointClicked = true;
    }
    dispLen++;
}

for (let i = 0; i < numeralVar.length; i++) {

    numeralVar[i].addEventListener("click", showOnDisp);
}
function showOnDisp(event) {

    if (displayVar.value.length == 1 && displayVar.value == '0' && event.target.value == "0") {return;}

    if (isOperClicked == false) {
        if (operand1.length < dispLen) {
                
            operand1 += event.target.value;
            displayVar.value = operand1;    
        }
    }
    else {
        if (operand2.length < dispLen) {
                
                operand2 += event.target.value;
                displayVar.value = operand2;    
        }
    }
    isNumClicked = true;
}

for (let i = 0; i < operatorVar.length; i++) {

    operatorVar[i].addEventListener("click", operatorAction);    
}
function operatorAction(event) {
    if (isNumClicked == false) {
    
        operand1 = +answer;
        operand2 = '';
    }
    if (operand1 !== '' && operand1 !== '' && isOperClicked == true) {

        displayVar.value = getAnswer(operator);
        operand1 = +answer;
        operand2 = '';
    }
    operator = event.target.value;
    isOperClicked = !!operator;
    isNumClicked = false;
    isPointClicked = false;
}

equalityVar.addEventListener("click", equalityAction);    

function equalityAction() {

    if (operand1 !== '' && operand2 !== '') {
        
        displayVar.value = getAnswer(operator);
        
        isOperClicked = false;
        isNumClicked = false;
        operand1 = '';
        operand2 = '';
    }
    else if (operand1 !== '' && operand2 == ''){

        if (isOperClicked == true) {
            
            operand2 = operand1;
            displayVar.value = getAnswer(operator);
            
            isOperClicked = false;
            isNumClicked = false;
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
            displayVar.value = getAnswer(operator);
        
            isOperClicked = false;
            isNumClicked = false;
            operand1 = '';
            operand2 = '';
        }
        else {
            operand1 = answer;
            displayVar.value = getAnswer(operator);
        }
        
    }
    isPointClicked = false;
}

function getAnswer (operation) {
    
    operand1 = +operand1;
    operand2 = +operand2;

    switch (operation) {
        case '+':
            answer = calcSum(operand1, operand2);
            break;
        case '-':
            answer = calcSub(operand1, operand2);
            break;
        case 'x':
            answer = calcMulti(operand1, operand2);
            break;
        case '/':
            answer = calcDiv(operand1, operand2);
            break;
    }
    if (answer == Infinity) {
        return "ERROR"
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
    isPointClicked = false;
    displayVar.value = "0";
    answer = 0;

}

