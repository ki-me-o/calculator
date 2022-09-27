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

        // Temporary debug
        document.querySelector('.logo').innerText = cacheFloat;
    });
});

// Add listener functions to operator buttons
document.querySelectorAll('button.operator').forEach(button => {
    button.addEventListener('click', e => {
        activeOperator = e.target.classList[0];
        // Firstly check if there's already a cacheFloat value. If there is, then this will call the operate function
            
        if(cacheFloat === undefined) {
            cacheFloat = parseFloat(displayString);
            displayString = '0';
        } else {
            performOperation(false)
        }
    });
});

document.querySelector('button.equals').addEventListener('click', e => {
    performOperation(true);
});


function performOperation(clearCache = false, ) {
    let displayFloat = parseFloat(displayString);
    if(activeOperator === undefined) return "ERROR: activeOperator is undefined!";

    displayString = operate(cacheFloat, displayFloat, window[activeOperator]).toString();
    console.log(cacheFloat +
        ' ' + 
        activeOperator + 
        ' ' +
        displayFloat +
       ' = ' + 
       displayString);
    if(clearCache) {
        clearCache = undefined;
        activeOperator = undefined;
    } else {
        cacheFloat = displayFloat;
    }
    document.querySelector('.display').innerText = displayString;  
    document.querySelector('.logo').innerText = cacheFloat;
 
}

/* Function declarations */

/* Math functions */
function add (a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
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

