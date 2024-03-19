const display = document.getElementById("display");

// creating an array
let values = [];

function appendToDisplay(input) {
    // checking if last element is equal error
    // if (values.length > 0 && values[values.length - 1] === "Error") {
    //     values.pop();
    // }
    if (values.includes("Error")) {
        values = [];
    }
    values.push(input);
    updateDisplay();
}

function removeLastValue() {
    if (values.length > 0) {
        values.pop();
    }
    updateDisplay();
}

function clearDisplay() {
    values = [];
    updateDisplay();
}

// array.join("separator") --> return array as string separated by separator(default=",")

function calculate() {
    try {
        let result = eval(values.join(""));
        values = [result];
    } catch (error) {
        values = ["Error"];
    }
    updateDisplay();
}

function updateDisplay() {
    let displayValue = values.join("");
    display.value = displayValue;
    // changing font-size as values.length increases
    display.style.fontSize = `${30 - (displayValue.length / 2)}px`;
}