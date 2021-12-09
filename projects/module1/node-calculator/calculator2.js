const readlineSync = require('readline-sync');

var calculator = function(num1, num2, op) {

this.num1 = parseInt(num1);
this.num2 = parseInt(num2);
this.op   = op; 

this.result = function() {
    var num1 = this.num1;
    var num2 = this.num2;
    var op   = this.op;


    if (op === "add") {
            var result = num1 + num2;
    }else if (op === "sub") {
            var result = num1 - num2;
    }else if (op === "mul") {
            var result = num1 * num2;
    }else if (op === "div") {
            var result = num1 / num2;
    }else {
            var result = "Error!" 
    }
    
console.log ("The result is: " + result);    
    };
}

    var num1 = readlineSync.question("Please enter your first number: ");
    var num2 = readlineSync.question("please enter your second number: ");
    var op = readlineSync.question("please enter an operator: add, sub, mul, div: " );
    
    var calculator = new calculator(num1, num2, op);

    calculator.result();