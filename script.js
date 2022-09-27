/* Global variables */
let cacheFloat,
    displayString = '',
    activeOperator;


/* DOM Manipulation */
initializeNineKey();
initalizeNumberButtonsListeners();

// clear entry button
document.querySelector('button.clear-entry').addEventListener('click', e => {
    displayString = '0';
});

// clear
document.querySelector('button.clear').addEventListener('click', e => {
    displayString = '0';
    cacheFloat = undefined;
    activeOperator = undefined;
});

// Apply displayString to innerText of display div on any button press
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
        displayString = removeLeadingZeros(displayString);
        document.querySelector('.display').innerText = displayString;
    });
});

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

function removeLeadingZeros(string) {
    while(string.charAt(0) === '0' && string.length > 1) {
        string = string.slice(1, string.length);
    }
    return string;
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
    const numKeys = document.querySelectorAll('button.number');
    numKeys.forEach(num => {
        num.addEventListener('click', e => {
            console.log('displayString before: ' + displayString);
            displayString = displayString.concat('',num.innerText);
            console.log('displayString after press: ' + displayString);
        });
    });
}

