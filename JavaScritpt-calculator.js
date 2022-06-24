// Creating a JavaScript Calculator


let firstNumber = prompt("Enter first number: ")
let secondNumber = prompt("Enter second number")
var operation = prompt("enter 1 for addition, 2 for sutraction, 3 for multiiplication and 4 for Division")

console.log (firstNumber, secondNumber);

if (operation == 1)
    alert("The answer is " + firstNumber + secondNumber);
else if (operation == 2)
    alert("The answer is " + firstNumber - secondNumber);
else if (operation == 3)
    alert("The answer is " + firstNumber * secondNumber);
else if (operation == 4)
    alert("The answer is " + firstNumber/secondNumber);
else alert("invalid operation")