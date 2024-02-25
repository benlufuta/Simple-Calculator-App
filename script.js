/*
addToDisplay function:
This function is responsible for adding a value to the display.
It appends the provided value to the existing value displayed on the calculator.

Parameters:
- val: The value to be added to the display.

deleteLastDigit function:
This function deletes the last digit from the display.
It converts the current value to a string, removes the last character, and updates the display with the modified value.

deleteAll function:
This function clears the display.
It sets the display value to an empty string, effectively removing any existing content.

calculate function:
This function evaluates the expression displayed on the calculator.
It first checks if the display is empty or already showing an error.
If not, it attempts to evaluate the expression using JavaScript's eval function.
If an error occurs during evaluation, it displays 'Error' on the screen for 2 seconds before clearing the display.

calcPercentage function:
This function calculates the percentage of the value displayed.
It divides the current value by 100 and updates the display with the result.
If the value is not a number (NaN), it displays 'Error' for 2 seconds before clearing the display.
*/

const display = document.querySelector('#display');

function addToDisplay(val){
    display.value += val;
}

function deleteLastDigit() {
    display.value = display.value.toString().slice(0,-1);
}

function deleteAll(){
    display.value = '';
}

function calculate() {
    if (display.value === '' || display.value === 'Error'){
        display.value = '0'
    } else {
        try {
            display.value = eval(display.value);
        } catch (error){
            display.value = 'Error';
            setTimeout(function(){
                display.value = '';
            }, 2000);  
        }
    }
}

function calcPercentage(){
    let val = display.value / 100;
    if (isNaN(val) == true){
        display.value = 'Error';
        setTimeout(function(){
            display.value = '';
        }, 2000);
    } else {
        display.value = val;
    }
}
