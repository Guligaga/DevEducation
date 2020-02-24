
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
            // return operand1;
        }
    }
    else if (isOperClicked == true) {
        
        if (operand2.length < 10) {
            
            operand2 += event.target.value;
            displayVar.value = operand2;
            // return operand2;
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

    operand1 = +operand1;
    operand2 = +operand2;
    displayVar.value = getAnswer(operator);
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

