const readlineSync = require('readline-sync');

    function addNumbers(num1, num2) {
        return num1 + num2
    }

    function subNumbers(num1, num2) {
        return num1 - num2
    }

    function mulNumbers(num1, num2) {
        return num1 * num2
    }

    function divNumbers(num1, num2) {
        return num1 / num2
    }

    var num1 = readlineSync.question("Please enter your first number: ");
    var num2 = readlineSync.question("please enter your second number: ");
    var op   = readlineSync.question("please enter an operator: add, sub, mul, div: " );
    
    
    function calculator(num1, num2, op) {
        if(op === "add"){
            console.log ("the result is: " + addNumbers(num1, num2));
        }
        else if(op === "sub") {
            console.log ( "the result is: " + subNumbers(num1, num2));
        }
        else if(op === "mul") {
            console.log ("the result is: " + mulNumbers(num1, num2));
        }
        else if(op === "div") {
            console.log ("the result is:" [result]);
        }
    }
calculator(num1, num2, op)    
   





