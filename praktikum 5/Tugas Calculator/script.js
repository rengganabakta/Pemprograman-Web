document.addEventListener("DOMContentLoaded", function() {
    const firstNumberDisplay = document.querySelector('.first_number');
    const operandDisplay = document.querySelector('.operand');
    const secondNumberDisplay = document.querySelector('.second_number');
    const operatorButtons = document.querySelectorAll('.operator button');
    const numberButtons = document.querySelectorAll('.button_angka button');
    const clearButton = document.querySelector('.operator button:last-of-type');

    let firstNumber = '';
    let operand = '';
    let secondNumber = '';

    // Event listeners for number buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!operand) {
                firstNumber += button.textContent.trim();
                updateDisplay();
            } else {
                secondNumber += button.textContent.trim();
                updateDisplay();
            }
        });
    });

    // Event listeners for operator buttons
    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent.trim() === '=') {
                calculateResult();
            } else if (button.textContent.trim() === 'Clear') {
                clearCalculator();
            } else {
                operand = button.textContent.trim();
                updateDisplay();
            }
        });
    });

    // Function to update display
    function updateDisplay() {
        firstNumberDisplay.textContent = firstNumber;
        operandDisplay.textContent = operand;
        secondNumberDisplay.textContent = secondNumber;
    }

    // Function to perform calculation
    function calculateResult() {
        let result;
        switch (operand) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                result = 'Error';
                break;
        }
        firstNumber = result.toString();
        operand = '';
        secondNumber = '';
        updateDisplay();
    }

    // Function to clear calculator
    function clearCalculator() {
        firstNumber = '';
        operand = '';
        secondNumber = '';
        updateDisplay();
    }
});
