let displayText = "0";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let waitingForSecondNumber = null;

function display() {
    let output = document.getElementsByClassName("calculator-screen")[0];
    output.value = displayText;
}
display();

let buttons = document.getElementsByClassName("calculator-keys")[0];

buttons.addEventListener("click", handleClick);

function handleClick(event) {

    console.log("You pressed this button");
    let element = event.target;

    if (!element.classList.contains("btn")) {
        return;
    }

    if (element.classList.contains("operator")) {
        console.log(waitingForSecondNumber + " " + operator);
        if (waitingForSecondNumber) {
            displayText = "0";
            display();
        }
        // check if first number is already set
        else if (firstNumber == null) {
            // if first number is not set yet, set it equal to the display (current number)
            firstNumber = parseFloat(displayText);

            // set the operator (+, -, etc.)
            operator = element.value;

            // display blank calculator
            displayText = "0";
            display();

        } else {
            // if first number is set, then the new number is supposed to be the second number
            secondNumber = parseFloat(displayText);

            // determine the operation and do it
            if (operator == "+") {
                firstNumber = firstNumber + secondNumber;
            }
            if (operator == "-") {
                firstNumber = firstNumber - secondNumber;
            }
            if (operator == "*") {
                firstNumber = firstNumber * secondNumber;
            }
            if (operator == "/") {
                firstNumber = firstNumber / secondNumber;
            }

            waitingForSecondNumber = true;

            displayText = firstNumber;
            display();
        }

        console.log("You clicked an operator ", element.value);
    }

    else if (element.classList.contains("decimal")) {
        if (!displayText.includes(".")) {
            displayText += ".";
            display();
        }
    }

    else if (element.classList.contains("all-clear")) {
        displayText = "0";
        display();
    }

    else {
        if (displayText == "0") {
            displayText = "";
        }
        displayText += element.value;
        display();
    }
}
