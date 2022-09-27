/* Global variables */
let cacheFloat,
    displayString = '',
    activeOperator;


/* DOM Manipulation */
initializeNineKey();
initalizeNumberButtonsListeners();

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
    // This would be a convenient place to round to so many decimal places
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

function initalizeNumberButtonsListeners() {
    const numKeys = Array.from(document.querySelectorAll('button.number'));
    numKeys.forEach(num => {
        num.addEventListener('click', e => {
            console.log('displayString before: ' + displayString);
            displayString = displayString.concat('',num.innerText);
            console.log('displayString after press: ' + displayString);
        });
    });

    
}