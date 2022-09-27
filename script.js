/* Global variables */
let cacheValue,
    displayValue,
    activeOperator;


/* DOM Manipulation */



/* Function declarations */
function calcAdd (a,b) {
    return a+b;
}

function calcSubtract(a,b) {
    return a-b;
}

function calcMultiply(a,b) {
    return a*b;
}

function calcDivide(a,b) {
    if(b === 0) return "ERROR";
    return a / b;
}

function operate(a,b,operator) {
    return (operator(a,b));
}