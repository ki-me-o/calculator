/* Global variables */
let cacheValue,
    displayValue,
    activeOperator;


/* DOM Manipulation */
initializeNineKey();


/* Function declarations */

/* Math functions */
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

/* DOM functions */
function initializeNineKey() {
    const nineKey = document.querySelector('.nine-key');
    for(let i = 1; i <= 9; i++) {
        const numKey = document.createElement('button');
        numKey.classList.add('number');
        numKey.textContent = i;
        nineKey.appendChild(numKey);
    }
}