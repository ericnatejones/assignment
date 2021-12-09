var num2 = preseInt(readlineSync.question('please enter your second number:'));
var op = preseInt(readline.Sync.question('please enter an operator: '));

var calculator = function (num1, num2, op) {
    this. result = function() {
        var num1 = this.num1;
        var num2 = this.num2;
        var op   = this.op;
    }
    if (op === "+") {
        var result = num1 + num2;
    } else if (op === "-"){
        var result = num1 - num2;
    }
    console.log("result: " + result)
};

function divNumbers(num1, num2) {
    return num1 / num2
}
var result = divNumbers(num1, num2)



if (op === "sub") {
    var result = num1 - num2;
} else if (op === "mul") {
    var result = num1 * num2;
}

function subNumbers(num1, num2) {
    return num1 - num2
}

var result = subNumbers(num1, num2)




function divNumbers(num1, num2) {
    return num1 / num2
}
var result = divNumbers(num1, num2)

function mulNumbers(num1, num2) {
    return num1 * num2
}
var result = mulNumbers(num1, num2)






console.log("The result is: " ,result)


